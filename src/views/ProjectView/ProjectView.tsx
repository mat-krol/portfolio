import { Box, Grid, Heading, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { PropsWithChildren } from "@reach/router/node_modules/@types/react";
import { Link } from "gatsby";
import React from "react";
import { BsChevronLeft } from "react-icons/bs";

import { MetaData } from "../../components/MetaData";

import { Wavelet } from "../IndexView/components/separator/Wavelet";

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
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <MetaData title={title + " - Mat Krol - Portfolio"} />
      <Grid
        gridTemplateColumns={{ base: "1fr", lg: "2fr 3fr" }}
        gridGap={16}
        minH={{ lg: "100vh" }}
        backgroundColor="gray.100"
      >
        {isDesktop && (
          <Box backgroundColor={imgBg || "white"}>
            <Image src={imgSrc} width="100%" />
          </Box>
        )}

        <Stack paddingY={16} spacing={16}>
          <Stack paddingX={{ base: 4, lg: 0 }}>
            {/* @ts-ignore */}
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
          <Stack maxWidth="480px" spacing={8} paddingX={{ base: 4, lg: 0 }}>
            {children}
          </Stack>
        </Stack>

        {isDesktop || <Image src={imgSrc} width="100%" />}
      </Grid>
    </>
  );
}
