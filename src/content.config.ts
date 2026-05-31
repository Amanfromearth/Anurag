import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Project write-ups rendered at /projects/<slug>.
 * Frontmatter keys mirror the original Next.js content so the markdown
 * files are reused verbatim.
 */
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    Metatitle: z.string(),
    Metadescription: z.string(),
    description: z.string().optional(),
    Pagetitle: z.string().optional(),
    Pagedescription: z.string().optional(),
  }),
});

export const collections = { projects };
