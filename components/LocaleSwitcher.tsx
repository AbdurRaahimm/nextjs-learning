'use client'

import { usePathname, useRouter } from 'next/navigation'

export function LocaleSwitcher() {
    const pathname = usePathname()
    const router = useRouter()

    function switchLocale(locale: string) {
        // Remove any existing locale prefix from the path (e.g., /en, /bn)
        const pathWithoutLocale = pathname.replace(/^\/(en|bn)/, '')

        // Construct the new path with the selected locale
        const newPath = `/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`

        // Use Next.js router to push the new path and re-render the page
        router.push(newPath)
    }

    return (
        <>
            <select onChange={(e) => switchLocale(e.target.value)}>
                <option value="en">English</option>
                <option value="bn">Bangla</option>
            </select>
        </>
    )
}
