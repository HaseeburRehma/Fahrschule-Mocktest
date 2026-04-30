// The root layout exists only to satisfy the App Router contract;
// real metadata + html/body lives in the [locale] layout.
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
