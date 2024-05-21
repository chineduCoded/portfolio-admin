import { z } from 'zod'

export const SignupFormSchema = z.object({
    username: z
        .string()
        .min(2, { message: 'Username must be at least 2 characters long.' })
        .max(25, { message: 'Username cannot be longer than 25 characters.' })
        .regex(/^[a-zA-Z0-9_-]+$/, { message: 'Username can only contain letters, numbers, underscore, and hyphen.' })
        .transform((value) => value.toLowerCase()),
    email: z
        .string()
        .email({ message: 'Invalid email address.' })
        .trim(),
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long.' })
        .max(16, { message: 'Password cannot be longer than 16 characters.' })
        .regex(/[a-zA-Z]/, { message: 'Password must contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Password must contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, { message: 'Password must contain at least one special character.' })
        .trim(),
});

export const SigninFormSchema = z.object({
    username: z
        .string()
        .min(2, { message: 'Username must be at least 2 characters long.' })
        .max(25, { message: 'Username cannot be longer than 25 characters.' })
        .trim(),
    password: z
        .string()
        .min(8, { message: 'Be at least 8 characters long' })
        .max(16, { message: 'Password cannot be longer than 16 characters.' })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Contain at least one special character.',
        })
        .trim(),
})


export type SignupFormState =
    | {
        fieldErrors?: {
            username?: string[]
            email?: string[]
            password?: string[]
        }
        error?: string
        message?: string
        status?: string | undefined | null
    }
    | undefined


export type SigninFormState =
    | {
        errors?: {
            username?: string[]
            password?: string[]
        }
        message?: string
    }
    | undefined