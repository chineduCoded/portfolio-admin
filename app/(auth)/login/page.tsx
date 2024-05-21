import { LoginForm } from "@/components/login-form"
import Link from "next/link"

const Login = () => {
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in into your account</h2>
            </div>
            <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
                <LoginForm />
                <p className="mt-8 text-center text-sm text-gray-500">
                    Don't have an account?
                    <Link href="/signup" className="ml-1 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign up</Link>
                </p>
            </div>
        </div>
    )
}

export default Login