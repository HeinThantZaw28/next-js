import { UnsplashProps } from "@/models/unsplash-image";
import { error } from "console";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Alert } from "@/components/bootstrap";

export const metadata: Metadata = {
  title: "Dynamic Fetching -Next Js 13.4 Image Gallery",
};

export const revalidate = 15; // the numbers of revalidate makes when the page have to render, in this case the page will render after 15 sec when you clicked

const page = async () => {
  const apiKey = process.env.UNSPLASH_ACCESS_KEY;
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${apiKey}`,
    // {
    //   next: {
    //     revalidate: 20,
    //   },
    // }
  );
  if (!response.ok) {
    throw new Error();
  }
  const image: UnsplashProps = await response.json();
  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <Alert>
          This page uses<strong>incremental static regeneration.</strong> A new
          image is fetch in 10 sec(when you refresh the page).
        </Alert>
        <Image
          src={image.urls.raw}
          alt={image.description}
          height={height}
          width={width}
          className="rounded mw-100 h-100 shadow"
        />
        by <Link href={image.user.username}>{image.user.username}</Link>
      </div>
    </>
  );
};

export default page;
