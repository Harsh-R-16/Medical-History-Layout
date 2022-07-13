import React from "react";

export default function Button({
  label,
  type = "",
  disabled = false,
  fullWidth = false,
  className = "",
}) {
  let classNames = `mx-3 m-4 text-white tracking-wide rounded-md hover:shadow-sm p-2 px-4 ease-in duration-200 ${className}`;

  switch (`${type}`) {
    case "Primary":
      classNames = `${classNames} bg-blue-500 hover:bg-blue-600`;
      break;

    case "Secondary":
      classNames = `${classNames} bg-slate-500 hover:bg-slate-600`;
      break;

    case "Success":
      classNames = `${classNames} bg-green-600 hover:bg-green-700`;
      break;

    case "Danger":
      classNames = `${classNames} bg-red-600 hover:bg-red-700`;
      break;

    case "Warning":
      classNames = `${classNames} bg-yellow-400 hover:bg-yellow-500`;
      break;

    case "Info":
      classNames = `${classNames} bg-cyan-600 hover:bg-cyan-700`;
      break;

    case "Light":
      classNames = `${classNames} bg-slate-100 text-black hover:bg-slate-200`;
      break;

    case "Dark":
      classNames = `${classNames} bg-black text-white hover:bg-opacity-75`;
      break;

    case "Link":
      classNames = `${classNames} text-blue-600 hover:shadow-none`;
      break;

    default:
      classNames = `${classNames} bg-white text-black border border-neutral-5`;
  }

  if (disabled) {
    classNames = `${classNames} cursor-not-allowed bg-gray-300 hover:shadow-none`;
  }

  if (fullWidth) {
    classNames = `${classNames} w-[98%]`;
  }

  return (
    <button className={classNames} disabled={disabled}>
      <span>{label}</span>
    </button>
  );
}
