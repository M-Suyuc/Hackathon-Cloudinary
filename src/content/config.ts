import { cldAssetsLoader } from 'astro-cloudinary/loaders'
import { defineCollection } from 'astro:content'

const images = defineCollection({
	loader: cldAssetsLoader({
		folder: 'hackathon'
	})
})

export const collections = {
	images
}
