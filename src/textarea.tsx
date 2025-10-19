// Copyright 2025 Zentrum für Digitale Souveränität der Öffentlichen Verwaltung (ZenDiS) GmbH.
// SPDX-License-Identifier: MIT

import {clsx} from 'clsx'
import {ComponentProps, forwardRef, useId} from 'react'

type TextareaProps = ComponentProps<'textarea'> & {
  label: string
  hint?: string
  errorMessage?: string
}

export const Textarea = forwardRef(
  ({label, errorMessage, hint, className, ...rest}: TextareaProps, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
    const id = useId()

    return (
      <div
        className={clsx('kern-form-input', {
          'kern-form-input--error': Boolean(errorMessage),
        })}
      >
        <label className="kern-label" htmlFor={rest.id || id}>
          {label}
          {!rest.required && <span className="kern-label__optional">- Optional</span>}
        </label>
        {hint && <div className="kern-hint">{hint}</div>}
        <textarea
          className={clsx('kern-form-input__input', className, {
            'kern-form-input__input--error': Boolean(errorMessage),
          })}
          id={rest.id || id}
          ref={ref}
          {...rest}
        ></textarea>
        {errorMessage && (
          <p className="kern-error" role="alert">
            <span className="kern-icon kern-icon--danger kern-icon--md" aria-hidden="true"></span>
            <span className="kern-body">{errorMessage}</span>
          </p>
        )}
      </div>
    )
  },
)

Textarea.displayName = 'Textarea'
