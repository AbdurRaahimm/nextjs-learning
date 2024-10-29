"use client"

import { deleteApiPost } from "@/apis/apicrud";
import { useRouter } from "next/navigation";

export default function ApiPostDelete({ id }: { id: number }) {
    const router = useRouter();
    const handleDelete = async (id: number) => {
        const confirm = window.confirm("Are you sure you want to delete this post?");
        if (confirm) {
            try {
                await deleteApiPost(id);
                router.refresh();
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <button
            onClick={() => handleDelete(id)}
            className="bg-red-500 text-white px-4 py-2 rounded-md">
            Delete
        </button>
    )

}