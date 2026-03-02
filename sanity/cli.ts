import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "5mlpmkfw",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "base_dataset",
  },
  deployment: {
    appId: "kd1prn9zlsjc5sbcezj5qjz4",
  },
});
