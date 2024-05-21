import { FormState } from "@/schema/types";


export const toFormState = (
    status: FormState["status"],
    message: string
) => {
    return {
        status,
        message,
        fieldErrors: {},
        timestamp: Date.now(),
    }
}