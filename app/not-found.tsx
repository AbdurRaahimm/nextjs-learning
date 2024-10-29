"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    return (
        <div className="text-center py-10">
            <h1 className="text-4xl font-bold">Not Found</h1>
            <p className="text-lg">Could not find requested resource</p>
            <button className="bg-primary p-2 rounded-md" onClick={() => router.push("/")}>Return home</button>
        </div>
    );
}