import { Image } from "@chakra-ui/react";
import React from "react";

type Props = {
  src: string;
};

export function PortfolioImage({ src }: Props) {
  return <Image src={src} />;
}
