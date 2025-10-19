// Copyright 2025 Zentrum für Digitale Souveränität der Öffentlichen Verwaltung (ZenDiS) GmbH.
// SPDX-License-Identifier: MIT

import {clsx} from 'clsx'
import {FunctionComponent} from 'react'

export type AlertProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  type?: 'info' | 'success' | 'warning' | 'danger'
  title?: string
  content?: string
  href?: string
  linkText?: string
}

export const Alert: FunctionComponent<AlertProps> = props => {
  const defaultType = 'info'
  const defaultTitle = {
    info: 'Hinweis',
    success: 'Erfolg',
    warning: 'Warnung',
    danger: 'Fehler',
  }

  return (
    <div
      {...props}
      className={clsx('kern-alert', 'my-2', `kern-alert--${props.type}` || defaultType, props.className)}
      role="alert"
    >
      <div className={props.content ? 'kern-alert__header' : 'kern-alert__header !p-0'}>
        <span className={clsx('kern-icon', `kern-icon--${props.type}` || defaultType)} aria-hidden="true"></span>
        <span className="kern-title">{props.title || defaultTitle[props.type || defaultType]}</span>
      </div>
      {props.content && (
        <div className="kern-alert__body">
          <p className="kern-body">{props.content}</p>
          {props.href && props.linkText && (
            <a
              href={props.href}
              target={props.href.startsWith('http') ? '_blank' : '_self'}
              rel={props.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="kern-link"
            >
              <span className="kern-icon kern-icon--arrow-forward" aria-hidden="true"></span>
              {props.linkText}
            </a>
          )}
        </div>
      )}
    </div>
  )
}
