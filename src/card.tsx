// Copyright 2025 Zentrum für Digitale Souveränität der Öffentlichen Verwaltung (ZenDiS) GmbH.
// SPDX-License-Identifier: MIT

import {Button} from './button'
import clsx from 'clsx'

interface Props {
  variant?: 'small' | 'large'
  vorzeile?: string
  title: string
  subline?: string
  body?: string
  imgSrc?: string
  imgAlt?: string
  primaryAction?: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
  href?: string
}
export const Card = (props: Props) => {
  return (
    <article
      className={clsx('kern-card', {
        'kern-card--small': props.variant === 'small',
        'kern-card--large': props.variant === 'large',
        'kern-card--active': Boolean(props.href),
      })}
    >
      {Boolean(props.imgSrc) && (
        <div className="kern-card__media">
          <img src={props.imgSrc} alt={props.imgAlt} />
        </div>
      )}
      <div className="kern-card__container _flex-col _justify-between">
        <header className="kern-card__header">
          {Boolean(props.vorzeile) && <p className="kern-preline">{props.vorzeile}</p>}
          <h2 className="kern-title">
            {props.href ? (
              <a href={props.href} className=" kern-link--stretched">
                {props.title}
              </a>
            ) : (
              props.title
            )}
          </h2>
          {Boolean(props.subline) && <h3 className="kern-subline">{props.subline}</h3>}
        </header>
        {Boolean(props.body) && (
          <section className="kern-card__body">
            <p className="kern-body">{props.body}</p>
          </section>
        )}
        {(Boolean(props.primaryAction) || Boolean(props.secondaryAction)) && (
          <footer className="kern-card__footer">
            {props.primaryAction && (
              <Button variant="primary" href={props.primaryAction?.href}>
                {props.primaryAction?.label}
              </Button>
            )}
            {props.secondaryAction && (
              <Button variant="secondary" href={props.secondaryAction?.href}>
                {props.secondaryAction?.label}
              </Button>
            )}
          </footer>
        )}
      </div>
    </article>
  )
}
