// Copyright 2025 Zentrum für Digitale Souveränität der Öffentlichen Verwaltung (ZenDiS) GmbH.
// SPDX-License-Identifier: MIT

import { clsx } from "clsx";

export function H2(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >,
) {
  return (
    <h2 {...props} className={clsx("kern-heading-x-large", props.className)} />
  );
}
