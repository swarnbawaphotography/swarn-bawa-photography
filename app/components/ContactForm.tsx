"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mwvgglvz");

  if (state.succeeded) {
    return (
      <div className="rounded-2xl border border-yellow-400/30 bg-white/5 px-6 py-12 text-center">
        <h3 className="mb-3 text-2xl font-light text-yellow-400">
          Message Sent
        </h3>

        <p className="text-gray-300">
          Thank you for contacting me. I’ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-2xl space-y-6 text-left"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm text-yellow-400"
        >
          Name
        </label>

        <input
          id="name"
          type="text"
          name="name"
          required
          autoComplete="name"
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-yellow-400"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm text-yellow-400"
        >
          Email
        </label>

        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-yellow-400"
          placeholder="Your email address"
        />

        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-2 block text-sm text-red-400"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-sm text-yellow-400"
        >
          Subject
        </label>

        <input
          id="subject"
          type="text"
          name="subject"
          required
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-yellow-400"
          placeholder="Photography inquiry"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm text-yellow-400"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full resize-none rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-yellow-400"
          placeholder="Tell me about your photography needs..."
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-2 block text-sm text-red-400"
        />
      </div>

      <ValidationError
        errors={state.errors}
        className="block text-center text-sm text-red-400"
      />

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full rounded-full border border-yellow-400 px-8 py-3 font-medium text-yellow-400 transition hover:bg-yellow-400 hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}