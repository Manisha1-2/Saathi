"use client";

import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-gold-500 text-navy-900 hover:bg-gold-600 shadow-lg shadow-gold-500/20',
  secondary:
    'bg-navy-900 text-white hover:bg-navy-800 shadow-lg shadow-navy-900/20',
  outline:
    'border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-900',
  outlineWhite:
    'border-2 border-white text-white hover:bg-white hover:text-navy-900',
  ghost: 'text-gold-500 hover:bg-gold-50',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  ...props
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`
        inline-flex items-center justify-center gap-2 rounded-sm font-medium
        tracking-wide transition-all duration-300 cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        font-[family-name:var(--font-body)]
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {children}
    </motion.button>
  );
};

export default Button;
