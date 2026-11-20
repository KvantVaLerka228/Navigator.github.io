export default function ArrowIcon({ className = "" }) {
  return (
    <img
      src="/icons/arrow.svg"
      alt=""
      aria-hidden="true"
      className={`arrow-icon ${className}`}
    />
  );
}