"use client"
import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
    label: string;
    loading: React.ReactNode;
}

export const SubmitButton = ({ label, loading }: SubmitButtonProps) => {
    const { pending } = useFormStatus()
    return (
        <button type='submit' disabled={pending} aria-disabled={pending} className='p-2 bg-rose-500 text-white rounded-md font-semibold w-full'>
            {pending ? loading : label}
        </button>
    )
}