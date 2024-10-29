import { postType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";


export default function Post({ post }: { post: postType }) {
    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">

                <Link href={`/${post.id}`}>
                    <Image
                        src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=625.0&amp;sharp=10&amp;w=1000"
                        alt={post.title}
                        placeholder="blur"
                        blurDataURL="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=625.0&amp;sharp=10&amp;w=1000"
                        quality={100}
                        width={1000}
                        height={625}
                    />
                </Link>
                <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
                    <a href="#" className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">{post.title}</a>
                    <p className="text-gray-500 text-sm">
                        {post.content}
                    </p>
                    <p className="mt-5 text-gray-600 text-xs">
                        By {" "}
                        <a href="#" className="text-xs text-indigo-600 transition duration-500 ease-in-out">
                            {post.author}
                        </a> | in <a href="#" className="text-xs text-indigo-600 transition duration-500 ease-in-out">
                            {post.category}
                        </a>
                    </p>
                </div>

            </div>

        </div>

    )
}
