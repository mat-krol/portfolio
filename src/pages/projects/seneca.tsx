import { Stack, Text } from "@chakra-ui/react";
import React from "react";

import { ProjectView } from "../../views/ProjectView/ProjectView";

export default function SenecaView() {
  return (
    <ProjectView
      title="Seneca Learning"
      imgSrc="/seneca/index.png"
      tech="React + Redux, AWS, Node.js, Gatsby"
      imgBg="#ecf2fd"
    >
      <Text>
        While at Seneca, I worked on a number of FE and BE projects, mostly to
        do with the web app - the homework and revision platform.
      </Text>
      <Text>
        One of the projects, however, involved refactoring and
        internationalising the static site shown on the left which was
        originally created in Gatsby.
      </Text>
      <Text>
        As a result, I ended up adding locale management and 3 new language
        versions which made the user experience more uniform across the regions.
      </Text>
    </ProjectView>
  );
}
