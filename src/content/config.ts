import { cldAssetsLoader } from 'astro-cloudinary/loaders'
import { defineCollection } from 'astro:content'

const images = defineCollection({
	loader: cldAssetsLoader({
		limit: 4,
		folder: 'hackathon'
	})
})

export const collections = {
	images
}
