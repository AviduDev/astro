import { defineConfig } from 'astro/config';
import image from '@astrojs/image';

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [image(), sanity({
    projectId: '28xmc0kr',
    dataset: 'production',
    apiVersion: '2023-02-08',
    useCdn: false,
  })]
});