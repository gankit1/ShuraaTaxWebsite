export default function Card({
  children,
  className = "",
  hover = true,
  ...props
}) {
  const baseClasses = "bg-white rounded-xl shadow-lg overflow-hidden";
  const hoverClasses = hover
    ? "hover:shadow-xl transition-all duration-300"
    : "";

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`} {...props}>
      {children}
    </div>
  );
}
