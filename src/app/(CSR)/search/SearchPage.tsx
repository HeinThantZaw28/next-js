"use client";
import { UnsplashProps, UnsplashSearchResponse } from "@/models/unsplash-image";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import {
  Alert,
  Button,
  Form,
  FormGroup,
  FormLabel,
  Spinner,
} from "react-bootstrap";
import styles from "./Search.module.css";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState<UnsplashProps[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get("query")?.toString().trim();
    if (query) {
      try {
        setSearchResults(null);
        setSearchError(false);
        setIsLoading(true);

        const response = await fetch(`/api/search?query=${query}`);
        const image: UnsplashProps[] = await response.json();
        setSearchResults(image);
      } catch (err) {
        console.error(err);
        setSearchError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <Alert>
        This page fetches data <strong>client-side</strong>. In order to not
        leak API crendentials, the request is sent to a Next Js route handler
        that runs on the server. This route handler then fetches the data from
        the Unsplash API and returns it to client.
      </Alert>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-3" controlId="search-inputs">
          <FormLabel>Search Query</FormLabel>
          <Form.Control name="query" placeholder="Eg. cats, hotdogs..." />
        </FormGroup>
        <Button type="submit" disabled={isLoading}>
          Search
        </Button>
      </Form>
      <div className="d-flex flex-column align-align-items-center">
        {isLoading && <Spinner animation="border" />}
        {searchError && <p>Something went wrong.Please try again</p>}
        {searchResults?.length === 0 && (
          <p>Nothing Found! Try different query!</p>
        )}
      </div>
      {searchResults &&
        searchResults.map((image) => (
          <Image
            key={image.urls.raw}
            alt={image.description}
            src={image.urls.raw}
            height={250}
            width={250}
            className={styles.image}
          />
        ))}
    </>
  );
};

export default SearchPage;
