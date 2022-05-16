import { Stack, Text } from "@chakra-ui/react";
import React from "react";

import { ProjectView } from "../../views/ProjectView/ProjectView";

export default function YWAView() {
  return (
    <ProjectView title="UWC Poland" imgSrc="/uwc/index.png" tech="Next.js">
      <Text>A site I created in Next.js for a Polish NGO</Text>
      <Text>
        The site currently consists of the static content that is managed in
        Netlify CMS. This will soon be updated with a more user-friendly and
        more flexible Strapi.
      </Text>
      <Text>
        One other feature that is in progres is the candidate application
        system. This is currently solved by using a web app that was created 10
        years ago and was since rarely updated. By using Next.js, we are able to
        benefit from the SEO-friendliness while being able to render relevant
        content dynamically.
      </Text>
      <Text>
        This piece of work is a direct clone of the existing site and as a
        result didn't include much redesigning on my end for now.
      </Text>
    </ProjectView>
  );
}
