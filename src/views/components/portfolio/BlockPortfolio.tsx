import { Grid, Stack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

import { PortfolioDescription } from "./components/PortfolioDescription";
import { PortfolioImage } from "./components/PortfolioImage";

type Props = { list: any[] };

export function BlockPortfolio({ list }: Props) {
  const noOfColumns = useBreakpointValue({
    lg: 3,
  });

  if (noOfColumns === 3)
    return (
      <Grid gridTemplateColumns="1fr 1fr 1fr" columnGap={4}>
        {list.map((item) => (
          <PortfolioDescription key={item.src} {...item} />
        ))}
        {list.map((item) => (
          <PortfolioImage key={item.src} src={item.src} />
        ))}
      </Grid>
    );

  return (
    <Grid gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} rowGap={4}>
      {list.map((item) => (
        <Stack spacing={0}>
          <PortfolioDescription {...item} key={item.title} />
          <PortfolioImage src={item.src} key={item.src} />
        </Stack>
      ))}
    </Grid>
  );
}
