import Head from 'next/head';
import Link from 'next/link';
// import { use } from 'next/stdlib';
import { FormEvent } from 'react';
import GeabaireContactForm from './GeabaireContactForm';

export default function SupportPage() {
    // Function to handle the form submission
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent the default form submission

        const form = event.currentTarget;
        const formData = new FormData(form);
        const queryString = new URLSearchParams(formData as any).toString();

        // Construct the URL with the query string
        const url = `/api/contact?${queryString}`;

        // Navigate to the URL (you might want to send this to an API endpoint)
        window.location.href = url;
    };

    return (
        <>
            <Head>
                <title>Support | Geabaire</title>
            </Head>
            <div className="w-full flex justify-center">
                <div className="w-full max-w-7xl min-h-screen flex flex-col">
                    <div className="text-4xl lg:text-6xl text-black text-center py-4">
                        Geabaire — Support
                    </div>

                    {/* FAQ Section */}
                    <div className="my-8 px-4">
                        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold">How do I reset my password?</h3>
                                <p>This currently isn&apos;t possible via a self-service system, please contact our support.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Where can I find documentation?</h3>
                                <p>Unfortunately as Geabaire is currently in private beta we do not presently have public documentation.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Where can I get an invite code</h3>
                                <p>You can request one using the contact form below. Please note that these are not guarenteed.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Where can I find the privacy policy?</h3>
                                <p>You can find our privacy policy <Link href={"/en/geabaire/privacy"} className='text-cyan-700 font-bold'>here</Link>.</p>
                            </div>
                            {/* Add more FAQs as needed */}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="my-8 px-4">
                        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-6">Contact Us</h2>
                        {/* {use(ContactForm)} */}
                        <GeabaireContactForm/>
                    </div>

                    {/* Additional Contact Info */}
                    <div className="my-8 px-4">
                        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-6">Other Ways to Reach Us</h2>
                        <div className="text-center">
                            <p>Email: errityr (at) tcd (dot) ie</p>
                            <p>Address: Room 4074a, Phonetics and Speech Lab, Trinity College, Dublin, Ireland.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}