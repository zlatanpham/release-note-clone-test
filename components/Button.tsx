import React, { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgClassName?: string;
  textColorClassName?: string;
}
// FIXME:
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

interface RangeProps<T> {
  value: T;
  onChange: (value: T) => void;
}

function Range<T extends number | [number, number]>(props: RangeProps<T>) {
  const { value = 1 } = props;
  return <div>{Array.isArray(props.value) ? props.value[0] : props.value}</div>;
}

const Component = () => {
  return <Range value={[0, 1]} onChange={value => value[0]} />;
};

export default Button;
