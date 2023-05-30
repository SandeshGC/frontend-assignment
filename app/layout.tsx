import Head from "next/head"
import { Footer, Header } from "./containers"
import "./globals.css"
import { Inter } from "next/font/google"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Music World | Latest Releases",
	description: "Discover Music Albums",
	icons: [
		{
			url: "/icon-a.png",
			rel: "icon",
			type: "image/x-icon",
		},
	],
}

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
