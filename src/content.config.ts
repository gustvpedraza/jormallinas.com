import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const proyectos = defineCollection({
	// Load Markdown and MDX files in the `src/content/proyectos/` directory.
	loader: glob({ base: './src/content/proyectos', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		type: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		titleHeader: z.string(),
		imgHeader: z.string(),
		empresa: z.string(),
		rol: z.string(),
		tiempo: z.string(),
		categoria: z.string(),
	}),
});

export const collections = { proyectos };
