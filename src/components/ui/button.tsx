import { type ComponentProps } from "react";

type ButtonVariant = "primary" | "outline" | "red" | "blue";

interface ButtonProps extends ComponentProps<"a"> {
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-white text-black hover:bg-neutral-200",
  outline: "border border-white/30 text-white hover:bg-white/10",
  red: "bg-[#E84D2E] text-white hover:bg-[#d4432a]",
  blue: "bg-[#3B8BD0] text-white hover:bg-[#3580c0]",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-block rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
