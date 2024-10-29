import { redirect } from "next/navigation";

import { createApiPost } from "@/apis/apicrud";

import { apiType } from "@/types/type";

// Server-side action for handling form data and redirecting
export async function createPostAction(formData: FormData) {
    "use server"; // Next.js directive for server-side action

    // Retrieve and validate form data
    const title = formData.get("title");
    const content = formData.get("content");

    if (typeof title !== "string" || typeof content !== "string") {
        throw new Error("Invalid title or content");  // Error handling for invalid inputs
    }

    // Define post object and call API to save it
    const post: apiType = {
        id: Math.random(), // Temporary ID, replace with backend logic if needed
        title,
        content,
    };

    await createApiPost(post); // Save post using createApiPost function

    // Redirect to the 'crud' page after successful post creation
    redirect("/crud");
}
