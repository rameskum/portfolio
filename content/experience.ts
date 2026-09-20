export interface CaseStudy {
  id: string;
  org: string;
  role: string;
  dateRange: string;
  title: string;
  metrics: string[];
  summary: string;
  bullets?: string[];
  stack: string[];
  featured?: boolean;
  link?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "td-endava",
    org: "TD Securities / Endava",
    role: "Senior Backend Engineer",
    dateRange: "2023 - Present",
    title: "Cut upload cycles from 20 min to under 2 min",
    metrics: ["20 min → <2 min", "Weeks → days"],
    summary: "Modernized data platform on Azure Kubernetes Service, migrating Iceberg to Delta format on Databricks. Built API Source Loader that reduced upload processing time by 90% and accelerated development cycles from weeks to days.",
    bullets: [
      "Architected AKS-based data pipeline reducing upload time from 20 minutes to under 2 minutes",
      "Migrated legacy Iceberg tables to Delta format on Databricks, improving query performance",
      "Designed API Source Loader enabling rapid integration of new data sources"
    ],
    stack: ["Java", "Spring Boot", "Azure Kubernetes Service", "Databricks", "Delta Lake", "Apache Iceberg", "Kafka"],
    featured: true,
  },
  {
    id: "amdocs",
    org: "Amdocs Toronto",
    role: "Senior Data Engineer",
    dateRange: "2020 - 2023",
    title: "Reduced recovery overhead by 25% and billing impact by 20%",
    metrics: ["−25% overhead", "−20% billing impact"],
    summary: "Led Automated Recovery Toolkit (ART) implementation reducing operational overhead by 25%. Built real-time Pub/Sub pipeline processing millions of events daily, cutting billing error impact by 20%.",
    bullets: [
      "Developed Automated Recovery Toolkit (ART) reducing recovery overhead by 25%",
      "Built scalable Pub/Sub event processing pipeline handling 10M+ events/day",
      "Reduced billing system error impact by 20% through improved data quality"
    ],
    stack: ["Java", "Spring", "Google Pub/Sub", "BigQuery", "Dataflow", "Kubernetes", "PostgreSQL"],
  },
  {
    id: "homelab",
    org: "Homelab",
    role: "Infrastructure",
    dateRange: "2022 - Present",
    title: "Self-hosted platform and data experimentation",
    metrics: [],
    summary: "Production-grade homelab infrastructure for experimenting with data platforms, container orchestration, and cloud-native patterns. Runs Kubernetes, monitoring stack, and data processing pipelines that reinforce production platform expertise.",
    bullets: [
      "Self-hosted Kubernetes cluster with monitoring (Prometheus/Grafana) and logging stack",
      "Experimented with Apache Kafka, Spark, and stream processing architectures",
      "Infrastructure-as-code approach using Terraform and GitOps patterns"
    ],
    stack: ["Kubernetes", "Docker", "Terraform", "Kafka", "Prometheus", "Grafana", "PostgreSQL"],
  },
];
