module.exports = {
  theme: {
    extend: {
      fontFamily: {
        Ray: ['Ray', 'sans-serif'],
      },
    },
    plugins: [
      require('@tailwindcss/forms'), // اگر استفاده می‌کنید
      require('@tailwindcss/filters'), // برای فعال‌سازی فیلترها
    ],
    corePlugins: {
      filter: true, // فعال کردن فیلترهای CSS
    },
  },
}
