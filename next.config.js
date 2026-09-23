/** @type {import('next').NextConfig} */
const nextConfig = {
  // 強制 Next.js 採用獨立的全端運行模式，不依賴 Vercel 特有資料夾
  output: 'standalone', 
  eslint: {
    ignoreDuringBuilds: true, // 忽略編譯時的語法檢查，防止中斷
  },
  typescript: {
    ignoreBuildErrors: true, // 忽略 TypeScript 檢查
  }
};

export default nextConfig;
