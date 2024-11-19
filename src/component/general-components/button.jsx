export function Button({
  buttonText,
  width,
  bgColor,
  borderColor,
  textColor,
  callBack,
}) {
  return (
    <button
      onClick={callBack}
      className={`border ${width} p-2 pr-10 pl-10 h-12 rounded-full ${borderColor} ${bgColor} ${textColor} font-medium text-base`}>
      {buttonText}
    </button>
  );
}
