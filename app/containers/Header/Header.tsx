import Link from "next/link"
import React from "react"
// import { Inter } from "next/font/google"

// const inter = Inter({ subsets: ["latin"] })

type Props = {}

const Header = (props: Props) => {
	return (
		<div className={""}>
			<Link href={"/"}>
				<h1 className="tracking-wider uppercase font-bold">Music World</h1>
			</Link>
		</div>
	)
}

export default Header
