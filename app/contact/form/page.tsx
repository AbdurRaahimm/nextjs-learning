import React from 'react'
import Form from 'next/form'
import SubmitButton from '@/app/contact/submit-form/SubmitButton'

export default function ContactForm() {
  return (
    <section>
      <div className=" mt-2 max-w-lg mx-auto">
        <h1 className="text-xl text-gray-800 sm:text-2xl font-bold mb-4">Contact Form</h1>
        <Form action="/contact/submit-form" >
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="name" className="leading-7 py-4 text-lg text-gray-900">Name</label>
              <input type="text" id="name" name="name" required
                className=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out " />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="email" className="leading-7 py-4 text-lg text-gray-900">Email</label>
              <input type="email" id="email" name="email" required
                className=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="message" className="leading-7 py-4 text-lg text-gray-900">Message</label>
              <textarea id="message" name="message" required
                className=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div className="p-2 w-full">
            <SubmitButton />
          </div>
        </Form>
      
      </div>
    </section>
  )
}
