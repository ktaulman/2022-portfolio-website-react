import React, { useEffect, useState } from "react";
import { sendAPIRequest } from "@/services/API";
import LoadingIndicator from "@/components/icons/LoadingIndicator";

export default function ContactForm({ classes }) {
  //Component State
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  //Handlers
  //Handle Submit
  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !message) {
      return handleError("Empty Input. Please fill out all inputs.");
    }
    setIsLoading(true);
    let response = await sendAPIRequest(
      "POST",
      { name, email, message },
      "https://rbtwxqiucd.execute-api.us-east-1.amazonaws.com/contact-form"
    );
    response = JSON.parse(response);
    if ((response.status = 200)) {
      setIsLoading(false);
      setSuccess(true);
    } else handleError("Something went wrong");
  }
  //Error Handling
  function handleError(string) {
    setError(string);
    setTimeout(() => setError(null), 3000);
  }
  //Set error = null if any of three form inputs are typed in
  useEffect(() => {
    if (error) return setError(null);
  }, [name, email, message]);

  //Render Contact Form
  function renderForm(isLoading, success) {
    if (!isLoading && !success) {
      return (
        <>
          <input
            name="contact_name"
            id="contact_name"
            className="px-2 py-1 placeholder:text-sm text-sm w-full active:focus:ring-0"
            placeholder="Your Name"
            onInput={(e) => setName(e.target.value)}
          />
          <input
            id="contact_company"
            name="contact_company"
            className="px-2 py-1 placeholder:text-sm text-sm w-full"
            placeholder="Your Email Address"
            onInput={(e) => setEmail(e.target.value)}
          />
          <h2>
            <label for="contact_email">Your Message</label>
          </h2>
          <textarea
            id="contact_email"
            name="contact_email"
            onInput={(e) => setMessage(e.target.value)}
            className="w-full ring-2 ring-black rounded-lg h-48 p-2 text-sm"
          ></textarea>
          <button
            type="submit"
            className="border-2 border-solid border-emerald-500 rounded-lg py-1 px-2 hover:text-white hover:bg-emerald-500"
          >
            Submit
          </button>
        </>
      );
    } else if (!isLoading && success) {
      return (
        <h2>
          Thank you for contacting me! Your message will be returned shortly.
        </h2>
      );
    } else {
      return <LoadingIndicator />;
    }
  }

  //Render Component
  return (
    <form
      id="contact-form"
      className="flex flex-col justify-start items-center  border-2 border-solid rounded-xl shadow-lg py-2 px-3 gap-4 w-full max-w-4xl min-h-[450px] max-h-[450px]"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h1 className="text-3xl font-bold">Contact Me</h1>
      {/* Form & Inputs */}
      {renderForm(isLoading, success)}
      {/* Error Placeholder */}
      {error ? (
        <div className="w-full h-6">{error}</div>
      ) : (
        <div className="w-full h-6"></div>
      )}
    </form>
  );
}
