import { Box, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { PropsWithChildren } from "@reach/router/node_modules/@types/react";
import React from "react";

import { MetaData } from "../components/MetaData";

import { Wavelet } from "./IndexView/components/separator/Wavelet";

type Props = {
  title: string;
  imgSrc: string;
  imgBg?: string;
  tech?: string;
};

export function ProjectView({
  title,
  imgSrc,
  imgBg,
  tech,
  children,
}: PropsWithChildren<Props>) {
  return (
    <>
      <MetaData title={title + " - Mat Krol - Portfolio"} />
      <Grid gridTemplateColumns="2fr 3fr" gridGap={16} minH="100vh">
        <Box bgColor={imgBg}>
          <Image src={imgSrc} />
        </Box>
        <Stack paddingY={16} spacing={16}>
          <Stack>
            <Text>Mat Krol</Text>
            <Heading>{title}</Heading>
            <Text>{tech}</Text>
          </Stack>
          <Wavelet />
          <Stack>{children}</Stack>
        </Stack>
      </Grid>
    </>
  );
}
