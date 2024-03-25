const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'res.cloudinary.com'],
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],

  exclude: [
    '/pages/components/Button/ButtonElements.ts',
    '/pages/components/Form/FormElements.ts',
    '/pages/components/Form/FormmElements.ts',
    '/pages/components/Form/InputFieldElements.ts',
    '/pages/helpers/error.ts',
    '/pages/types/',
    '/pages/types/propTypes.ts',
    '/pages/utils/dbUtils/',
  ],
};

module.exports = nextConfig;
