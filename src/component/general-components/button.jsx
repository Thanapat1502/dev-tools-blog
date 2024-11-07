export function Button({ buttonText, width, bgColor, borderColor, textColor }) {
  return (
    <button
      className={`border ${width} p-2 pr-10 pl-10 h-12 rounded-full ${borderColor} ${bgColor} ${textColor} font-medium text-base`}>
      {buttonText}
    </button>
  );
}
