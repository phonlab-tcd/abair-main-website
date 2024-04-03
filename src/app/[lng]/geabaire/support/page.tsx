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

                    <div className="my-8 px-4">
                        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-6">Documents</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold">Geabaire — Leagan Gaeilge [PDF]</h3>
                                <p>View <Link href={"https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/publications/Geabaire%20-%20Leagan%20Gaeilge-compressed.pdf"} className='text-cyan-700 font-bold'>here</Link>.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Geabaire — Leagan Bearla (English) [PDF]</h3>
                                <p>View <Link href={"https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/publications/Geabaire%20-%20Leagan%20Bearla-compressed.pdf"} className='text-cyan-700 font-bold'>here</Link>.</p>
                            </div>
                        </div>
                    </div>

                    <div className="my-8 px-4">
                        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-6">Videos</h2>
                        <div className="space-y-4">
                            <h3 className="text-1xl lg:text-2xl font-semibold text-center mb-6">Irish (Leagan Gaeilge)</h3>
                            <div className="flex justify-center">
                                <iframe className='w-full max-w-xl' width="560" height="315" src="https://www.youtube.com/embed/0WWz6T_5FV4?si=OaHgYBUz93QHlMfW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                            <h3 className="text-1xl lg:text-2xl font-semibold text-center mb-6">English (Leagan Bearla)</h3>
                            <div className="flex justify-center">
                                <iframe className='w-full max-w-xl' width="560" height="315" src="https://www.youtube.com/embed/GiLjw-Joyhg?si=N5UwlDfjhJwHNW6y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="my-8 px-4">
                        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold">I would like to join the TestFlight.</h3>
                                <p>Right now we are not accepting additional people in the Geabaire beta.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Where can I get an invite code</h3>
                                <p>You can request one using the contact form below, although these are only available for those in the TestFlight.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Can I use my Geabaire app acount on the website?</h3>
                                <p>Yes, you can use Geabaire from your web browser with your pre-existing account  <Link href={"https://geabaire.abair.ie"} className='text-cyan-700 font-bold'>here</Link>.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">How do I reset my password?</h3>
                                <p>This currently isn&apos;t possible via a self-service system, please contact our support.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Where can I find documentation?</h3>
                                <p>The only publicly available documentation at present are the videos and PDFs linked below.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Where can I find the privacy policy?</h3>
                                <p>You can find our privacy policy <Link href={"/en/geabaire/privacy"} className='text-cyan-700 font-bold'>here</Link>.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">I found a bug...</h3>
                                <p>Please write to us using the contact form below to make us aware of bugs you have encountered. Ensure to include replication steps. Report crashes via TestFlight.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">I have a feature idea...</h3>
                                <p>Please write to us using the contact form below to give us your ideas, we are a small team and we can&apos;t cater to everyone, but we will do our best.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold">Is the app available for Android?</h3>
                                <p>Right now we are only having an iOS Beta, however the Android version of the app is at an equal stage of development.</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="my-8 px-4">
                        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-6">Contact Us</h2>

                        <GeabaireContactForm />
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