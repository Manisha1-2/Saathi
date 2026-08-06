const Loader = ({ size = 'md', className = '' }) => {
  const sizeMap = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizeMap[size]} border-3 border-cream-300 border-t-gold-500 rounded-full animate-spin`}
      />
    </div>
  );
};

export const PageLoader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-cream-50">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-3 border-cream-300 border-t-gold-500 rounded-full animate-spin" />
      <p className="text-navy-900 font-[family-name:var(--font-heading)] text-lg tracking-wider">
        Loading...
      </p>
    </div>
  </div>
);

export default Loader;
