import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-geist-sans", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rajeev Reddy | Robotics Engineer",
  description: "M.S. Robotics candidate with expertise in ML, perception pipelines, ROS2, and autonomous systems.",
  keywords: ["Rajeev Reddy", "Robotics Engineer", "ROS2", "Machine Learning", "Computer Vision", "LiDAR", "PyTorch", "Autonomous Systems"],
  openGraph: {
    title: "Rajeev Reddy | Robotics Engineer",
    description: "M.S. Robotics candidate building intelligent autonomous systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
