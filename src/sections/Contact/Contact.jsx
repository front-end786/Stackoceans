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
  project: z.string().min(10, "Tell us a bit more about the project"),
  budget: z.string().optional(),
});

const Contact = () => {
  const defaultValues = useMemo(
    () => ({
      name: "",
      email: "",
      project: "",
      budget: "",
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
    // 1. Convert validated data object into a FormData object
    const formdata = new FormData();
    for (const key in data) {
      formdata.append(key, data[key] || "");
    }

    try {
      // 2. Await the fetch request
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxTD1PATNk1XMZxRMzvW3Lyfq69pZ9hOza9b53ohwAqDgfVazjjADl1Ae8iFlcgLb4S_g/exec",
        {
          method: "POST",
          body: formdata,
        }
      );

      // Check for network/HTTP errors (e.g., 404, 500)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // 3. Await the JSON parsing
      const result = await response.json();

      // Check for application-level errors returned by the Google Script
      if (!result.success) {
        throw new Error(
          result.message || "Submission failed via Google Script"
        );
      }

      toast.success("Thanks! We’ll respond within 24 hours.");
      reset(defaultValues);
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Something went wrong. Please try again.");
    }
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
            <span>Project</span>
            {/* FIX: Added name attribute for FormData compatibility */}
            <textarea
              name="project"
              placeholder="What are you building?"
              rows={4}
              {...register("project")}
            />
            {errors.project && <small>{errors.project.message}</small>}
          </label>

          <label className={styles.field}>
            <span>Budget / timeline (optional)</span>
            {/* FIX: Added name attribute for FormData compatibility */}
            <input
              name="budget"
              placeholder="e.g., 6 weeks, $60k"
              {...register("budget")}
            />
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


