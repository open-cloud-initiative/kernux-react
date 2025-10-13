// Copyright 2025 Zentrum für Digitale Souveränität der Öffentlichen Verwaltung (ZenDiS) GmbH.
// SPDX-License-Identifier: MIT

import { clsx } from "clsx";

export function H6(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >,
) {
  return (
    <h6 {...props} className={clsx("kern-heading-small", props.className)} />
  );
}
