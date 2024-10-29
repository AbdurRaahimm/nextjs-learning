import Link from "next/link";
import { redirect } from "next/navigation"; 

interface SearchParams {
    name: string;
    email: string;
    message: string;
}

export default async function SubmitForm({ searchParams }: { searchParams: SearchParams }) {
    const { name, email, message } = await searchParams;
    // if the form is submitted, redirect to the form page 
    if (!name || !email || !message) {
        redirect("/contact/form");
    }
    return (
        <div className="max-w-lg mx-auto">
            <h1 className="text-xl text-gray-800 sm:text-2xl font-bold mb-4">Form Submitted</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Message: {message}</p>
            <Link href="/contact/form"
                className="mt-4 inline-flex items-center px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md">
                Back to Form
            </Link>
        </div>
    )
}
