
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import BootstrapClient from "./components/BootstrapClient";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
		<Header/>
		<BootstrapClient/>
        {children}
		<Footer/>
      </body>
    </html>
  );
}
