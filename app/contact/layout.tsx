import ContactNav from "@/components/ContactNav"

export default function ContactLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section className=" py-10">
            <h1 className="text-4xl text-center font-bold capitalize">Contact page</h1>
            <ContactNav />
            
            {children}
        </section>
    )
}