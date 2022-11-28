import React from "react";
import { Container, ContainerProps } from "@chakra-ui/react";

export const ContentWrapper = (props: ContainerProps) => (
  <Container p={8} {...props} />
);
