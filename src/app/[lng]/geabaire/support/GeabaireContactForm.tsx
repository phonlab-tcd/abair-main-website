'use client';
import { FormEvent, useState } from 'react';
import Script from 'next/script';

// Extend the Window interface to include the onTurnstileVerified function
const GeabaireContactForm = () => {
  const [notice, setNotice] = useState<string | undefined>();
  const [noticeColor, setNoticeColor] = useState<string | undefined>();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submitted')
    const data = formDataToObject(new FormData(event.currentTarget));
    console.log(data);

    const response = await fetch(process.env.NEXT_PUBLIC_API_LINK + "/geabaire/contact", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      cache: "no-cache",
      body: JSON.stringify(data)
    });

    if (response.status === 200) {
      setNotice("We have received your message.");
      setNoticeColor("bg-green-300")
    } else {
      setNotice("An error occured while sending this message, did you pass verification?");
      setNoticeColor("bg-red-300")
    }

    // const body = await response.json();
    // console.log(body);
  };

  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer>
      </Script>
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        {notice && (
          <div className={"rounded p-3 px-5 text-white font-bold " + noticeColor}>
            {notice}
          </div>
        )
        }
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="mb-2">Name</label>
          <input type="text" id="name" name="name" className="border px-3 py-2" placeholder="Your Name" required />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="mb-2">Email</label>
          <input type="email" id="email" name="email" className="border px-3 py-2" placeholder="Your Email" required />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="message" className="mb-2">Message</label>
          <textarea id="message" name="message" className="border px-3 py-2" rows={5} placeholder="Your Message" required></textarea>
        </div>

        <div className="cf-turnstile mb-3" data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_KEY}></div>

        <div className="text-center">
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-200">Send Message</button>
        </div>
      </form>
    </>
  );
};

export default GeabaireContactForm;

const formDataToObject = <T extends Record<string, FormDataEntryValue | FormDataEntryValue[]>>(formData: FormData): T => {
  const object: Record<string, FormDataEntryValue | FormDataEntryValue[]> = {};
  formData.forEach((value, key) => {
    // Check if the object already contains the key
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      // If the key already exists, convert it to an array or push the value if it's already an array
      if (!Array.isArray(object[key])) {
        object[key] = [object[key] as FormDataEntryValue];
      }
      (object[key] as FormDataEntryValue[]).push(value);
    } else {
      // If the key doesn't exist, add it to the object as a new entry
      object[key] = value;
    }
  });
  return object as T;
}