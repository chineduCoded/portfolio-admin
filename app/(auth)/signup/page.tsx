import SignUpForm from "@/components/signup-form"
import Link from "next/link"


const SignUp = () => {
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create an account</h2>
            </div>
            <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
                <SignUpForm />
                <p className="mt-8 text-center text-sm text-gray-500">
                    Already have an account?
                    <Link href="/login" className="ml-1 font-semibold leading-6 text-blue-600 hover:text-blue-500">Sign in</Link>
                </p>
            </div>
        </div>
    )
}

export default SignUp