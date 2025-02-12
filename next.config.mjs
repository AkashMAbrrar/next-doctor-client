/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co", // Add any other domains here
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Google's image domain
      },
    ],
  },
};

export default nextConfig;

// remotePatterns: [
//   {
//     protocol: "https",
//     hostname: "",
//   },
//   {
//     protocol: "https",
//     domains: ["lh3.googleusercontent.com"],
//   },
// ],
