// Import necessary dependencies
import React from 'react';
import { getApiPost } from '@/apis/apicrud';
import { updatePostAction } from '@/actions/updatePostAction';
import Form from 'next/form';
import SubmitButton from './SubmitButton';

export default async function UpdatePost({ params }: { params: { id: number } }) {

    const { id } = await params;
    const post = await getApiPost(id);

    return (
        <section className="flex flex-col justify-center items-center py-20 space-y-4">
            <h1 className="text-4xl font-bold">Update Post</h1>
            {/* Form action points to createPostAction for server-side processing */}
            <Form className="flex flex-col gap-4" action={updatePostAction}>
                <input
                    type="hidden"
                    name="id"
                    defaultValue={post.id}
                />
                <input
                    type="text"
                    placeholder="Title"
                    className="border border-gray-300 rounded-md p-2"
                    name="title"
                    defaultValue={post.title}
                />
                <textarea
                    placeholder="Content"
                    className="border border-gray-300 rounded-md p-2"
                    name="content"
                    defaultValue={post.content}
                />
                <SubmitButton />
            </Form>
        </section>
    );
}


