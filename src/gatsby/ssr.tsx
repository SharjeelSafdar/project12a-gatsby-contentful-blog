import React from "react";
import { WrapRootElementBrowserArgs } from "gatsby";
import "firebase/auth";

import { AuthProvider } from "../context/authContext";

export const wrapRootElement = ({ element }: WrapRootElementBrowserArgs) => (
  <AuthProvider>{element}</AuthProvider>
);
