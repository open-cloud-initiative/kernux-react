// Copyright 2025 Zentrum für Digitale Souveränität der Öffentlichen Verwaltung (ZenDiS) GmbH.
// SPDX-License-Identifier: MIT

import clsx from 'clsx'

type IconSize = 'sm' | 'md' | 'lg'

interface IconProps {
  name: string // e.g., 'edit', 'close'
  size?: IconSize // Optional: 'sm' | 'md' | 'lg'
  className?: string
  'aria-hidden'?: boolean
  'aria-label'?: string
  role?: string
}

export const Icon: React.FC<IconProps> = ({
  name,
  size,
  className,
  'aria-hidden': ariaHidden = true,
  'aria-label': ariaLabel,
  role = 'img',
}) => {
  const iconClass = clsx(
    'kern-icon',
    `kern-icon--${name}`,
    {
      [`kern-icon--${size}`]: size,
    },
    className,
  )

  return <span className={iconClass} aria-hidden={ariaHidden} aria-label={ariaLabel} role={role} />
}
