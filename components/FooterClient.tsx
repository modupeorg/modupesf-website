"use client";

import { GroupField, KeyTextField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { LocateIcon, Mail, PhoneCall } from "lucide-react";
import { JSX } from "react";
import { FooterDocumentDataContactItem, Simplify } from "@/prismicio-types";
import { BackToTopBtn } from "./BackToTopBtn";
type FooterProps = {
  title: KeyTextField;
  description: KeyTextField;
  links: GroupField<Simplify<FooterDocumentDataContactItem>>;
  contact: GroupField<Simplify<FooterDocumentDataContactItem>>;
  copyright: KeyTextField;
};

export const FooterClient = (props: FooterProps): JSX.Element => {
  const { title, description, links, contact, copyright } = props;

  const year = new Date().getFullYear();

  const iconsArray = new Map([
    [0, LocateIcon],
    [1, PhoneCall],
    [2, Mail],
  ]);

  return (
    <footer className="bg-green text-white relative">
      <div className="container">
        <div className="py-24 md:py-32 lg:py-40">
          <div className="flex items-center gap-3"></div>
          <div className="grid lg:grid-cols-3 lg:items-center gap-4 xl:gap-16">
            {/* Logo and Description */}
            <div className="flex flex-col gap-y-2">
              <h1 className="capitalize text-lime text-2xl">{title}</h1>

              <h2 className="text-xl text-justify hyphens-auto" lang="en">
                {description}
              </h2>
            </div>
            {/* Navigation Links */}
            <div className="">
              <div className="flex flex-col lg:items-end">
                <span className="text-orange mt-16 lg:mt-0 lg:mb-8 font-bold uppercase">
                  links
                </span>
              </div>
              <nav className="flex flex-col lg:items-end gap-8 mt-8 lg:mt-0">
                {links.map((item, index) => (
                  <div key={index} className="relative">
                    <PrismicNextLink
                      field={item.link_url}
                      className="inline-flex capitalize text-lg h-auto px-0 border-transparent after:content-[''] after:transition-all after:duration-500 after:h-px after:w-0 after:absolute after:top-full after:bg-lime hover:after:w-[8%] md:hover:after:w-full focus:outline-none"
                    >
                      {item.link_text}
                    </PrismicNextLink>
                  </div>
                ))}
              </nav>
            </div>

            {/* Navigation Links */}
            <div className="">
              <div className="flex flex-col lg:items-end">
                <span className="text-orange mt-16 lg:mt-0 lg:mb-8 font-aktiv font-bold uppercase">
                  contact
                </span>
              </div>
              <nav className="flex flex-col lg:items-end gap-8 mt-8 lg:mt-0">
                {contact.map((item, index) => {
                  const IconComponent = iconsArray.get(index);
                  return (
                    IconComponent && (
                      <div key={index}>
                        <PrismicNextLink field={item.link_url} type="button">
                          <div className="flex items-center gap-x-2 text-sm">
                            <IconComponent className="w-4 h-4" />
                            {item.link_text}
                          </div>
                        </PrismicNextLink>
                      </div>
                    )
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
        <BackToTopBtn />

        <div className="max-w-xl lg:max-w-7xl mx-auto py-8 text-center">
          <p className="text-2xl md:text-4xl xl:text-7xl text-[#1c403a] font-bold ">
            Modupe Sapiential Foundation
          </p>
        </div>

        <hr className="border-t-[0.1px] border-white/60" />

        <div className="py-16 text-white text-sm text-center">
          <p>{`${year}. ${copyright}`}</p>
        </div>
      </div>
    </footer>
  );
};
