import { apiType } from "@/types/type"

export const getApiPosts = async (): Promise<apiType[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`)
    if (!res.ok) {
        throw new Error('Failed to fetch posts')
    }
    return res.json()
}

export const getApiPost = async (id: number): Promise<apiType> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`)
    if (!res.ok) {
        throw new Error('Failed to fetch post')
    }
    return res.json()
}

export const createApiPost = async (post: apiType): Promise<apiType> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
        method: 'POST',
        body: JSON.stringify(post)
    })
    if (!res.ok) {
        throw new Error('Failed to create post')
    }
    return res.json()
}

export const updateApiPost = async (post: apiType): Promise<apiType> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title: post.title,
            content: post.content
        })
    })
    if (!res.ok) {
        throw new Error('Failed to update post')
    }
    return res.json()
}

export const deleteApiPost = async (id: number): Promise<apiType> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
        method: 'DELETE',
        body: JSON.stringify({ id })
    })
    if (!res.ok) {
        throw new Error('Failed to delete post')
    }
    return res.json()
}


