import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Modupe Sapiential Foundation",
    short_name: "MSF",
    description: `At Modupe Sapiential Foundation, we believe in the power of opportunity. Through education, advocacy, and support, we uplift the underprivileged—empowering the blind, championing social and restorative justice, and providing young women with the resources to pursue university education.`,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#042b22",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
