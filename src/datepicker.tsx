// Copyright 2025 Zentrum für Digitale Souveränität der Öffentlichen Verwaltung (ZenDiS) GmbH.
// SPDX-License-Identifier: MIT

import clsx from 'clsx'
import {FunctionComponent, useId, useState} from 'react'

interface DatepickerProps {
  onChange: (date: Date | null) => void
  value: Date | null
  label: string
  hint?: string
  errorMessage?: string
}

const DatePicker: FunctionComponent<DatepickerProps> = props => {
  const dayId = useId()
  const monthId = useId()
  const yearId = useId()
  const hintId = useId()

  const [internalError, setInternalError] = useState<string | null>(null)

  // Use external errorMessage if provided, otherwise use internal error
  const displayError = props.errorMessage || internalError

  const handleDateChange = () => {
    const day = (document.getElementById(dayId) as HTMLInputElement).value
    const month = (document.getElementById(monthId) as HTMLInputElement).value
    const year = (document.getElementById(yearId) as HTMLInputElement).value

    if (day && month && year) {
      // validate the date format
      const datePattern = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4})$/
      if (!datePattern.test(`${day}-${month}-${year}`)) {
        setInternalError('Bitte geben Sie ein gültiges Datum im Format TT MM JJJJ ein. Beispielsweise 06 02 1997')
        props.onChange(null)
        return
      }

      const date = new Date(Number(year), Number(month) - 1, Number(day))
      props.onChange(date)
      setInternalError(null)
    } else {
      setInternalError('Bitte geben Sie ein gültiges Datum ein.')
      props.onChange(null)
    }
  }

  return (
    <fieldset
      className={clsx('kern-fieldset', {
        'kern-fieldset--error': displayError,
      })}
      aria-describedby={hintId}
    >
      <legend className="kern-label">{props.label}</legend>
      <div className="kern-hint" id={hintId}>
        {props.hint || 'Bitte wählen Sie ein Datum aus.'} (TT MM JJJJ)
      </div>
      <div className="kern-fieldset__body kern-fieldset__body--horizontal">
        <div className="kern-form-input">
          <label className="kern-label" htmlFor={dayId}>
            Tag
          </label>
          <input
            className={clsx('kern-form-input__input kern-form-input__input--width-2', {
              'kern-form-input__input--error': displayError,
            })}
            id={dayId}
            name="tag"
            onBlur={handleDateChange}
            type="text"
            inputMode="numeric"
          />
        </div>
        <div className="kern-form-input">
          <label className="kern-label" htmlFor={monthId}>
            Monat
          </label>
          <input
            className={clsx('kern-form-input__input kern-form-input__input--width-2', {
              'kern-form-input__input--error': displayError,
            })}
            id={monthId}
            name="monat"
            onBlur={handleDateChange}
            type="text"
            inputMode="numeric"
          />
        </div>
        <div className="kern-form-input">
          <label className="kern-label" htmlFor={yearId}>
            Jahr
          </label>
          <input
            className={clsx('kern-form-input__input kern-form-input__input--width-4', {
              'kern-form-input__input--error': displayError,
            })}
            id={yearId}
            onBlur={handleDateChange}
            name="jahr"
            type="text"
            inputMode="numeric"
          />
        </div>
      </div>
      {displayError && (
        <p className="kern-error" role="alert">
          <span className="kern-icon kern-icon--danger kern-icon--md" aria-hidden="true"></span>
          <span className="kern-body">{displayError}</span>
        </p>
      )}
    </fieldset>
  )
}

export {DatePicker}
