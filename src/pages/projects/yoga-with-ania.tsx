import { Stack, Text } from "@chakra-ui/react";
import React from "react";

import { ProjectView } from "../../views/ProjectView";

export default function YWAView() {
  return (
    <ProjectView
      title="Yoga With Ania"
      imgBg="#E9F1EF"
      imgSrc="/ywa/index.png"
      tech="Next.js"
    >
      <Stack maxWidth="480px">
        <Text>
          A static site created in Next.js for an Edinburgh-based yoga teacher.
        </Text>
        <Text>
          The site features a number of pages that will soon be managed using
          Netlify CMS including a more dynamic "Current Schedule" page which
          will be updated by the teacher on a weekly basis.
        </Text>
      </Stack>
    </ProjectView>
  );
}
