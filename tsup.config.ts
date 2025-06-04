import { defineConfig } from "tsup";
import buildConfig from "./build.config";

export default defineConfig({
    entry: ["src/index.ts"],
    format: [...buildConfig.formats],
    dts: true,
    splitting: false,
    sourcemap: buildConfig.sourcemap,
    clean: true,
    treeshake: buildConfig.treeshake,
    external: [...buildConfig.external],
    target: buildConfig.target,
    banner: {
        js: '"use client";',
    },
    esbuildOptions(options) {
        options.conditions = ["module"];
    },
});