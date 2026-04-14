import Image from "next/image";

export function Logo({ className = "h-15 w-50" }: { className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <Image
        src="/image.png"
        alt="Ktalisys"
        fill
        className="object-contain"
        sizes="70px"
        priority
      />
    </span>
  );
}
