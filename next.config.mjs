/** @type {import('next').NextConfig} */

const state = process.env.NODE_ENV === "production";

const nextConfig = {
  /* config options here */
  output: "export",
  images: { unoptimized: !state },
  basePath: state ? "/FUTURE_FS_3" : "",
  assetPrefix: state ? "/FUTURE_FS_3" : "",
};

export default nextConfig;
