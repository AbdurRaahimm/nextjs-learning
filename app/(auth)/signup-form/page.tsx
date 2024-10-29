"use client";
import { signup } from '@/actions/signupAction';
import Form from 'next/form';
import Link from 'next/link';
import { useActionState } from 'react';
import SignUpBtn from './SignUpBtn';
// import { useFormState } from 'react-dom';



export default function SignupForm() {
    const [state, action] = useActionState(signup, undefined );
    return (
        <section className="flex flex-col items-center pt-6">
            <div
                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create an
                        account
                    </h1>
                    <Form className="space-y-4 md:space-y-6" action={action}>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your full name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Emelia Erickson"  />
                        </div>
                        {state?.errors?.name && <p className="text-red-500">{state.errors.name}</p>}
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="emelia_erickson24@gmail.com"  />
                        </div>
                        {state?.errors?.email && <p className="text-red-500">{state.errors.email}</p>}
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                        </div>
                        {state?.errors?.password && (
                            <>
                                <p>Password must:</p>
                                <ul>
                                    {state.errors.password.map((error: string) => (
                                        <li className="text-red-500" key={error}>{error}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                        <SignUpBtn  />
                        {/* {state?.error?.message && <p className="text-red-500">{state.error.message}</p>} */}
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account?
                            <Link
                                className="font-medium text-blue-600 hover:underline dark:text-blue-500" href="/login-form">Sign in here
                            </Link>
                        </p>
                    </Form>
                </div>
            </div>
        </section>
    )
}