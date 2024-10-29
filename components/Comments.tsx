import { commentType } from "@/types/type"

export default function Comments({ comments }: { comments: commentType[] }) {
    return (
        <>
            <h2 className="text-2xl text-center font-bold mb-4">Comments</h2>
            {comments.map((comment) => (
                <div key={comment.id} className="border-b border-gray-300 mb-4 pb-4 w-1/2 mx-auto">
                    <h3 className="text-lg font-bold capitalize"> user name: {comment.name}</h3>
                    <p className="text-sm text-gray-500 capitalize">email: {comment.email}</p>
                    <p className="text-gray-700 capitalize">comment: {comment.body}</p>
                </div>
            ))}
        </>
    )
}
