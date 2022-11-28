import React from "react";
import { Container, ContainerProps } from "@chakra-ui/react";

export const PageWrapper = (props: ContainerProps) => (
  <Container p={0} maxW="md" mx="auto" my={4} bgColor="white" {...props} />
);
