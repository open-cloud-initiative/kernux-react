// Copyright 2025 Zentrum für Digitale Souveränität der Öffentlichen Verwaltung (ZenDiS) GmbH.
// SPDX-License-Identifier: MIT

import {forwardRef} from 'react'
import {clsx} from 'clsx'

type RadioOption = {
  value: string
  label: string
  id?: string
}

type RadioGroupProps = {
  label: string
  name: string
  options: RadioOption[]
  value?: string
  onChange?: (value: string) => void
  hint?: string
  errorMessage?: string
  required?: boolean
  className?: string
}

export const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>((props, ref) => {
  const {label, name, options, value, onChange, hint, errorMessage, required, className, ...fieldsetProps} = props

  return (
    <fieldset
      ref={ref}
      className={clsx('kern-fieldset', className, {
        'kern-fieldset--error': Boolean(errorMessage),
      })}
      {...fieldsetProps}
    >
      <legend className="kern-label">
        {label}
        {!required && <span className="kern-label__optional">- Optional</span>}
      </legend>
      {hint && <div className="kern-hint">{hint}</div>}

      <div className="kern-fieldset__body">
        {options.map(option => {
          const optionId = option.id || `${name}-${option.value}`
          return (
            <div key={option.value} className="kern-form-check">
              <input
                className="kern-form-check__radio"
                id={optionId}
                name={name}
                type="radio"
                value={option.value}
                checked={value === option.value}
                onChange={e => onChange?.(e.target.value)}
              />
              <label className="kern-label" htmlFor={optionId}>
                {option.label}
              </label>
            </div>
          )
        })}
      </div>

      {errorMessage && (
        <p className="kern-error" role="alert">
          <span className="kern-icon kern-icon--danger kern-icon--md" aria-hidden="true"></span>
          <span className="kern-body">{errorMessage}</span>
        </p>
      )}
    </fieldset>
  )
})

RadioGroup.displayName = 'RadioGroup'
