import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import {
	ClerkProvider,
	SignInButton,
	SignUpButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/nextjs";

const poppins = Poppins({
	subsets: ["latin"],
	variable: "--font-poppins",
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "HomeSuite",
	description: "Condo Management App",
	icons: { icon: "/assets/icons/logo.png" },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={`${poppins.className}`}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
