// Copyright 2025 Zentrum für Digitale Souveränität der Öffentlichen Verwaltung (ZenDiS) GmbH.
// SPDX-License-Identifier: MIT

import cn from "clsx";

import type { ComponentProps, ReactElement } from "react";
import { forwardRef } from "react";

export type AnchorProps = ComponentProps<"a"> & {
  newWindow?: boolean;
  size?: "sm" | "md" | "lg";
};

export const A = forwardRef<HTMLAnchorElement, AnchorProps>(
  (
    { href = "", children, newWindow, ...props },
    // ref is used in <NavbarMenu />
    ref,
  ): ReactElement => {
    const sizeClass = {
      sm: "!text-sm",
      md: "",
      lg: "!text-lg",
    }[props.size || "md"];

    const ComponentToUse = "a";
    return (
      <ComponentToUse
        {...props}
        className={cn("kern-link", sizeClass, props.className)}
        ref={ref}
        href={href}
        {...(newWindow && {
          target: "_blank",
          rel: "noreferrer",
        })}
      >
        {children}
      </ComponentToUse>
    );
  },
);

A.displayName = "Anchor";
