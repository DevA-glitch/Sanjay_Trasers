import React from 'react'
import "../Contact/contactPage.css"


const ContactPage = () => {
    return (
        <>
            <div className='mt-20 mb-20'>
                <div className='flex items-start justify-around coact-page'>
                <div className='flex flex-col gap-4'>
                <h1 className='text-4xl font-bold'>#Lets Talk</h1>
                    <form className='flex items-start justify-center flex-col gap-2'>
                        <label className='flex flex-col'><h2 className='text-2xl'>Enter Name:</h2>
                            <input type='text' className=' border-2 w-[50vh] h-12 placeholder:px-2 text-xl' />
                        </label>
                        <label className='flex flex-col'><h2 className='text-2xl'>Enter Email:</h2>
                            <input type='email' className=' border-2 w-[50vh] h-12 placeholder:px-2 text-xl' />
                        </label>
                        <label><h2 className='text-2xl'>Enter the message:</h2>
                            <textarea className='text-2xl border-4 w-[50vh] h-24'>
                            </textarea>
                        </label>
                        <div className='flex items-center justify-center text-center'>
                            <button type='submit' className='bg-black hover:bg-red-300 text-white px-5 py-2'>Submit</button>
                        </div>
                    </form>
                    <div className='text-center'>Or</div>
                    <div className='flex flex-col gap-3'>
                        <div>
                            <h2 className='text-2xl'>WhatsApp Us:</h2>
                            <h3 className=' bg-green-400 text-center px-5 py-2'>
                            <a className='text-xl' href='https://wa.me/+918012363063'>+91 8012363063</a>
                            </h3>
                        </div>
                        <div>
                            <h2 className='text-2xl'>Call Us:</h2>
                            <h3 className=' bg-blue-300 text-center px-5 py-2'>
                            <a  className='text-xl' href="tel:+917904221920">+917904221920</a>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='map flex flex-col gap-4 mt-5'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-bold'>Address</h1>
                        <p>aXXXXXXX</p>
                        <p>aXXXXXXX,XXXXXXX</p>
                        <p>aXXXXXXX,XXXXXXXXXXXXXXX</p>
                    </div>
                    <h1>Locate US:</h1>
                <iframe className='h-[50vh] w-[90vh]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.0428878828266!2d76.95847739999999!3d10.960133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85bd189cb5d73%3A0xc097cc4b545c40c7!2s9%2C%20Park%20Ave%2C%20Sai%20Garden%2C%20Coimbatore%2C%20Tamil%20Nadu%20641008!5e0!3m2!1sen!2sin!4v1688364300369!5m2!1sen!2sin" width="600" 
                height="450"  
                title='Map'
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage;