
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css"
import Header from "./components/Header";
import BootstrapClient from "./components/BootstrapClient";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
		<Header/>
		<BootstrapClient/>
        {children}
      </body>
    </html>
  );
}
