import { social_media_links } from "@/constants";
import { envelopeSvg } from "@/public/assets/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center min-h-screen text-3xl snap-start px-32 main-bg "
      data-aos="fade-up"
    >
      <h1 className="text-center">Contact</h1>
      <div className="flex flex-row justify-center items-center ">
        <div className="w-1/2">Image</div>
        <div className="flex flex-col w-1/2">
          <h2>Do you want to work with me?</h2>
          <p>Let's get in touch!</p>
          <div className="flex">
            My email is{" "}
            <a href="mailto: egorlagunovich@gmail.com" className="text-red-600">
              <Image src={envelopeSvg} alt="envelope icon" width={20} />{" "}
              egorlagunovich@gmail.com
            </a>
          </div>
          <div>
            {social_media_links.map((link) => (
              <Link href={link.src} key={link.name}>
                <Image src={link.iconSrc} alt={link.name} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
