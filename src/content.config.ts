import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    status: z.enum(['live', 'coming-soon', 'in-progress']),
    progressPercent: z.number().optional(),
    problem: z.string(),
    solution: z.string(),
    techStack: z.array(z.string()),
    impact: z.string(),
    demoUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    screenshot: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
