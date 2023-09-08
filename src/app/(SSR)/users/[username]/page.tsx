import { UnsplashUser } from "@/models/unsplash-user";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React, { cache } from "react";
import { Alert } from "@/components/bootstrap";

export interface PageProps {
  params: {
    username: string;
  };
}

const getUser = async (username: string): Promise<UnsplashUser> => {
  const apiKey = process.env.UNSPLASH_ACCESS_KEY;
  const res = await fetch(
    `https://api.unsplash.com/users/${username}?client_id=${apiKey}`
  );
  if (res.status === 404) notFound();
  return await res.json();
};

const getUserCache = cache(getUser); //this case only need when user uses axios or some fetching strategy

export const generateMetadata = async ({
  params: { username },
}: PageProps): Promise<Metadata> => {
  const user = await getUserCache(username);
  return {
    title:
      ([user.first_name, user.last_name].filter(Boolean).join(" ") ||
        user.username) + "- Next Js 13.4 Image Gallery",
  };
};

const page = async ({ params: { username } }: PageProps) => {
  const user: UnsplashUser = await getUserCache(username);

  return (
    <>
      <Alert>
        This profile usese <strong>generateMetadata</strong> to set the
        <strong>page title</strong> dynamically from the API response.
      </Alert>
      <h1>{user.username}</h1>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
      <a href={`https://unsplash.com/${user.username}`}>Unsplash Profile</a>
    </>
  );
};

export default page;
