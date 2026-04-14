export function Logo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 32V8h4v10l10-10h6L17 19l12 13h-6L13 20v12H8z"
        fill="currentColor"
      />
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
