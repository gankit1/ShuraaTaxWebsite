import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl",
  secondary:
    "bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600",
  outline:
    "bg-transparent hover:bg-primary-50 text-primary-600 border border-primary-600",
  ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  loading = false,
  onClick,
  type = "button",
  ...props
}) {
  const baseClasses =
    "font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      {...props}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {children}
    </motion.button>
  );
}
