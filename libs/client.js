import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'c7vy9jnix6',
  apiKey: process.env.API_KEY,
})