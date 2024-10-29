import { NextRequest, NextResponse } from 'next/server';
import posts from '@/data/posts.json';


// READ - Handle GET request to retrieve single post
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const post = posts.find((post) => post.id === Number(id));
        if (!post) {
            return NextResponse.json({ message: "Post not found" }, { status: 404 })
        }
        return NextResponse.json(post, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error fetching post" }, { status: 500 })
    }
}

// UPDATE - Handle PUT request to update a post
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const { title, content } = await request.json();
        const postIndex = posts.findIndex((post) => post.id === Number(id));
        if (postIndex === -1) {
            return NextResponse.json({ message: "Post not found" }, { status: 404 })
        }
        posts[postIndex] = { id: Number(id), title, content };
        return NextResponse.json({ message: "Post updated successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error updating post" }, { status: 500 })
    }
}
