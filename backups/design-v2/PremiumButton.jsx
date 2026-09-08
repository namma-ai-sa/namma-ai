export default function PremiumButton({
  children,
  style = {},
  ...props
}) {
  return (
    <button
      {...props}
      style={{
        background: "#22c55e",
        color: "white",
        border: "none",
        borderRadius: "16px",
        padding: "14px 20px",
        fontWeight: "700",
        cursor: "pointer",
        transition: "all .25s ease",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
