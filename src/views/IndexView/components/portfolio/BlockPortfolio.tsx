import { Grid } from "@chakra-ui/react";
import React from "react";

import { PortfolioDescription } from "./components/PortfolioDescription";

type Props = { list: any[] };

export function BlockPortfolio({ list }: Props) {
  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
      rowGap={{ base: 8, md: 4 }}
      columnGap={4}
      paddingX={{ base: 2, md: 0 }}
    >
      {list.map((item) => (
        <PortfolioDescription {...item} key={item.title} />
      ))}
    </Grid>
  );
}
