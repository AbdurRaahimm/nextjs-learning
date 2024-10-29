"use client";
import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button disabled={pending} type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed">
            {pending ? "Updating..." : "Update"}
        </button>
    )
}