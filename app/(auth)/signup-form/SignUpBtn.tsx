'use client'

import { useFormStatus } from 'react-dom';

export default function SignUpBtn() {

    const { pending } = useFormStatus();

    return (
        <button
            disabled={pending}
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed">
            {pending ? "Creating..." : "Create an account"}
        </button>
    )
}