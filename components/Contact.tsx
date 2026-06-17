"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const form = new FormData(e.currentTarget);

    const response = await fetch("/api/contact", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        message: form.get("message"),
      }),
    });

    setLoading(false);

    if (response.ok) {
      alert("Message sent!");

      e.currentTarget.reset();

      return;
    }

    alert("Failed to send message");
  }

  return (
    <section id="contact" className="py-20">

      <div className="max-w-6xl mx-auto px-8">

        <div className="text-center">

          <span className="text-primary font-semibold">
            CONTACT
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Let's Build Something Together
          </h2>

          <p className="mt-6 text-slate-500 max-w-2xl mx-auto">
            Feel free to reach out for opportunities, collaborations or simply to say hello.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Left */}

          <div>

            <h3 className="text-3xl font-bold">
              Get in touch
            </h3>

            <p className="mt-8 text-slate-600 leading-8">
              Whether you have a project idea or want to discuss frontend development, my inbox is open.
            </p>

            <div className="flex flex-col gap-5 mt-10">

              <a href="https://linkedin.com/in/igor-guazzelli-a0b85316b/" target="_blank" className="flex items-center gap-4 text-slate-700 hover:text-primary transition">
                <FaLinkedin size={26} />
                <span>linkedin.com/in/igor-guazzelli-a0b85316b/</span>
              </a>

              <a href="https://github.com/Igor.Guazz" target="_blank" className="flex items-center gap-4 text-slate-700 hover:text-primary transition">
                <FaGithub size={26} />
                <span>github.com/Igor.Guazz</span>
              </a>

            </div>

          </div>

          {/* Right */}

          <form onSubmit={submit} className="bg-white rounded-3xl border border-slate-200 p-10 shadow-sm">

            <div className="flex flex-col gap-6">

              <input name="name" required placeholder="Your name" className="p-5 rounded-2xl border border-slate-300 focus:border-primary focus:outline-none" />

              <input name="email" required type="email" placeholder="Your email" className="p-5 rounded-2xl border border-slate-300 focus:border-primary focus:outline-none" />

              <textarea name="message" required rows={6} placeholder="Your message" className="p-5 rounded-2xl border border-slate-300 resize-none focus:border-primary focus:outline-none" />

              <button type="submit" disabled={loading} className="bg-primary text-white py-5 rounded-2xl hover:bg-accent transition">

                {loading ? "Sending..." : "Send Message"}

              </button>

            </div>

          </form>

        </div>

      </div>

    </section>
  );
}