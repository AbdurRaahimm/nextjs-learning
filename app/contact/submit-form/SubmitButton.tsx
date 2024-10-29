"use client";
import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <div>
            <button disabled={pending} type="submit"
                className="flex text-white bg-gray-900 border-0 py-3 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                {pending ? "Sending..." : "Send"}
            </button>
        </div>
    )
}