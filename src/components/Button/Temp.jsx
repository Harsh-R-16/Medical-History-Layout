import * as React from "react";

const Button = ({
  onClick,
  label,
  variant = "",
  disabled = false,
  fullWidth = false,
  className = "",
}) => {
  let classNames = `rounded-4xl font-semibold ${className} focus:outline-none h-12 min-w-40 hover:shadow-md`;
  switch (`${variant}`) {
    case "contained":
      classNames = `${classNames} bg-brand text-white`;
      break;

    case "outlined":
      classNames = `${classNames} bg-white text-brand border border-brand hover:bg-gray-200 hover:bg-opacity-50`;
      break;

    case "text":
      classNames = `${classNames} bg-white text-brand hover:bg-gray-200 hover:bg-opacity-50`;
      break;

    default:
      classNames = `${classNames} bg-white text-neutral-5 border border-neutral-5`;
  }

  if (disabled) {
    classNames = `${classNames} cursor-not-allowed bg-gray-300 hover:shadow-none`;
  }

  if (fullWidth) {
    classNames = `${classNames} w-full`;
  }

  return (
    <button onClick={onClick} className={classNames} disabled={disabled}>
      <span>{label}</span>
    </button>
  );
};

export default Button;
