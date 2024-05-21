export type FormState = {
    status: "UNSET" | "ERROR" | "SUCCESS";
    message: string;
    fieldErrors: Record<string, string[] | undefined>;
    timestamp: number;
}

export type FieldErrorProps = {
    formState: FormState;
    name: string;
}