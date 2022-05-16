import { Box, Flex, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { PropsWithChildren } from "@reach/router/node_modules/@types/react";
import { Link } from "gatsby";
import React from "react";
import { BsChevronLeft } from "react-icons/bs";

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
            <Link to="/">
              <Stack direction="row" align="center" marginBottom={6}>
                <BsChevronLeft />
                <Text
                  textTransform="uppercase"
                  fontSize="xs"
                  letterSpacing="1px"
                >
                  Back to Mat Krol's Projects
                </Text>
              </Stack>
            </Link>
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
