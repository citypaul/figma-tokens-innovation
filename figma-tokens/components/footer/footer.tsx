import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { ContentWrapper } from "../content-wrapper";

export const Footer = () => (
  <Box bgColor="gray.100">
    <ContentWrapper>
      <Stack gap={2}>
        <Text fontWeight="bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          illum consequuntur alias numquam fugit natus dignissimos ipsam quos,
          ex animi placeat fugiat veniam. Beatae impedit maiores fugiat ut
          molestias facilis.
        </Text>
      </Stack>
    </ContentWrapper>
  </Box>
);
