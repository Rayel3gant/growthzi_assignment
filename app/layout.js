import { Jost } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/lib/redux/storeProvider";
import { Bounce, ToastContainer } from "react-toastify";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "700"], // Add more weights if needed
});

export const metadata = {
  title: "Growthzi App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.variable} antialiased bg-white`}>
        <StoreProvider>
          {children}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </StoreProvider>
      </body>
    </html>
  );
}
