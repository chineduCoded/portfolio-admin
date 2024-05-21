import { FormState } from "@/schema/types";

export const EMPTY_FORM_STATE: FormState = {
    status: "UNSET",
    message: "",
    fieldErrors: {},
    timestamp: Date.now(),
}