import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./sanity/config";

export default defineConfig({
  name: "default",
  title: "Flush Force One Website",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "5mlpmkfw",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "base_dataset",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
