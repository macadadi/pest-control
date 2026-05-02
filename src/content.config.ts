import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const imageFields = {
  /** Path under `public/` e.g. `/images/covers/photo.jpg` */
  coverImage: z.string().optional(),
  coverAlt: z.string().optional(),
  /** Optional subtitle shown under H1 */
  dek: z.string().optional(),
  /** Override default article H1 */
  h1: z.string().optional()
};

const pests = defineCollection({
  loader: glob({ base: './src/content/pests', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
    ...imageFields
  })
});

const services = defineCollection({
  loader: glob({ base: './src/content/services', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
    ...imageFields
  })
});

const cities = defineCollection({
  loader: glob({ base: './src/content/cities', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
    spotlightPests: z.array(z.string()).optional(),
    ...imageFields
  })
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    ...imageFields
  })
});

export const collections = { pests, services, cities, blog };
