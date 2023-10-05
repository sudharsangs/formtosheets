import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-800 text-gray-100 w-full flex items-center flex-col h-full">
      <div className="max-w-6xl sm:p-10">
        <section>
          <div className="flex justify-between sm:flex-row flex-col items-center">
            <div className="flex justify-center p-5 w-full">
              <Image alt="illustration" height={400} width={400} src={"/forms.svg"} />
            </div>
            <div className="p-4 mt-4">
              <h1 className="md:text-5xl text-4xl font-semibold leading-normal">Elevate Your Web Projects with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">form2sheets</span></h1>
              <p className="mt-3 sm:text-lg text-md text-gray-300">Fed up with manual data management for your Google Forms? Step into the future of seamless integration with form2sheets, your gateway to turning Google Forms into integral components of your website.</p>
            </div>

          </div>
        </section>
        <section id="why-choose-us">
          <div className="flex flex-col p-4 mt-4">
            <h2 className="md:text-3xl text-2xl font-semibold leading-normal">Why Choose form2sheets for Your Site's Forms?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
              <div className="bg-slate-50 shadow-xl ring-1 ring-gray-900/5  p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-700 mb-4">Real-Time Data Integration 🚀 </h3>
                <p className="text-gray-700 mb-4">Enjoy the convenience of Google Forms seamlessly embedded into your website, handling data collection and responses in real-time.</p>
              </div>
              <div className="bg-slate-50 shadow-xl ring-1 ring-gray-900/5  p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-700 mb-4">Seamless Website Integration 🌐 </h3>
                <p className="text-gray-700 mb-4">Craft and customize the HTML code to ensure your forms harmonize perfectly with your website's design and functionality.</p>
              </div>
              <div className="bg-slate-50 shadow-xl ring-1 ring-gray-900/5  p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-700 mb-4"> Automated Data Sync 📈</h3>
                <p className="text-gray-700 mb-4">Keep your data up-to-date as form responses are automatically synchronized with Google Sheets.</p>
              </div>
              <div className="bg-slate-50 shadow-xl ring-1 ring-gray-900/5  p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-700 mb-4">Developer-Centric 💻</h3>
                <p className="text-gray-700 mb-4">form2sheets is developer-friendly, providing you with the flexibility and tools to integrate forms effortlessly.</p>
              </div>
              <div className="bg-slate-50 shadow-xl ring-1 ring-gray-900/5  p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-700 mb-4">Security Assured 🔒</h3>
                <p className="text-gray-700 mb-4">Trust in the robust security of Google's infrastructure to safeguard your data.</p>
              </div>
              <div className="bg-slate-50 shadow-xl ring-1 ring-gray-900/5  p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-700 mb-4">Streamlined Workflow 🎯</h3>
                <p className="text-gray-700 mb-4">Simplify your processes with the ability to streamline data from Google Forms directly into your preferred applications or databases.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works">
          <div className="flex flex-col p-4 mt-4">
            <h2 className="md:text-3xl text-2xl font-semibold leading-normal">How it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
              <div className="bg-slate-50 shadow-xl ring-1 ring-gray-900/5 p-6 rounded-lg flex flex-col items-center">
                <Image src={"/one.png"} alt={"one"} width={65} height={65} />
                <h3 className="text-xl font-semibold text-slate-700 mb-4">Paste your Google Form link</h3>
                <p className="text-gray-700 mb-4">Simply paste your Google Form link into the form2sheets tool.</p>
              </div>
              <div className="bg-slate-50 shadow-xl ring-1 ring-gray-900/5 p-6 rounded-lg flex flex-col items-center">
                <Image src={"/two.png"} alt={"one"} width={65} height={65} />
                <h3 className="text-xl font-semibold text-slate-700 mb-4"> Tailor the form's appearance</h3>
                <p className="text-gray-700 mb-4">Tailor the form's appearance and behavior to seamlessly match your website's style and function (if desired).</p>
              </div>
              <div className="bg-slate-50 shadow-xl ring-1 ring-gray-900/5 p-6 rounded-lg flex flex-col items-center">
                <Image src={"/three.png"} alt={"one"} width={65} height={65} />
                <h3 className="text-xl font-semibold text-slate-700 mb-4">Generate the HTML code</h3>
                <p className="text-gray-700 mb-4">Generate the HTML code provided by form2sheets and embed it directly into your website or application.</p>
              </div>
            </div>
          </div>
        </section>
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
                className="p-2 border rounded-md sm:mr-2 sm:w-10/12 w-full"
                placeholder="Enter Google Form link"
              // value={formLink}
              // onChange={handleFormLinkChange}
              />
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
              // onClick={handleGenerateCode}
              >
                Generate HTML
              </button>
            </div>
            {/* {generatedHtml && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-slate-700 mb-2">Generated HTML Code:</h3>
              <pre className="bg-gray-900 p-2 rounded">{generatedHtml}</pre>
            </div>
          )} */}
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

            <div className="tailwind-selector flex items-center">
              <label htmlFor="tailwind-checkbox" className="mr-2">Use Tailwind CSS:</label>
              <input type="checkbox" id="tailwind-checkbox" className="h-4 w-4" />
            </div>
          </div>

          <div className="code-container mt-4 bg-gray-100 p-4 rounded-lg relative">
            <button
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded absolute top-2 right-2"
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



      </div>
    </main>
  );
}
