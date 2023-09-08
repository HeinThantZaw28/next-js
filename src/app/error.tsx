"use client";
import React from "react";
import ErrorProps from "./type";
import { Button } from "react-bootstrap";

export default function error({error, reset}:ErrorProps) {
  return (
    <div>
      <h1>Error</h1>
      <p>Something went wrong!</p>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
