import { UnsplashProps } from "@/models/unsplash-image";
import React from "react";
import { Alert } from "@/components/bootstrap";

import styles from "./Topic.module.css";
import Image from "next/image";
import { Metadata } from "next";

interface PageProps {
  params: { topic: string };
}

export function generateMetadata({ params: { topic } }: PageProps): Metadata {
  return {
    title: topic + "--Next Js 13.4 Image Gallery",
  };
}

export const dynamicParams = false; //we can't search any other dynamic parameter except the value from generateStaticParams()

export function generateStaticParams() {
  return ["health", "fitness", "coding"].map((topic) => ({ topic }));
}

const page = async ({ params: { topic } }: PageProps) => {
  const apiKey = process.env.UNSPLASH_ACCESS_KEY;
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${apiKey}`
  );
  const images: UnsplashProps[] = await response.json();
  return (
    <>
      <Alert>
        This page uses <strong>generateStaticParams</strong> to render and cache
        static page at the build time, even though the url has the dynamic
        parameter. Pages that are not include in generateStaticParams will be
        fetched & rendered on first acces and then cached for the subsequent
        requests (this can be disabled).
      </Alert>
      <h1>{topic}</h1>
      {images.map((image, index) => (
        <Image
          key={image.urls.raw}
          alt={image.description}
          width={250}
          height={250}
          src={image.urls.raw}
          className={styles.image}
        />
      ))}
    </>
  );
};

export default page;
