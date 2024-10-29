"use client";
import { signin } from '@/actions/signinAction';
import Form from 'next/form';
import Link from 'next/link';
import { useActionState } from 'react';
import SignInBtn from './SignInBtn';


export default function SigninForm() {
    const [state, action] = useActionState(signin, undefined);
    return (
        <section className="flex flex-col items-center pt-6">
            <div
                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Login to your account
                    </h1>
                    <Form className="space-y-4 md:space-y-6" action={action}>

                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="emelia_erickson24@gmail.com" required />
                        </div>
                        {state?.errors?.email && <p className="text-red-500">{state.errors.email}</p>}
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        {state?.errors?.password && <p className="text-red-500">{state.errors.password}</p>}
                        <SignInBtn />  
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400"> You don't have an account?
                            <Link
                                className="font-medium text-blue-600 hover:underline dark:text-blue-500" href="/signup-form">
                                Sign up here
                            </Link>
                        </p>
                    </Form>
                </div>
            </div>
        </section>
    )
}