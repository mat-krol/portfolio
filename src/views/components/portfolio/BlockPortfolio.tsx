import { Box, Grid, Image, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

import { PortfolioDescription } from "./components/PortfolioDescription";
import { PortfolioImage } from "./components/PortfolioImage";

type Props = { list: any[] };

export function BlockPortfolio({ list }: Props) {
  const noOfColumns = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 3,
  });

  if (noOfColumns === 3)
    return (
      <Grid gridTemplateColumns="1fr 1fr 1fr" columnGap={4}>
        {[...list, ...list].map((item, i) =>
          i % 2 === 0 ? (
            <PortfolioImage src={item.src} />
          ) : (
            <PortfolioDescription {...item} key={item.title} />
          )
        )}
      </Grid>
    );

  return (
    <Grid gridTemplateColumns="1fr 1fr">
      {[...list, ...list].map((item, i) => (
        <>
          <PortfolioImage src={item.src} />
          <PortfolioDescription {...item} key={item.title} />
        </>
      ))}
    </Grid>
  );
}
