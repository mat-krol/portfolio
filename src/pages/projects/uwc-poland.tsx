import { Stack, Text } from "@chakra-ui/react";
import React from "react";

import { ProjectView } from "../../views/ProjectView";

export default function YWAView() {
  return (
    <ProjectView
      title="UWC Poland"
      imgBg="#0162a6"
      imgSrc="/uwc/index.png"
      tech="Next.js"
    >
      <Stack maxWidth="480px">
        <Text>A site created in Next.js for a Polish NGO</Text>
        <Text>
          The site currently consists of the static content that is managed in
          Netlify CMS. This will soon be updated with a more user-friendly and
          more flexible Strapi.
        </Text>
        <Text>
          One other feature that is also in progres WIP is the candidate
          application system.
        </Text>
        <Text>
          This is currently solved by using a web app that was created 10 years
          ago and was since rarely updated. By using next.js, we have access to
          the best of both worlds when it comes to SEO-friendliness and dynamic
          content rendering.
        </Text>
        <Text>
          This piece of work is a direct clone of the existing site and as a
          result didn't include much redesigning on my end.
        </Text>
      </Stack>
    </ProjectView>
  );
}
