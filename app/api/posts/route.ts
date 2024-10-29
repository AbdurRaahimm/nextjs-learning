import { apiType } from '@/types/type';
import postsData from '@/data/posts.json';
import { NextRequest, NextResponse } from 'next/server';


let posts: apiType[] = postsData; // Mock database


// CREATE - Handle POST request to add a new post
export async function POST(request: NextRequest) {
    try {
        const { title, content } = await request.json();
        const newPost: apiType = {
            id: Date.now(),
            title,
            content
        };
        posts.push(newPost);
        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error creating post. Please try again." }, { status: 500 })
    }
}

// READ - Handle GET request to retrieve all posts
export async function GET() {
    try {
        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error fetching posts" }, { status: 500 })
    }
}

// DELETE - Handle DELETE request to delete a post
export async function DELETE(request: NextRequest) {
    try {
        const { id } = await request.json();
        // one way to delete a post
        // posts = posts.filter((post) => post.id !== id);
        // another way to delete a post
        const postIndex = posts.findIndex((post) => post.id === id);
        if (postIndex !== -1) {
            posts.splice(postIndex, 1);
            return NextResponse.json({ message: "Post deleted successfully" }, { status: 200 })
        }
        return NextResponse.json({ message: "Post not found" }, { status: 404 })
    } catch (error) {
        return NextResponse.json({ message: "Error deleting post. Please try again." }, { status: 500 })
    }
}
