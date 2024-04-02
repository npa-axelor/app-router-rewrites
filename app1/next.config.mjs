/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/app2",
        destination: `http://localhost:3001/app2`,
      },{
        source:'/company',
        destination:'/about'
      }
    ];
  },
};

export default nextConfig;
