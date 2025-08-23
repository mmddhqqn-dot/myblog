/** @type {import('next').NextConfig} */
const nextConfig = {
  // تنظیمات برای deployment
  output: "standalone", // برای Docker و هاست‌های سنتی
  trailingSlash: true, // برای سازگاری بهتر با هاست‌ها
  images: {
    unoptimized: true, // برای هاست‌هایی که image optimization ندارند
  },
  // تنظیمات برای SEO
  generateEtags: false,
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
