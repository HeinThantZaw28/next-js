import { UnsplashProps } from "@/models/unsplash-image";
import { error } from "console";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Alert } from "@/components/bootstrap";

export const metadata: Metadata = {
  title: "Static Fetching -Next Js 13.4 Image Gallery",
};

const page = async () => {
  const apiKey = process.env.UNSPLASH_ACCESS_KEY;
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${apiKey}`
  );
  if (!response.ok) {
    throw new Error();
  }
  const image: UnsplashProps = await response.json();
  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;
  // console.log(image);
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <Alert>
          This page <strong>fetch and caches data in build time</strong>. Even
          though the Unsplash Api always returns a new image, we see the same
          image after refreshing the page until we compile again.
        </Alert>
        <Image
          src={image.urls.raw}
          alt={image.description}
          height={height}
          width={width}
          className="rounded mw-100 h-100 shadow"
        />
        by{" "}
        <Link href={`/users/${image.user.username}`}>
          {image.user.username}
        </Link>
      </div>
    </>
  );
};

export default page;
