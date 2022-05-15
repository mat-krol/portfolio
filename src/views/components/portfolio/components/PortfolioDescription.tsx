import { Button, Center, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  title: string;
  subtitle: string;
  tech: string;
};

export function PortfolioDescription({ title, subtitle, tech }: Props) {
  return (
    <Center background="gray.50">
      <Stack align="center" spacing={4}>
        <Stack align="center" spacing={0}>
          <Heading as="h3" size="md">
            {title}
          </Heading>
          <Text fontSize="xs">{tech}</Text>
        </Stack>
        <Text>{subtitle}</Text>
        <Button
          colorScheme="blue"
          backgroundColor="#2442bd"
          fontWeight="normal"
          _hover={{ backgroundColor: "#122987" }}
        >
          Read More
        </Button>
      </Stack>
    </Center>
  );
}
