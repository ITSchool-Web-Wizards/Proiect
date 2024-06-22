import "./globals.css";

export const metadata = {
  title: "ChatGPT Application",
  description: "Get you math question answered",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}