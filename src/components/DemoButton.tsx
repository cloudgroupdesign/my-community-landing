"use client";

export default function DemoButton({ className, style, children }: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
