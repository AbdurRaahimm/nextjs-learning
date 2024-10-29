export const getUser = async () => {
    if (typeof window === 'undefined') return null; // Check if we are in a server environment

    try {
        // Attempt to retrieve users from localStorage
        const usersJson = localStorage.getItem('users');
        const users = usersJson ? JSON.parse(usersJson) : []; // Parse only if users exist

        // Log the users for debugging purposes
        // console.log('Users from localStorage:', users);

        // Find the logged-in user
        const user = users.find((user: { isLoggedIn: boolean }) => user.isLoggedIn);

        // Check if user exists and return name and email
        if (user) {
            return {
                name: user.name || null,
                email: user.email || null,
            };
        }
    } catch (error) {
        console.error("Error parsing users from localStorage:", error);
    }

    return null; // Return null if no user is found or on error
};
