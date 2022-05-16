import { Stack, Text } from "@chakra-ui/react";
import React from "react";

import { ProjectView } from "../../views/ProjectView/ProjectView";

export default function AcademyView() {
  return (
    <ProjectView
      title="Academy"
      imgSrc="/academy/index.png"
      tech="React, TypeScript, PostgreSQL, Next.js"
      imgBg="gray.50"
    >
      <Text>
        During my time at Academy I built a number of prototypes and MVPs, first
        in Figma and once user research proved their usefulness, these were
        turned into code.
      </Text>
      <Text>
        An example of a recent project is 'Academy Flow' which was the app
        presenting the course content to the students and then quizzing them on
        it.
      </Text>
    </ProjectView>
  );
}
