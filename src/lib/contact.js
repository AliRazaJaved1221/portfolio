// ────────────────────────────────────────────────────────────
// Contact form delivery.
//
// This project is a static React app with no backend, so today the
// only working delivery method is `mailto:` — submitting the form
// opens the visitor's own email client with a message pre-filled and
// addressed to you. It still requires the visitor to hit "send" on
// their end, and there's no automatic acknowledgement email.
//
// To make it fully automatic instead — the message lands directly in
// your inbox AND the visitor instantly gets an acknowledgement email,
// no backend required — wire up EmailJS (recommended, free tier is
// plenty for a portfolio):
//
//   1. Create a free account at https://www.emailjs.com
//   2. Add an "Email Service" and connect it to alirazajaved2001@gmail.com
//   3. Create two templates in the EmailJS dashboard:
//        a) "Notify me"       — sent to you. Use {{from_name}}, {{from_email}},
//           {{message}} as variables in the template body, and set the
//           template's "To email" to alirazajaved2001@gmail.com.
//        b) "Acknowledge visitor" — sent to the visitor. Use {{to_name}} in
//           the body, and set the template's "To email" to {{to_email}}.
//   4. Run: npm install @emailjs/browser
//   5. Copy your Service ID, both Template IDs and your Public Key
//      (Account → General) into the constants below.
//   6. Flip USE_EMAILJS to true and uncomment the emailjs.send(...) calls.
// ────────────────────────────────────────────────────────────

const USE_EMAILJS = false;

// const EMAILJS_SERVICE_ID = "REPLACE_ME";
// const EMAILJS_NOTIFY_TEMPLATE_ID = "REPLACE_ME";
// const EMAILJS_ACK_TEMPLATE_ID = "REPLACE_ME";
// const EMAILJS_PUBLIC_KEY = "REPLACE_ME";

const OWNER_EMAIL = "alirazajaved2001@gmail.com";

function sendViaMailto({ name, email, message }) {
  const subject = encodeURIComponent(`Portfolio contact from ${name || "a visitor"}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
  return Promise.resolve({ method: "mailto" });
}

/**
 * Sends the contact form.
 * Resolves with `{ method: "emailjs" | "mailto" }` on success,
 * rejects on failure so the UI can show an error state.
 */
export async function sendContactMessage(form) {
  if (USE_EMAILJS) {
    // const emailjs = (await import("@emailjs/browser")).default;
    //
    // // 1) Notify the site owner
    // await emailjs.send(
    //   EMAILJS_SERVICE_ID,
    //   EMAILJS_NOTIFY_TEMPLATE_ID,
    //   { from_name: form.name, from_email: form.email, message: form.message },
    //   EMAILJS_PUBLIC_KEY
    // );
    //
    // // 2) Acknowledge the visitor
    // await emailjs.send(
    //   EMAILJS_SERVICE_ID,
    //   EMAILJS_ACK_TEMPLATE_ID,
    //   { to_name: form.name, to_email: form.email },
    //   EMAILJS_PUBLIC_KEY
    // );
    //
    // return { method: "emailjs" };
  }

  return sendViaMailto(form);
}
