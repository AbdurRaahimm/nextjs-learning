import { updateApiPost } from "@/apis/apicrud";
import { apiType } from "@/types/type";
import { redirect } from "next/navigation";

// Server-side action for handling form data and redirecting
export async function updatePostAction(formData: FormData) {
    "use server"; // Next.js directive for server-side action

    // Retrieve and validate form data
    const title = formData.get("title");
    const content = formData.get("content");
    const id = formData.get("id");
    // Check if title and content are strings
    if (typeof title !== "string" || typeof content !== "string") {
        throw new Error("Invalid title or content");  // Error handling for invalid inputs
    }

    // Define the post object and assign validated data
    const post: apiType = {
        id: Number(id),
        title,
        content,
    };

    // Call API to update the post
    try {
        await updateApiPost(post);
    } catch (error) {
        console.error("Failed to update post:", error);
        throw new Error("Failed to update post");
    }

    // Redirect to the 'crud' page after successful post update
    redirect("/crud");
}
