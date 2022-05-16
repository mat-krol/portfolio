import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";

type Props = {
  title: string;
  subtitle: string;
  tech: string;
  slug?: string;
  src: string;
};

export function PortfolioDescription({
  title,
  src,
  subtitle,
  tech,
  slug,
}: Props) {
  return (
    <Stack
      spacing={4}
      width="100%"
      border={{ base: "none", md: "1px solid #ccc" }}
      padding={4}
    >
      <Image src={src} />
      <Text>{tech}</Text>

      <Flex justifyContent="space-between" alignItems="baseline">
        <Stack spacing={0}>
          <Heading as="h3" size="md">
            {title}
          </Heading>
          <Text fontSize="xs">{subtitle}</Text>
        </Stack>

        <Link to={`/projects/${slug}`}>
          <Button
            colorScheme="blue"
            backgroundColor="#2442bd"
            fontWeight="normal"
            _hover={{ backgroundColor: "#122987" }}
            disabled={!slug}
          >
            Learn More
          </Button>
        </Link>
      </Flex>
    </Stack>
  );
}
