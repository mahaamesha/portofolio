import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(["design3d", "software", "electrical"]),
    featured: z.boolean().default(false),
    publishDate: z.coerce.date(),
    client: z.string(),
    location: z.string(),
    stack: z.array(z.string()),
    metrics: z.array(
      z.object({
        label: z.string(),
        value: z.string()
      })
    ),
    cover: z.string(),
    seoDescription: z.string().optional()
  })
});

export const collections = { projects };
