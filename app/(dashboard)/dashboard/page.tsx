
'use client';
import Logout from '@/components/Logout';
import useUser from '@/hooks/useUser'; // Adjust the path as necessary

export default function Dashboard() {
    const user = useUser(); // Call the custom hook to get user data

    return (
        <div className='py-8'>
            <h1 className='text-2xl font-bold'>Dashboard</h1>
            {user ? (
                <div className='flex items-center justify-around'>

                    <div className="">
                        <img src={`https://placehold.co/400?text=${user.name}`} alt={user.name} width={200} height={200} className="rounded-full" />
                        <p className='text-lg font-bold'>Name: {user.name}</p>
                        <p className='text-lg font-bold'>Email: {user.email}</p>
                    </div>

                    <Logout />
                </div>
            ) : (
                <p>No user is logged in.</p>
            )}
        </div>
    );
}
