// Copyright 2025 Zentrum für Digitale Souveränität der Öffentlichen Verwaltung (ZenDiS) GmbH.
// SPDX-License-Identifier: MIT

import {ComponentProps, FunctionComponent, useId} from 'react'
import {clsx} from 'clsx'

type CheckboxProps = ComponentProps<'input'> & {
  label: string
  errorMessage?: string
  hint?: string
}

const Checkbox: FunctionComponent<CheckboxProps> = ({label, errorMessage, hint, className, ...rest}) => {
  const id = useId()
  return (
    <div
      className={clsx('kern-form-check', {
        'kern-form-check--error': Boolean(errorMessage),
      })}
    >
      {hint && <div className="kern-hint">{hint}</div>}
      <input
        className={clsx('kern-form-check__checkbox', className, {
          'kern-form-check__checkbox--error': Boolean(errorMessage),
        })}
        id={rest.id || id}
        type="checkbox"
        {...rest}
      />
      <label className="kern-label" htmlFor={rest.id || id}>
        {label}
      </label>
      {errorMessage && (
        <p className="kern-error" role="alert">
          <span className="kern-icon kern-icon--danger kern-icon--md" aria-hidden="true"></span>
          <span className="kern-body">{errorMessage}</span>
        </p>
      )}
    </div>
  )
}

export {Checkbox}
