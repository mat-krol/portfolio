import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";
import { BsChevronRight } from "react-icons/bs";

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
    <Stack spacing={4} width="100%" backgroundColor="gray.100" padding={4}>
      <Image src={src} />
      <Text>{tech}</Text>

      <Flex justifyContent="space-between" alignItems="baseline">
        <Stack spacing={0}>
          <Heading as="h3" size="md">
            {title}
          </Heading>
          <Text fontSize="xs">{subtitle}</Text>
        </Stack>

        {/* @ts-ignore */}
        <Link to={`/projects/${slug}`}>
          <Button
            colorScheme="blue"
            backgroundColor="#2442bd"
            fontWeight="normal"
            _hover={{ backgroundColor: "#122987" }}
            disabled={!slug}
            rightIcon={<BsChevronRight />}
          >
            Learn More
          </Button>
        </Link>
      </Flex>
    </Stack>
  );
}
