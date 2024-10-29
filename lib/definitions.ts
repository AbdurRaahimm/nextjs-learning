import { z } from "zod";

export const SignupFormSchema = z.object({
    name: z
        .string()
        .min(3, { message: "Name must be at least 3 characters long" })
        .trim(),
    email: z.string().email({ message: "Invalid email address" }).trim(),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[A-Z]/, { message: 'Contain at least one capital letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Contain at least one special character.',
        })
        .trim(),
});

export type FormState =
    | {
        errors?: {
            name?: string[];
            email?: string[];
            password?: string[];
        };
        message?: string | null;
    }
    | undefined;



export const LoginFormSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }).trim(),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }).trim(),
});

export type LoginFormState =
    | {
        errors?: {
            email?: string[];
            password?: string[];
        };
    }
    | undefined;
