// Copyright 2025 Zentrum für Digitale Souveränität der Öffentlichen Verwaltung (ZenDiS) GmbH.
// SPDX-License-Identifier: MIT

import {forwardRef, PropsWithChildren} from 'react'
import {Icon} from './icon'
import {clsx} from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
type IconPosition = 'left' | 'right'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  block?: boolean
  iconClassName?: string
  icon?: string
  iconPosition?: IconPosition
  ariaLabel?: string
  href?: string
  target?: string
}

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  (
    {
      variant,
      block = false,
      icon,
      iconClassName,
      iconPosition = 'left',
      children,
      onClick,
      ariaLabel,
      className,
      target,
      disabled = false,
      type = 'button',
      ...rest
    },
    ref,
  ) => {
    const btnClass = clsx(className, '_transition-all _flex-grow kern-btn', `kern-btn--${variant}`, {
      'kern-btn--block': block,
    })

    const iconElement = icon ? <Icon className={iconClassName} name={icon} aria-hidden /> : null

    const content = (
      <>
        {icon && iconPosition === 'left' && iconElement}
        <span className={icon && !children ? 'kern-sr-only' : 'kern-label'}>{children || ariaLabel}</span>
        {icon && iconPosition === 'right' && iconElement}
      </>
    )

    if (rest.href)
      return rest.href?.includes('#') ? (
        <a
          href={rest.href}
          className={btnClass}
          target={target}
          onClick={e => {
            e.preventDefault()
            document.getElementById((rest.href as string).replace('#', ''))?.scrollIntoView({
              behavior: 'smooth',
            })
          }}
        >
          {content}
        </a>
      ) : (
        <a
          href={rest.href}
          target={target}
          className={btnClass}
          aria-label={!children && ariaLabel ? ariaLabel : undefined}
          onClick={() => onClick}
        >
          {content}
        </a>
      )
    else {
      return (
        <button
          type={type}
          className={btnClass}
          onClick={onClick}
          disabled={disabled}
          aria-label={!children && ariaLabel ? ariaLabel : undefined}
          ref={ref}
          {...rest}
        >
          {content}
        </button>
      )
    }
  },
)

Button.displayName = 'Button'
