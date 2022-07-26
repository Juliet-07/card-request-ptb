/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

module.exports = {
  env: {
    MYSQL_HOST: "192.168.207.8",
    MYSQL_PORT: "443",
    MYSQL_DATABASE: { PRYME },
    MYSQL_USER: { Pryme },
    MYSQL_PASSWORD: "Guff@VenusPro442!",
  },
};
