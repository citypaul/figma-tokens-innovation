import React from "react";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

export const Button = (props: ButtonProps) => (
  <ChakraButton w="full" bgColor="purple.500" color="white" {...props} />
);
