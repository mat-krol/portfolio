import { Stack, Text } from "@chakra-ui/react";
import React from "react";

import { ProjectView } from "../../views/ProjectView/ProjectView";

export default function Portfolioiew() {
  return (
    <ProjectView title="Portfolio" imgSrc="/portfolio/index.png" tech="Gatsby">
      <Text>
        A static site showcasing my collection of personal and professional
        projects built in Gatsby.
      </Text>
    </ProjectView>
  );
}
