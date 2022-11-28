import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { ContentWrapper } from "../content-wrapper";

type HeaderProps = {
  title: string;
  subtitle: string;
};

export const Header = ({ title, subtitle, ...rest }: HeaderProps) => (
  <Box w="full" bgColor="purple.500" color="white" {...rest}>
    <ContentWrapper>
      <Heading size="md" mb={2}>
        {title}
      </Heading>
      <Text>{subtitle}</Text>
    </ContentWrapper>
  </Box>
);
