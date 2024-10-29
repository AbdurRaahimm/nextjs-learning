import { SignupFormSchema, FormState } from '@/lib/definitions'
import { redirect } from 'next/navigation';


export async function signup(state: FormState, formData: FormData) {
    // Validate form fields
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    })

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    console.log(validatedFields.data);

    try {
        // Retrieve current users from local storage or set an empty array if none
        const users = JSON.parse(localStorage.getItem('users') || '[]');

        // Add the new user data and save it back to localStorage
        localStorage.setItem('users', JSON.stringify([...users, {
            ...validatedFields.data,
            isLoggedIn: false,
        }]));

        // go to login page
        if (validatedFields.success) {
            redirect('/login-form');
        }

        return { success: true };
    } catch (error) {
        console.error('Error accessing localStorage:', error);
        return { success: false, error: 'Failed to save user data.' };
    }
}