import { commentType, postType } from "@/types/type"

export async function getPost() {
    let data = await fetch('https://api.vercel.app/blog')
    let posts: postType[] = await data.json();
    return posts
}

export async function getPostById(id: number) {
    let data = await fetch(`https://api.vercel.app/blog/${id}`)
    let post: postType = await data.json();
    return post
}

export async function getPostByComment(id: number) {
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    let comments: commentType[] = await data.json();
    return comments
}
