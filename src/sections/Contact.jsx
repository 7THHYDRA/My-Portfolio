<<<<<<< HEAD
/** @format */

import { useRef, useState, useEffect, lazy, Suspense } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
// Lazy-load the 3D scene to avoid blocking the main thread on desktop
const ContactExperience = lazy(
  () => import("../components/models/contact/ContactExperience")
);
=======
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";
>>>>>>> 606137dec2f2a9c623743dfe122a9d935a92ac21

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm({ ...form, [name]: value });
  // };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true); // Show loading state

  //   try {
  //     await emailjs.sendForm(
  //       import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  //       import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  //       formRef.current,
  //       import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  //     );

  //     // Reset form and stop loading
  //     setForm({ name: "", email: "", message: "" });
  //   } catch (error) {
  //     console.error("EmailJS Error:", error); // Optional: show toast
  //   } finally {
  //     setLoading(false); // Always stop loading, even on error
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    // If env is not configured, fallback to mail client so users can still reach you
    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS not configured:", {
        serviceId,
        templateId,
        publicKey,
      });
      setLoading(false);
      const subject = encodeURIComponent(`Contact from ${name || "Website"}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      );
      // Open user's default mail client as a fallback
      window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      alert("Message sent successfully! 🎉");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS Error:", error);

      // Attempt a structured send as a fallback (some templates prefer params over form)
      try {
        await emailjs.send(
          serviceId,
          templateId,
          { from_name: name, from_email: email, message },
          publicKey
        );

        alert("Message sent successfully (fallback)! 🎉");
        setName("");
        setEmail("");
        setMessage("");
      } catch (err) {
        console.error("EmailJS fallback failed:", err);
        // Show a descriptive error and fallback to mail client
        alert(
          `Something went wrong while sending your message: ${err?.message || err}. Opening your mail client as a fallback.`
        );
        const subject = encodeURIComponent(`Contact from ${name || "Website"}`);
        const body = encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\n\n${message}`
        );
        window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
      }
    } finally {
      setLoading(false);
    }
  };

  // Performance: lazy-load 3D scene only when it's likely needed (desktop + in-view)
  const [load3D, setLoad3D] = useState(false);
  const threeRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 1280) return; // only load on desktop

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            if ("requestIdleCallback" in window) {
              requestIdleCallback(() => setLoad3D(true));
            } else {
              setTimeout(() => setLoad3D(true), 300);
            }
            io.disconnect();
          }
        },
        { rootMargin: "200px" }
      );

      if (threeRef.current) io.observe(threeRef.current);
      return () => io.disconnect();
    } else {
      const t = setTimeout(() => setLoad3D(true), 1000);
      return () => clearTimeout(t);
    }
  }, []);

  // const formData = new FormData(formRef.current);
  // console.log(Object.fromEntries(formData.entries()));
=======
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };
>>>>>>> 606137dec2f2a9c623743dfe122a9d935a92ac21

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
<<<<<<< HEAD
                    value={name}
                    onChange={handleNameChange}
                    placeholder="What’s your name?"
=======
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
>>>>>>> 606137dec2f2a9c623743dfe122a9d935a92ac21
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
<<<<<<< HEAD
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="What’s your email address? 📧"
=======
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
>>>>>>> 606137dec2f2a9c623743dfe122a9d935a92ac21
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
<<<<<<< HEAD
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="How can I help you? 😃"
=======
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
>>>>>>> 606137dec2f2a9c623743dfe122a9d935a92ac21
                    rows="5"
                    required
                  />
                </div>

<<<<<<< HEAD
                <button type="submit" disabled={loading} aria-busy={loading}>
=======
                <button type="submit">
>>>>>>> 606137dec2f2a9c623743dfe122a9d935a92ac21
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
<<<<<<< HEAD
          <div className="xl:col-span-7 min-h-96" ref={threeRef}>
            <div
              className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden"
              style={{
                contain: "strict",
                willChange: "transform",
              }}
            >
              {load3D ? (
                <Suspense
                  fallback={
                    <div className="flex-center min-h-96">Loading 3D…</div>
                  }
                >
                  <ContactExperience />
                </Suspense>
              ) : (
                <div className="flex-center min-h-96">
                  3D preview will load when you scroll here.
                </div>
              )}
=======
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
>>>>>>> 606137dec2f2a9c623743dfe122a9d935a92ac21
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
