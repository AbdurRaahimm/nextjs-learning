

import { useEffect, useState } from 'react';
import { getUser } from "@/lib/utils"; 

interface User {
    name: string;
    email: string;
}

const useUser = () => {
    const [user, setUser] = useState<User | null>(null); // State to hold the user information

    useEffect(() => {
        const fetchUser = async () => {
            const userData = await getUser(); // Await the getUser function
            setUser(userData); 
        };

        fetchUser(); // Call the async function
    }, []); 

    return user; // Return the user data
};

export default useUser;
