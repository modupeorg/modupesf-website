import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    image: page.data.meta_image,
  };
}

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("home");

  return <SliceZone slices={page.data.slices} components={components} />;
}
