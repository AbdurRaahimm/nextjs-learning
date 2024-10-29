// Import necessary dependencies
import React from 'react';
import Form from 'next/form';
import { createPostAction } from '@/actions/createPostAction';
import SubmitButton from './SubmitButton';

export default function CreatePost() {
    return (
        <section className="flex flex-col justify-center items-center py-20 space-y-4">
            <h1 className="text-4xl font-bold">Create Post</h1>
            {/* Form action points to createPostAction for server-side processing */}
            <Form className="flex flex-col gap-4" action={createPostAction}>
                <input
                    type="text"
                    placeholder="Title"
                    className="border border-gray-300 rounded-md p-2"
                    name="title"
                />
                <textarea
                    placeholder="Content"
                    className="border border-gray-300 rounded-md p-2"
                    name="content"
                />
                <SubmitButton />
               
            </Form>
        </section>
    );
}

