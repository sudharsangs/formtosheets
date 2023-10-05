"use client"
import React, { useState } from 'react'

export const Form = () => {
    const [formLink, setFormLink] = useState<string>("")
    const [isValidURL, setIsValidURL] = useState<boolean>(true)
    const [error, setError] = useState<string>('');

  const handleFormLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputURL = e.target.value;
    setFormLink(inputURL);

    const urlPattern = /^https:\/\/docs\.google\.com\/forms\/d\/[a-zA-Z0-9_-]+(\/.*)?$/i;
    const shortURLPattern = /^https:\/\/forms\.gle\/[a-zA-Z0-9_-]+$/i;

    if (shortURLPattern.test(inputURL)) {
      setError("Please don't enter shortened URL");
      setIsValidURL(false);
    } else if (urlPattern.test(inputURL)) {
      setError('');
      setIsValidURL(true);
    } else {
      setError('Please enter a valid URL');
      setIsValidURL(false);
    }
  };

    const handleGenerateCode = () => {
        const requestBody = {
            formLink: formLink,
        };
        fetch('/api/v1/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
            .then((response) => {
                if (response.ok)
                {
                    console.log('Form submitted successfully');
                } else
                {
                    console.error('Form submission failed');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <>
            <section id="get-started">
                <div className="flex flex-col p-4 mt-4">
                    <h2 className="md:text-3xl text-2xl font-semibold leading-normal">
                        Ready to Make Google Forms Part of Your Website?
                    </h2>
                    <p className="mt-3 sm:text-lg text-md text-gray-300">
                        Begin your journey with form2sheets today and empower your website with seamless form integration. Bid farewell to manual data entry, and say hello to forms that effortlessly become a part of your site's core functionality.
                    </p>
                    <p className="mt-3 sm:text-lg text-md text-gray-300">
                        Don't wait – turn your Google Forms into powerful site tools with form2sheets!
                    </p>
                    <div className="flex flex-col sm:flex-row items-center mt-2 w-full gap-2">
                        <input
                            type="text"
                            className="p-2 border rounded-md sm:mr-2 sm:w-10/12 w-full text-gray-800"
                            placeholder="Enter Google Form link"
                            value={formLink}
                            onChange={handleFormLinkChange}
                        />
                        <button
                            className="bg-orange-500 disabled:cursor-not-allowed hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                            onClick={handleGenerateCode}
                            disabled={!isValidURL}
                        >
                            Generate Code
                        </button>
                    </div>
                    {!isValidURL ? <p className="text-red-500 mt-2">{error}</p> : null}
                </div>
            </section>
            <section id="code-section" className="flex flex-col p-4 mt-4">
                <h2 className="md:text-3xl text-2xl font-semibold leading-normal">
                    Code Snippet
                </h2>
                <div className="flex items-center mt-4">
                    <div className="framework-selector mr-4">
                        <label htmlFor="framework-select text-xl">Select Framework:</label>
                        <select
                            id="framework-select"
                            className="border p-2 mx-3 rounded-md bg-gray-700"
                        >
                            <option value="react">React</option>
                            <option value="html">HTML</option>
                            <option value="vue">Vue</option>
                            <option value="svelte">Svelte</option>
                        </select>
                    </div>
                </div>

                <div className="code-container mt-4 bg-gray-100 p-4 rounded-lg relative">
                    <button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded absolute top-2 right-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clipboard-list" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                            <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                            <path d="M9 12l.01 0"></path>
                            <path d="M13 12l2 0"></path>
                            <path d="M9 16l.01 0"></path>
                            <path d="M13 16l2 0"></path>
                        </svg>
                    </button>
                    <pre className="border p-4 rounded-md bg-white">
                        <code className="text-gray-800">
                            {`<div>Hello, HTML!</div>`}
                        </code>
                    </pre>
                </div>
            </section>
        </>
    )
}
