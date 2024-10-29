import Sort from "@/components/Sort";


export const metadata = {
    title: "Contact",
    description: "Contact page",
}

export default function Contact() {
    return (
        <>
            <h1 className="text-xl text-center font-bold">Contact Info</h1>

            <div className="text-center">
                <p>Address: 123 Main St, Anytown, USA</p>
                <p>Phone: 123-456-7890</p>
                <p>Email: info@example.com</p>
            </div>
        </>
    );
}
