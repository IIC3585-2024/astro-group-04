import { defineConfig } from 'astro/config';
import icon from "astro-icon";

export default defineConfig({
  output: 'server',
  integrations: [icon()],
});

