import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Form } from "./components/form";

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
        <Form/>



      </div>
    </main>
  );
}
