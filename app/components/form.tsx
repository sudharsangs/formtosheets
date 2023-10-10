"use client"
import { useState } from 'react';

type Response = {
    angularComponent: string,
    html: string,
    reactComponent: string,
    svelteComponent: string,
    vueComponent: string
}

export const Form = () => {
    const [formLink, setFormLink] = useState<string>("");
    const [isValidURL, setIsValidURL] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const [activeTab, setActiveTab] = useState<'react' | 'vue' | 'html' | 'svelte'>('react');
    const [response, setResponse] = useState<Response>({
        angularComponent: "",
        html: "",
        reactComponent: "",
        svelteComponent: "",
        vueComponent: ""
    });


    const handleFormLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputURL = e.target.value;
        setFormLink(inputURL);

        const urlPattern = /^https:\/\/docs\.google\.com\/forms\/d\/[a-zA-Z0-9_-]+(\/.*)?$/i;
        const shortURLPattern = /^https:\/\/forms\.gle\/[a-zA-Z0-9_-]+$/i;

        if (shortURLPattern.test(inputURL))
        {
            setError("Please don't enter shortened URL");
            setIsValidURL(false);
        } else if (urlPattern.test(inputURL))
        {
            setError('');
            setIsValidURL(true);
        } else
        {
            setError('Please enter a valid URL');
            setIsValidURL(false);
        }
    };

    const handleGenerateCode = () => {
        const requestBody = {
            formLink: formLink,
        };

        return fetch('/api/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
            .then((response) => {
                if (response.ok)
                {
                    return response.json();
                } else
                {
                    throw new Error('Form submission failed');
                }
            })
            .catch((error) => {
                throw error;
            });
    };

    const onClick = () => {
        handleGenerateCode()
            .then((responseData) => {
                setResponse(responseData.data as Response)
            })
            .catch((error) => {
                setResponse({
                    angularComponent: "",
                    html: "",
                    reactComponent: "",
                    svelteComponent: "",
                    vueComponent: ""
                })
            });
    }

    const showToast = () => {
        const toast = document.getElementById('toast') as HTMLElement;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }

    const handleCopy = () => {
        switch (activeTab)
        {
            case "react":
                navigator.clipboard.writeText(response.reactComponent);
                break;
            case "html":
                navigator.clipboard.writeText(response.html);
                break;
            case "svelte":
                navigator.clipboard.writeText(response.svelteComponent);
                break;
            case "vue":
                navigator.clipboard.writeText(response.vueComponent)
                break;
        }
        showToast()
    }

    return (
        <>
            <section id="get-started">
                <div className="flex flex-col p-4 mt-4">
                    <h2 className="md:text-3xl text-2xl font-semibold leading-normal">
                        Ready to Make Google Forms Part of Your Website?
                    </h2>
                    <p className="mt-3 sm:text-lg text-md text-gray-300">
                        Begin your journey with form2sheets today and empower your website with seamless form integration. Bid farewell to manual data entry, and say hello to forms that effortlessly become a part of your site&apos;s core functionality.
                    </p>
                    <p className="mt-3 sm:text-lg text-md text-gray-300">
                        Don&apos;t wait – turn your Google Forms into powerful site tools with form2sheets!
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
                            onClick={onClick}
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
                        <div className="space-x-4">
                            <button
                                className={`px-4 py-2 rounded-md ${activeTab === 'react'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                onClick={() => setActiveTab('react')}
                            >
                                React
                            </button>
                            <button
                                className={`px-4 py-2 rounded-md ${activeTab === 'vue'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                onClick={() => setActiveTab('vue')}
                            >
                                Vue
                            </button>
                            <button
                                className={`px-4 py-2 rounded-md ${activeTab === 'html'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                onClick={() => setActiveTab('html')}
                            >
                                HTML
                            </button>
                            <button
                                className={`px-4 py-2 rounded-md ${activeTab === 'svelte'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                onClick={() => setActiveTab('svelte')}
                            >
                                Svelte
                            </button>
                        </div>
                    </div>
                </div>


                <div className="code-container mt-4 bg-gray-100 p-4 rounded-lg relative">
                    <button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded absolute top-2 right-2" onClick={handleCopy}
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
                        <code className="text-gray-800 break-all overflow-hidden whitespace-pre-wrap break-word" >
                            {activeTab === 'react' && response.reactComponent}
                            {activeTab === 'vue' && response.vueComponent}
                            {activeTab === 'html' && response.html}
                            {activeTab === 'svelte' && response.svelteComponent}
                            {!formLink?.length || !isValidURL ? "Please enter form URL to view code" : null}
                        </code>
                    </pre> 
                    <div id="toast" className="absolute bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-md opacity-0 transition-opacity duration-300">
                        Copied!
                    </div>
                </div>
            </section>

        </>
    );
};
