import React from "react";
import { Flex, FlexboxProps, Heading, Image, Text } from "@chakra-ui/react";

export const Banner = (props: FlexboxProps) => (
  <Flex p={2} justifyContent="center" {...props}>
    <Text fontSize="2xl" fontWeight="bold" color="purple.500">
      DEMOCARD
    </Text>
  </Flex>
);
