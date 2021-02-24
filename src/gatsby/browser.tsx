import React from "react";
import { WrapRootElementBrowserArgs } from "gatsby";
import "firebase/auth";

import { AuthProvider } from "../context/authContext";
import "../styles/normalize.css";

export const wrapRootElement = ({ element }: WrapRootElementBrowserArgs) => {
  return <AuthProvider>{element}</AuthProvider>;
};
