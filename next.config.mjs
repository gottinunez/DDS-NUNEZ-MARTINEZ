/** @type {import('next').NextConfig} */
import createPWA from "next-pwa";
const withPWA = createPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

export default withPWA({
  images: {
    domains: ["picsum.photos"],
  },
});
