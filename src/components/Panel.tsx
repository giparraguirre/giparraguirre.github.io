import type { ReactNode } from 'react'

type Props = { title: string; children: ReactNode; className?: string; bodyClassName?: string }

/** The bordered pixel window with a cyan title bar, used across every section. */
export default function Panel({ title, children, className = '', bodyClassName = '' }: Props) {
  return (
    <div className={`px ${className}`}>
      <div className="ph">
        <span>{title}</span>
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  )
}
