import { Stack, Text } from "@chakra-ui/react";
import React from "react";

import { ProjectView } from "../../views/ProjectView/ProjectView";

export default function OneMathsView() {
  return (
    <ProjectView
      title="One Maths"
      imgSrc="/om/index.png"
      tech="JavaScript, Ruby on Rails, React, Gatsby"
    >
      <Text>
        While at One Maths, I mostly worked on Emmi.ai - a virtual maths tutor
        web app built in React and Ruby on Rails.
      </Text>
      <Text>
        Main features of the app included the chatbot interface, quiz mode and
        stats dashboard
      </Text>
      <Text>
        Another aspect of my work there was designing and building a static
        site, parts of which are shown on the left.
      </Text>
      <Text>
        Moreover, towards the end of my time there, we ran a number of design
        sprints which resulted in creating 3 low res React prototypes.
      </Text>
    </ProjectView>
  );
}
