import { getApiPosts } from "@/apis/apicrud"
import Link from "next/link"
import ApiPostDelete from "@/components/ApiPostDelete";

export const metadata = {
    title: "CRUD",
    description: "CRUD page",
}

export default async function CRUD() {
    const posts = await getApiPosts();

    return (
        <>
            <div className="flex justify-between items-center px-10 py-4">
                <h1 className="text-4xl font-bold">CRUD</h1>
                <Link href="/create-post" className="bg-blue-500 text-white px-4 py-2 rounded-md">Create</Link>
            </div>
            <section className="flex flex-col flex-wrap justify-center items-center sm:flex-row  gap-4 py-20">
                {posts.length === 0 ? (
                    <p>No posts found</p>
                ) : (
                    posts.map((post) => (
                        <div key={post.id} className="border border-gray-300 rounded-md p-4">
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                            <div className="flex gap-4 mt-4">
                                <Link href={`/update-post/${post.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md">Edit</Link>
                                {/* <button onClick={() => handleDelete(post.id)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button> */}
                                <ApiPostDelete id={post.id} />
                            </div>
                        </div>
                    ))
                )}
            </section>
        </>
    )
}