import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("scholarship");

  return (
    <section className="about-gradient">
      <SliceZone slices={page.data.slices} components={components} />
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("scholarship");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    keywords: page.data.keywords,
  };
}
