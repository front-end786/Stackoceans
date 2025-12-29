import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

// --------------------
// Zod Validation Schema
// --------------------
const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(1, "Phone is required"),
  industry: z.string().min(1, "Industry is required"),
  message: z.string().min(10, "Tell us a bit more about the project"),
  // budget: z.string().optional(),
});

const Contact = () => {
  const defaultValues = useMemo(
    () => ({
      name: "",
      email: "",
      phone: "",
      industry: "",
      message: "",
      // budget: "",
    }),
    []
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  // --------------------
  // Corrected Submit Handler (Restored async/await)
  // --------------------
  const onSubmit = async (data) => {
    const promise = fetch("https://stack-oceans-backend.vercel.app/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      if (!result.success) {
        throw new Error(
          result.message || "Submission failed via Google Script"
        );
      }
      return result;
    });

    await toast.promise(promise, {
      loading: "Sending message...",
      success: () => {
        reset(defaultValues);
        return "Thanks! We’ll respond within 24 hours.";
      },
      error: (err) => {
        console.error("Contact form error:", err);
        return "Something went wrong. Please try again.";
      },
    });
  };

  return (
    <section className="section" id="contact">
      <div className={styles.wrap}>
        <div>
          <div className="pill">Let’s collaborate</div>
          <h2 className="headline">Tell us about your next release.</h2>
          <p className="subhead">
            We reply within 48 hours with a lightweight plan and a founder-led
            kickoff.
          </p>
        </div>

        <motion.form
          className={`form ${styles.form}`}
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <label className={styles.field}>
            <span>Name</span>
            {/* FIX: Added name attribute for FormData compatibility */}
            <input name="name" placeholder="Your name" {...register("name")} />
            {errors.name && <small>{errors.name.message}</small>}
          </label>

          <label className={styles.field}>
            <span>Email</span>
            {/* FIX: Added name attribute for FormData compatibility */}
            <input
              name="email"
              placeholder="you@company.com"
              {...register("email")}
            />
            {errors.email && <small>{errors.email.message}</small>}
          </label>

          <label className={styles.field}>
            <span>Phone</span>
            {/* FIX: Added name attribute for FormData compatibility */}
            <input
              name="phone"
              placeholder="e.g., +1234567890"
              {...register("phone")}
            />
          </label>

          <label className={styles.field}>
            <span>Industry</span>
            {/* FIX: Added name attribute for FormData compatibility */}
            <input
              name="industry"
              placeholder="e.g., SaaS, Web3, AI"
              {...register("industry")}
            />
          </label>

          <label className={styles.field}>
            <span>Project</span>
            {/* FIX: Added name attribute for FormData compatibility */}
            <textarea
              name="message"
              placeholder="What are you building?"
              rows={4}
              {...register("message")}
            />
            {errors.message && <small>{errors.message.message}</small>}
          </label>

          <button
            className={styles.submit}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

