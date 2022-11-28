import React from "react";
import { Input as ChakraInput, InputProps } from "@chakra-ui/react";

export const Input = (props: InputProps) => (
  <ChakraInput mb={4} borderColor="gray.200" {...props} />
);
