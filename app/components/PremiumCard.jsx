import theme from "../theme/theme";

export default function PremiumCard({
  children,
  style = {},
  onClick,
  className = "",
}) {
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        background: theme.colors.card,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.radius.lg,
        boxShadow: theme.shadows.premium,
        padding: "24px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
