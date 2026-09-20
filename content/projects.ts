export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  tier: "lead" | "secondary";
}

export const projects: Project[] = [
  {
    id: "homelab",
    title: "Homelab Infrastructure",
    description: "Production-grade self-hosted platform with Kubernetes, monitoring stack, and data processing pipelines",
    stack: ["Kubernetes", "Docker", "Terraform", "Kafka", "Prometheus", "Grafana"],
    repoUrl: "https://github.com/rameskum/homelab",
    tier: "lead",
  },
  {
    id: "ecommerce-admin",
    title: "E-commerce Admin Dashboard",
    description: "Full-featured admin panel with product management, analytics, and order processing",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://ecommerce-admin.rameskum.com",
    repoUrl: "https://github.com/rameskum/ecommerce-admin",
    tier: "secondary",
  },
  {
    id: "ecommerce-store",
    title: "E-commerce Storefront",
    description: "Customer-facing store with cart, checkout, and payment integration",
    stack: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    liveUrl: "https://store.rameskum.com",
    repoUrl: "https://github.com/rameskum/ecommerce-store",
    tier: "secondary",
  },
  {
    id: "tallynest",
    title: "TallyNest",
    description: "Expense tracking and budget management application",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    repoUrl: "https://github.com/rameskum/tallynest",
    tier: "secondary",
  },
];
