// Copyright 2025 Zentrum für Digitale Souveränität der Öffentlichen Verwaltung (ZenDiS) GmbH.
// SPDX-License-Identifier: MIT

import { clsx } from "clsx";

export function P(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > & {
    size?: "sm" | "md" | "lg";
  },
) {
  const { size = "md" } = props;
  const sizeClass = {
    sm: "kern-body--small",
    md: "",
    lg: "kern-body--large",
  }[size];

  return (
    <p {...props} className={clsx("kern-body", sizeClass, props.className)} />
  );
}
