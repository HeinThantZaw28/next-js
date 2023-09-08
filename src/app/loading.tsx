import React from "react";
import { Spinner } from "@/components/bootstrap";

function Loading() {
  return (
    <div>
      <Spinner animation="border" className="d-block m-auto"></Spinner>
    </div>
  );
}

export default Loading;
