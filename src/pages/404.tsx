import { Redirect } from "@reach/router";
import React from "react";

export default function NotFoundPage() {
  return <Redirect to="/" noThrow />
}
