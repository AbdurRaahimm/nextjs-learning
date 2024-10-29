import { LoginFormSchema, LoginFormState } from '@/lib/definitions';
import { redirect } from 'next/navigation';

export async function signin(state: LoginFormState, formData: FormData) {

    // Validate form fields
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    // Ensure this code only runs client-side
    if (typeof window !== 'undefined') {
        // Retrieve users from localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');

        // Check if the user exists
        const user = users.find(
            (user: any) => user.email === validatedFields.data.email && user.password === validatedFields.data.password
        );

        if (!user) {
            return { success: false, error: 'Invalid email or password' };
        }

        // Update the user's isLoggedIn status to true
        user.isLoggedIn = true;
        localStorage.setItem('users', JSON.stringify(users)); // Save updated user status back to localStorage

        // Redirect to the dashboard
        if (validatedFields.success) {
            redirect('/dashboard');
        }
        return { success: true };
    }

    // If code runs on the server, return an error or safe response
    return { success: false, error: 'This function can only be run on the client side.' };
}


export async function logout() {
    // isLoggedIn to false
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((user: any) => user.isLoggedIn);
    user.isLoggedIn = false;
    localStorage.setItem('users', JSON.stringify(users));
}

