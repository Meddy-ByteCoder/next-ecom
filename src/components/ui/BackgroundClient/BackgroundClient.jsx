"use client";
import { useMediaQuery } from "hooks/useMediaQuery";
import Image from "next/image";
import React from "react";

const BackgroundClient = ({
  url = "",
  priority,
  loading = "eager",
  mobileUrl = "",
}) => {
  const mobile = useMediaQuery("(max-width: 768px)");

  return (
    // <div style={{ width: "100%", height: "100%" }}>
    <Image
      loading={loading}
      fill
      style={{ zIndex: "-10" }}
      src={mobile ? mobileUrl : url}
      sizes="(max-width: 768px) 50vw, 100vw"
      priority={priority}
      alt="background-Img"
    />
    // </div>
  );
};

export default BackgroundClient;
