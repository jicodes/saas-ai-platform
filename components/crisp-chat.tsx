"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("19b1a5ae-6c1f-446b-8ce4-47bd68d9b0d2");
  }, []);

  return null;
};
