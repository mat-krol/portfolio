import { Box, Button, Center, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";

type Props = {
  title: string;
  subtitle: string;
  tech: string;
  slug?: string;
};

export function PortfolioDescription({ title, subtitle, tech, slug }: Props) {
  return (
    <Box position="relative" paddingTop="57%">
      <Center
        top="0"
        left="0"
        background="gray.50"
        width="100%"
        height="100%"
        position="absolute"
      >
        <Stack align="center" spacing={4}>
          <Stack align="center" spacing={0}>
            <Heading as="h3" size="md">
              {title}
            </Heading>
            <Text fontSize="xs">{subtitle}</Text>
          </Stack>
          <Text>{tech}</Text>
          <Link to={`/projects/${slug}`}>
            <Button
              colorScheme="blue"
              backgroundColor="#2442bd"
              fontWeight="normal"
              _hover={{ backgroundColor: "#122987" }}
              disabled={!slug}
            >
              Read More
            </Button>
          </Link>
        </Stack>
      </Center>
    </Box>
  );
}
