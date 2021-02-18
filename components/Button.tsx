import React, { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgClassName?: string;
  textColorClassName?: string;
}

const Button = ({
  children,
  className,
  bgClassName = 'bg-primary',
  textColorClassName = 'text-white',
  ...rest
}: Props) => (
  <button
    {...rest}
    className={classnames(
      'text-base px-5 py-2 rounded-sm leading-none whitespace-nowrap font-medium',
      bgClassName,
      textColorClassName,
      className
    )}
  >
    {children}
  </button>
);

export default Button;
