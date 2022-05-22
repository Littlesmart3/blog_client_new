// src/store/index.ts
import React from "react";
import loginStore from "./modules/login";

export const storesContext = React.createContext({
  loginStore,
});
