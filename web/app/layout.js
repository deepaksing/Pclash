export const metadata = {
  title: "Pclash",
  description: "Online Pokemon Card Game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
