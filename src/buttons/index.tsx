import { JSX, splitProps } from 'solid-js'

import styles from './styles.module.css'

interface ButtonLocalProps {
  icon?: boolean
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
  rounded?: boolean
  disabled?: boolean
  loading?: boolean
}

// Extend props of button component
type ButtonProps = ButtonLocalProps & JSX.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
  const [local, rest] = splitProps(props, [
    'icon',
    'primary',
    'size',
    'rounded',
    'disabled',
    'loading',
  ] as const);

  return (
    <button {...rest}
      classList={{
        [styles.button!]: true,
        [styles.icon!]: local.icon,
        [styles.primary!]: local.primary,
        [styles.small!]: local.size === 'small',
        [styles.medium!]: local.size === 'medium',
      }}
    >
      {props.children}
    </button>
  )
}
