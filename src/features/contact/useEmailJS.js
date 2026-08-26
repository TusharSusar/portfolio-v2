import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function useEmailJS() {
  const [loading, setLoading] = useState(false);

  const sendEmail = async (formEl) => {
    setLoading(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formEl, PUBLIC_KEY);
      toast.success("Message sent successfully! I'll get back to you soon.");
      formEl.reset();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, loading };
}