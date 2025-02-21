import React from "react";
import { createClient } from "@/prismicio";

import { FooterClient } from "./FooterClient";

export const Footer = async () => {
  const client = createClient();
  const settings = await client.getSingle("footer");
  const { title, description, links, contact, copyright } = settings.data;

  return (
    <FooterClient
      title={title}
      description={description}
      links={links}
      contact={contact}
      copyright={copyright}
    />
  );
};
