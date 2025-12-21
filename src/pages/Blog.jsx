import NavBar from "../sections/NavBar/NavBar";
import Footer from "../sections/Footer/Footer";
import Reveal from "../components/Reveal";
import styles from "./Blog.module.css";

const posts = [
  {
    title: "Building Multi-Tenant Architectures that Scale",
    summary:
      "Building scalable multi-tenant SaaS platforms requires careful planning of isolation models, shared resources, and deployment strategies. This post explores tenant-aware data structures, resource allocation, and operational practices that ensure reliability and performance at scale, helping teams deliver robust platforms without compromise.",
    tag: "Architecture",
  },
  {
    title: "AI Evaluation: How to Measure Model Quality in Production",
    summary:
      "Evaluating AI models in production goes beyond accuracy metrics. This article covers golden datasets, regression checks, drift detection, and human-in-the-loop validation to prevent silent failures, maintain consistent performance, and ensure that AI systems deliver reliable results under real-world conditions.",
    tag: "AI",
  },
  {
    title: "Why Your Product Needs a Strong Design System",
    summary:
      "A strong design system is essential for building consistent, scalable, and accessible products. This post dives into design tokens, component libraries, governance models, and accessibility standards that help teams streamline workflows, maintain quality, and ship faster while keeping a unified user experience.",
    tag: "Product",
  },
  {
    title: "Offline-First Engineering for Mobile Apps",
    summary:
      "Offline-first mobile apps enhance reliability and user trust, even in low-connectivity scenarios. This guide explains strategies for sync queues, conflict resolution, caching mechanisms, and distributed state management that ensure users remain productive anywhere, while minimizing data loss and improving app resilience.",
    tag: "Mobile",
  },
  {
    title: "Security Hardening for Modern SaaS Startups",
    summary:
      "Security must be embedded into every layer of modern SaaS applications. This post explores best practices in secrets management, role-based access, audit trails, encryption, and zero-trust models, helping startups build platforms that are resilient, compliant, and protected against evolving security threats.",
    tag: "Security",
  },
  {
    title: "From Prototype to Production: Shipping AI Fast",
    summary:
      "Turning an AI prototype into a production-ready system requires structured iteration and rigorous testing. This article covers model versioning, latency budgets, monitoring, A/B testing, and deployment checklists to ensure teams ship high-quality AI products quickly without sacrificing reliability or scalability.",
    tag: "AI",
  },
  {
    title: "Making Dashboards That Drive Real Decisions",
    summary:
      "Effective dashboards convert raw data into actionable insights. This post discusses information hierarchies, clarity-first layouts, smart defaults, and visual frameworks that enable teams to interpret data quickly, make informed decisions, and focus on what truly matters for business outcomes.",
    tag: "Analytics",
  },
  {
    title: "Why Cross-Platform Desktop Apps Still Win",
    summary:
      "Desktop applications remain essential for performance-intensive and workflow-heavy use cases. This guide compares Electron, Tauri, and native bridges, showing how to build cross-platform apps for macOS and Windows with optimal performance, maintainability, and modern UI/UX practices.",
    tag: "Desktop",
  },
  {
    title: "Scaling Frontend Teams with Component Ownership",
    summary:
      "As frontend systems grow, bottlenecks can slow teams down. This article explores component ownership, review workflows, documentation standards, and structured code practices that help teams scale efficiently, reduce conflicts, and maintain high-quality front-end systems as the product evolves.",
    tag: "Frontend",
  },
  {
    title: "LLM-Powered Automation for Real Businesses",
    summary:
      "Leveraging large language models for real-world automation requires robust design and safeguards. This post covers agent workflows, guardrails, validation loops, error handling, and safe integration patterns to build LLM-powered solutions that enhance operational efficiency without compromising reliability or safety.",
    tag: "AI Automation",
  },
];

const BlogPage = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <div className="app-shell">
        <header className={styles.hero}>
          <div className="pill">Blog</div>
          <h1 className="headline">Notes from the StakOceans.AI team.</h1>
          <p className="subhead">
            Explore the latest insights from StackOceans.ai on AI, SaaS, web,
            mobile, and product engineering. Our blog shares practical
            strategies, technical deep dives, and real-world lessons to help
            teams build smarter, scalable, and high-performing digital products.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className="headline">Latest posts</h2>
          <div className={styles.grid}>
            {posts.map((post, idx) => (
              <Reveal key={post.title} delay={idx * 0.05}>
                <div className={styles.card}>
                  <p className={styles.chip}>{post.tag}</p>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
