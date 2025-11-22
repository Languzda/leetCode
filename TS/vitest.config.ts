import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/problems/**/*.test.ts"],
    globals: true,
    environment: "node",
    coverage: {
      include: ["problems/**/*.ts"],
      exclude: ["problems/**/*.test.ts", "problems/**/*.d.ts"],
    },
  },
  resolve: {
    extensions: [".ts", ".js", ".mjs", ".json"],
  },
});
