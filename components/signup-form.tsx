"use client"

import { useFormState } from "react-dom"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { createUser } from "@/actions/auth"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { SubmitButton } from "@/components/submit-button"
import { z } from "zod"
import { SignupFormSchema } from "@/schema/form-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { EMPTY_FORM_STATE } from "@/lib/constants"
import { useFormReset } from "@/components/hooks/use-form-reset"
import { FieldError } from "@/components/errors/field-error"
import { useToastMessage } from "@/components/hooks/use-toast-message"

const SignUpForm = () => {
    const [formState, formAction] = useFormState(createUser, EMPTY_FORM_STATE)

    const form = useForm<z.infer<typeof SignupFormSchema>>({
        resolver: zodResolver(SignupFormSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        }
    })

    useToastMessage(formState)
    const formRef = useFormReset(formState)



    return (
        <Form {...form}>
            <form ref={formRef} action={formAction} className="space-y-6">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="block text-sm font-semibold leading-6 text-gray-900">Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Username" {...field} />
                            </FormControl>
                            <FormDescription aria-live="polite" className="sr-only">describe</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FieldError formState={formState} name="username" />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="block text-sm font-semibold leading-6 text-gray-900">Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                            <FormDescription aria-live="polite" className="sr-only">describe</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FieldError formState={formState} name="email" />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="block text-sm font-semibold leading-6 text-gray-900">Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Password" {...field} />
                            </FormControl>
                            <FormDescription aria-live="polite" className="sr-only">describe</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FieldError formState={formState} name="password" />

                <SubmitButton loading="Creating..." label="Create user" />

                {/* {noScriptFallback} */}
            </form>

        </Form>
    )
}

export default SignUpForm