import { Poppins } from "next/font/google";
import ClientCommons from "./ClientCommons";
import "./globals.css";
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";
import { Metadata } from "next";
import ClientWrapper from '../components/ClientWrapper';

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Arinaga Colors - Booking online",
    description: "Booking online & rental online React Next Template",
    keywords: "Chisfis, Booking online, React Next Template",
    viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

export default function RootLayout({
                                       children,
                                       params,
                                   }: {
    children: React.ReactNode;
    params: any;
}) {

    return (
        <html lang="en" className={poppins.className}>
        <body className="bg-custom text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <ClientCommons />
        <ClientWrapper>
            {children}
        </ClientWrapper>
        <Footer />
        </body>
        </html>
    );
}
