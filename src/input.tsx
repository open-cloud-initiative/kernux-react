// Copyright 2025 Zentrum für Digitale Souveränität der Öffentlichen Verwaltung (ZenDiS) GmbH.
// SPDX-License-Identifier: MIT

import { clsx } from "clsx";
import { ComponentProps, forwardRef, useId } from "react";

type InputProps = ComponentProps<"input"> & {
  label: string;
  hint?: string;
  errorMessage?: string;
};

export const Input = forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    const { label, className, errorMessage, hint, ...inputProps } = props;
    const inputId = useId();

    return (
      <div
        className={clsx("kern-form-input", {
          "kern-form-input--error": Boolean(errorMessage),
        })}
      >
        <label className="kern-label" htmlFor={inputProps.id || inputId}>
          {label}
          {!inputProps.required && (
            <span className="kern-label__optional">- Optional</span>
          )}
        </label>
        {hint && <div className="kern-hint">{hint}</div>}

        <input
          className={clsx("kern-form-input__input", className, {
            "kern-form-input__input--error": Boolean(errorMessage),
          })}
          id={inputProps.id || inputId}
          ref={ref}
          type="text"
          {...inputProps}
        />
        {errorMessage && (
          <p className="kern-error" role="alert">
            <span
              className="kern-icon kern-icon--danger kern-icon--md"
              aria-hidden="true"
            ></span>
            <span className="kern-body">{errorMessage}</span>
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
