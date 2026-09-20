export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    slug: "building-data-pipelines-kafka",
    title: "Building Resilient Data Pipelines with Kafka",
    excerpt: "Lessons learned from processing millions of events daily in production Kafka clusters",
    date: "2024-02-15",
    tags: ["Data Engineering", "Kafka", "Distributed Systems"],
  },
  {
    slug: "kubernetes-production-patterns",
    title: "Production Kubernetes Patterns for Backend Services",
    excerpt: "Battle-tested patterns for running stateful backend services on Kubernetes",
    date: "2024-01-20",
    tags: ["Kubernetes", "DevOps", "Backend"],
  },
  {
    slug: "delta-lake-migration",
    title: "Migrating from Iceberg to Delta Lake",
    excerpt: "Our journey migrating petabyte-scale data warehouses from Iceberg to Delta format",
    date: "2023-12-10",
    tags: ["Data Engineering", "Delta Lake", "Databricks"],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(count: number = 3): Post[] {
  return posts.slice(0, count);
}
