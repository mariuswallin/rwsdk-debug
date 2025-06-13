import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { redwood } from "rwsdk/vite";
import path from "node:path";

export default defineConfig({
	plugins: [tailwindcss(), redwood()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
      // 'tslib': 'tslib/tslib.es6.js'
    },
	},
});
