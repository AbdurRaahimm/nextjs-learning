'use client';

import { logout } from "@/actions/signinAction";

export default function Logout() {

    const handleLogout = () => {
        logout();
        window.location.href = '/';
    }

    return <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-md"
    >Logout</button>;
}