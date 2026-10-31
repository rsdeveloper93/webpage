import React, { useState } from "react";
import { Send } from "lucide-react";

function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState("");

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    if (formSubmitting) return;

    setFormError("");
    setFormSent(false);
    setFormSubmitting(true);

    try {
      const response = await fetch(
        "https://webpage-6hq4.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactForm),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Form submit nahi hua.");
      }

      setFormSent(true);

      setContactForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setFormError(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setFormSubmitting(false);
    }
  };

  const revealClass =
    "reveal-on-scroll opacity-1 translate-y-0 transition-all duration-700 ease-out";

  return (
    <section id="contact" className="bg-[#fff3eb] min-h-screen">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 lg:px-8">
        <div className={revealClass}>
          <p className="eyebrow">Let's Talk</p>

          <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">
            Have a project in mind?
          </h1>

          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
            Tell us what you're building. We'll help you find the right
            digital solution for your business.
          </p>

          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <p>✉ hello@itsoft.example</p>
            <p>☎ +1 (555) 012-3456</p>
            <p>⌖ New Delhi, India</p>
          </div>
        </div>

        <form
          onSubmit={handleContactSubmit}
          className={`rounded-2xl bg-white p-6 shadow-soft sm:p-8 ${revealClass}`}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="form-label">
              Your Name
              <input
                required
                placeholder="Full name"
                className="form-input transition-shadow duration-300 focus:shadow-md"
                value={contactForm.name}
                onChange={(e) =>
                  setContactForm({
                    ...contactForm,
                    name: e.target.value,
                  })
                }
              />
            </label>

            <label className="form-label">
              Email Address
              <input
                required
                type="email"
                placeholder="you@example.com"
                className="form-input transition-shadow duration-300 focus:shadow-md"
                value={contactForm.email}
                onChange={(e) =>
                  setContactForm({
                    ...contactForm,
                    email: e.target.value,
                  })
                }
              />
            </label>
          </div>

          <label className="form-label mt-4">
            Subject
            <input
              required
              placeholder="How can we help?"
              className="form-input transition-shadow duration-300 focus:shadow-md"
              value={contactForm.subject}
              onChange={(e) =>
                setContactForm({
                  ...contactForm,
                  subject: e.target.value,
                })
              }
            />
          </label>

          <label className="form-label mt-4">
            Your Message
            <textarea
              required
              rows="4"
              placeholder="Tell us a little about your project..."
              className="form-input resize-y transition-shadow duration-300 focus:shadow-md"
              value={contactForm.message}
              onChange={(e) =>
                setContactForm({
                  ...contactForm,
                  message: e.target.value,
                })
              }
            />
          </label>

          <button
            className="orange-btn mt-5 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
            type="submit"
            disabled={formSubmitting}
          >
            {formSubmitting ? "Sending..." : "Send Message"}
            <Send size={15} />
          </button>

          {formSent && (
            <p className="mt-3 text-xs text-green-600">
              Your message has been saved successfully!
            </p>
          )}

          {formError && (
            <p className="mt-3 text-xs text-red-600">
              {formError}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;