import { Footer, Header } from "./containers"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} flex flex-col`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
