// Copyright 2025 Zentrum für Digitale Souveränität der Öffentlichen Verwaltung (ZenDiS) GmbH.
// SPDX-License-Identifier: MIT

import clsx from 'clsx'
import {ComponentProps, forwardRef, useId} from 'react'

type SelectProps = ComponentProps<'select'> & {
  label: string
  hint?: string
  errorMessage?: string
  options: Array<{value: string; label: string}>
  placeholder?: string
}

export const Select = forwardRef((props: SelectProps, ref: React.Ref<HTMLSelectElement>) => {
  const selectId = useId()
  const {label, className, errorMessage, ...selectProps} = props

  return (
    <div
      className={clsx('kern-form-input', {
        'kern-form-input--error': Boolean(errorMessage),
      })}
    >
      <label className="kern-label" htmlFor={selectProps.id || selectId}>
        {label}
        {!props.required && <span className="kern-label__optional">- Optional</span>}
      </label>
      {props.hint && <div className="kern-hint">{props.hint}</div>}
      <div className="kern-form-input__select-wrapper">
        <select
          className={clsx(className, 'kern-form-input__select', {
            'kern-form-input__select--error': Boolean(errorMessage),
          })}
          id={selectProps.id || selectId}
          ref={ref}
          {...selectProps}
        >
          {props.placeholder && (
            <option value="" disabled>
              {props.placeholder}
            </option>
          )}
          {props.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {errorMessage && (
        <p className="kern-error" role="alert">
          <span className="kern-icon kern-icon--danger kern-icon--md" aria-hidden="true"></span>
          <span className="kern-body">{errorMessage}</span>
        </p>
      )}
    </div>
  )
})

Select.displayName = 'Select'
