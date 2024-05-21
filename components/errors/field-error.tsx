import { FieldErrorProps } from "@/schema/types";


const FieldError = ({
    formState,
    name,
}: FieldErrorProps) => {
    return (
        <span className="text-xs text-red-500 font-semibold">
            {formState.fieldErrors[name]?.[0]}
        </span>
    )
}

export { FieldError }