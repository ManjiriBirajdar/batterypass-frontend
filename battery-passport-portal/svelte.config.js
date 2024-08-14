import adapter from '@sveltejs/adapter-node'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte'],
  preprocess: [vitePreprocess()],

  vitePlugin: {
    inspector: true
  },
  kit: {
    adapter: adapter({
      precompress: true
    })
  }
}
export default config
