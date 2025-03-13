"use client";

import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";

export function ChakraStyleProvider({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
