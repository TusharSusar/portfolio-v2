import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { Send, Loader2 } from "lucide-react";
import { useEmailJS } from "./useEmailJS";

export default function ContactForm() {
  const formRef = useRef(null);
  const { sendEmail, loading } = useEmailJS();

  useGSAP(
    () => {
      gsap.utils.toArray(".form-field").forEach((field) => {
        const input = field.querySelector("input, textarea");
        input?.addEventListener("focus", () => {
          gsap.to(field, { borderColor: "#E6C16A", duration: 0.3 });
        });
        input?.addEventListener("blur", () => {
          gsap.to(field, {
            borderColor: "rgba(170,108,57,0.3)",
            duration: 0.3,
          });
        });
      });
    },
    { scope: formRef },
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formRef.current);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="form-field rounded-md border border-primary-dim/30 px-4 py-3 transition-colors">
        <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          Name
        </label>
        <input
          name="user_name"
          type="text"
          required
          className="w-full bg-transparent outline-none border-b border-b-primary-dim/20 text-foreground mt-1"
        />
      </div>

      <div className="form-field rounded-md border border-primary-dim/30 px-4 py-3 transition-colors">
        <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          Email
        </label>
        <input
          name="user_email"
          type="email"
          required
          className="w-full bg-transparent outline-none border-b border-b-primary-dim/20 text-foreground mt-1"
        />
      </div>

      <div className="form-field rounded-md border border-primary-dim/30 px-4 py-3 transition-colors">
        <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full bg-transparent outline-none border-b border-b-primary-dim/20 text-foreground mt-1 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-background font-medium px-6 py-3 hover:bg-primary-hover transition-colors disabled:opacity-60"
      >
        {loading && <Loader2 size={18} className="animate-spin" />}
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
