'use server'
import { ZodError } from "zod"
import { redirect, RedirectType } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { SigninFormSchema, SigninFormState, SignupFormSchema } from '@/schema/form-schema'
import { FormState } from '@/schema/types'
import { fromErrorToFormState } from '@/components/errors/fromErrorToFormState'
import { toFormState } from '@/lib/to-form-state'

export async function createUser(
    formState: FormState,
    data: FormData
): Promise<FormState> {
    const formData = Object.fromEntries(data)
    const validatedFields = SignupFormSchema.safeParse(formData)

    if (!validatedFields.success) {
        return {
            status: "ERROR",
            message: "",
            fieldErrors: validatedFields.error.flatten().fieldErrors,
            timestamp: Date.now(),
        }
    }
    const { username, email, password } = validatedFields.data
    try {
        const response = await fetch(`${process.env.EXTERNAL_API_BASE_URL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                email,
                password,
            }),
        })

        if (!response.ok) {
            throw new Error(`Failed to create user: ${response.statusText}`)
        }

        const data = await response.json()

        if (data.id) {
            return toFormState("SUCCESS", "User created successfully")
        }

    } catch (error: unknown) {
        return fromErrorToFormState(error)
    }

    revalidatePath('/')
    redirect("/login", RedirectType.push)
}

export async function loginUser(state: SigninFormState, formData: FormData) {
    const validatedFields = SigninFormSchema.safeParse({
        username: formData.get("username"),
        password: formData.get("password"),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    try {
        // Call database
        return { message: "user created successfully" }
    } catch (error: any) {
        // Handle errors
        return { message: "Failed to create user" }
    }

    redirect("/")
}
