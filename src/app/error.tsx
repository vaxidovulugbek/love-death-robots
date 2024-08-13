"use client";
import React from "react";

function ErrorWrapper({ error }: { error: Error }) {
  return <div>oops {error.message}</div>;
}

export default ErrorWrapper;
