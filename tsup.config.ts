import { defineConfig } from "tsup";
import buildConfig from "./build.config";

export default defineConfig({
    entry: {
        index: "src/index.ts",
        "globals": "src/styles/globals.css",
        "themes": "src/styles/themes.css"
    },
    format: [...buildConfig.formats],
    dts: false, // We generate DTS separately with tsc
    splitting: false,
    sourcemap: buildConfig.sourcemap,
    clean: false, // Don't clean to preserve TypeScript declaration files
    treeshake: buildConfig.treeshake,
    external: [...buildConfig.external],
    target: buildConfig.target,
    banner: {
        js: '"use client";',
    },
    esbuildOptions(options) {
        options.conditions = ["module"];
    },
    outDir: "dist",
});