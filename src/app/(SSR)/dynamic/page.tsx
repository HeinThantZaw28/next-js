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

// export const revalidate = 0; // you can set the revalidate=0 to change the fetching strategy to dynamic

const page = async () => {
  const apiKey = process.env.UNSPLASH_ACCESS_KEY;
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${apiKey}`,
    {
      cache : "no-cache"
      //   cache: "no-cache", //you can also use this, for each fetching process
      //or you can use this, it has the same effect with the above line
      // next: {
      //   revalidate: 0,
      // },
    }
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
          This page <strong>fetch data dynamically.</strong> Every time you
          refresh the page, you get a new image from the Unsplash API.
        </Alert>
        <Image
          src={image.urls.raw}
          alt={image.description}
          height={height}
          width={width}
          className="rounded mw-100 h-100 shadow"
        />
        by
        <Link href={`/users/${image.user.username}`}>
          {image.user.username}
        </Link>
      </div>
    </>
  );
};

export default page;
