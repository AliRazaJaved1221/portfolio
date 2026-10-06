import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiSend, FiCheckCircle, FiAlertCircle, FiLoader, FiPhoneCall } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import AnimatedIcon from "./AnimatedIcon";
import { popUp } from "../lib/motion";
import { profile } from "../data/portfolioData";
import { sendContactMessage } from "../lib/contact";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Please tell me your name.";
    if (!form.email.trim()) next.email = "An email address is needed so I can reply.";
    else if (!EMAIL_RE.test(form.email.trim())) next.email = "That doesn't look like a valid email.";
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = "Add a little more detail (10+ characters).";
    return next;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("sending");
    try {
      await sendContactMessage(form);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      window.setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      setStatus("error");
    }
  }

  const isSending = status === "sending";

  return (
    <section id="contact" className="container py-24 sm:py-28">
      <SectionHeading eyebrow="Let's talk // 07" title="Get in touch" align="center" />

      {/* Animated mail icon centered above the form */}
      <div className="flex justify-center mt-6 -mb-2">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary shadow-glow-violet sm:h-24 sm:w-24">
          <AnimatedIcon icon={FiMail} variant="send" size={38} color="#ffffff" />
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:gap-8 md:mt-12 md:grid-cols-5">
        <motion.form
          variants={popUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          onSubmit={handleSubmit}
          noValidate
          className="glass card-hover space-y-4 rounded-3xl p-6 sm:p-7 md:col-span-3"
        >
          <div>
            <label htmlFor="contact-name" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-smoke">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              value={form.name}
              onChange={handleChange}
              disabled={isSending}
              aria-invalid={Boolean(errors.name)}
              className={`w-full rounded-xl border bg-white/50 px-4 py-2.5 text-ink-900 placeholder:text-smoke/50 transition-colors focus:outline-none disabled:opacity-50 ${
                errors.name ? "border-red-400/70 focus:border-red-400" : "border-ink-900/10 focus:border-violet-400"
              }`}
              placeholder="Ada Lovelace"
            />
            {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-smoke">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              disabled={isSending}
              aria-invalid={Boolean(errors.email)}
              className={`w-full rounded-xl border bg-white/50 px-4 py-2.5 text-ink-900 placeholder:text-smoke/50 transition-colors focus:outline-none disabled:opacity-50 ${
                errors.email ? "border-red-400/70 focus:border-red-400" : "border-ink-900/10 focus:border-violet-400"
              }`}
              placeholder="ada@example.com"
            />
            {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="contact-message" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-smoke">
              Message
            </label>
            <textarea
              id="contact-message"
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              disabled={isSending}
              aria-invalid={Boolean(errors.message)}
              className={`w-full resize-none rounded-xl border bg-white/50 px-4 py-2.5 text-ink-900 placeholder:text-smoke/50 transition-colors focus:outline-none disabled:opacity-50 ${
                errors.message ? "border-red-400/70 focus:border-red-400" : "border-ink-900/10 focus:border-violet-400"
              }`}
              placeholder="Let's build something."
            />
            {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
          </div>

          <button
            type="submit"
            data-cursor-hover
            disabled={isSending}
            className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
          >
            <span className="flex items-center justify-center gap-2">
              {isSending ? (
                <>
                  Sending <FiLoader className="animate-spin" />
                </>
              ) : (
                <>
                  Send message <FiSend />
                </>
              )}
            </span>
          </button>

          <AnimatePresence mode="wait">
            {status === "sent" && (
              <motion.p
                key="sent"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="flex items-center gap-2 rounded-xl border border-mint-400/30 bg-mint-400/10 px-4 py-3 text-sm text-mint-600"
              >
                <FiCheckCircle className="shrink-0" />
                Your email app should now be open with the message ready — hit send there and I'll get back to you soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                key="error"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="flex items-center gap-2 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-500"
              >
                <FiAlertCircle className="shrink-0" />
                Something went wrong. Please email me directly at {profile.email}.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>

        <motion.div
          variants={popUp(1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="glass card-hover flex flex-col justify-between rounded-3xl p-6 sm:p-7 md:col-span-2"
        >
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600">
                <AnimatedIcon icon={FiPhoneCall} variant="wiggle" size={18} color="currentColor" />
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-600">
                Direct line
              </p>
            </div>
            <a
              href={`mailto:${profile.email}`}
              data-cursor-hover
              className="mt-2 block break-words font-display text-lg text-ink-900 hover:text-violet-500"
            >
              {profile.email}
            </a>
            <p className="mt-4 text-sm text-smoke">Based in {profile.location}. Usually replies within a day or two.</p>
            {profile.phone && (
              <a
                href={`tel:${profile.phone}`}
                data-cursor-hover
                className="mt-2 flex items-center gap-2 text-sm text-smoke hover:text-ink-900"
              >
                <FiPhone /> {profile.phone}
              </a>
            )}
          </div>

          <div className="mt-8 flex gap-4 text-xl text-smoke">
            <a href={profile.socials.github} data-cursor-hover aria-label="GitHub" className="transition-all hover:-translate-y-0.5 hover:text-violet-500">
              <FiGithub />
            </a>
            <a href={profile.socials.linkedin} data-cursor-hover aria-label="LinkedIn" className="transition-all hover:-translate-y-0.5 hover:text-mint-500">
              <FiLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} data-cursor-hover aria-label="Email" className="transition-all hover:-translate-y-0.5 hover:text-ink-900">
              <FiMail />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
