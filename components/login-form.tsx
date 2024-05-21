"use client"
import { loginUser } from "@/actions/auth"
import { useFormState } from "react-dom"
import { SubmitButton } from "@/components/submit-button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import Link from "next/link"

const initialState = {
    message: ""
}


const LoginForm = () => {
    const [state, formAction] = useFormState(loginUser, initialState)

    const form = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    })

    return (
        <Form {...form}>
            <form action={formAction} className="space-y-6">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="block text-sm font-semibold leading-6 text-gray-900">Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Username" {...field} />
                            </FormControl>
                            {state?.message && (
                                <FormDescription aria-live="polite" className="sr-only">{state?.message}</FormDescription>
                            )}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="block text-sm font-semibold leading-6 text-gray-900">Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Password" {...field} />
                            </FormControl>
                            {state?.message && (
                                <FormDescription aria-live="polite" className="sr-only">{state?.message}</FormDescription>
                            )}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-end">
                    <Link href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password</Link>
                </div>
                <SubmitButton loading="Submitting..." label="Login" />
            </form>
        </Form>
    )
}

export { LoginForm }