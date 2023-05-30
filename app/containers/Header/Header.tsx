import { SearchBar } from "@/app/components"
import Image from "next/image"
import Link from "next/link"
import React from "react"

type Props = {}

const Header = (props: Props) => {
	return (
		<div className="bg-white shadow-md">
			<div
				className={
					"flex items-center gap-2 justify-between container px-2 py-4 mx-auto"
				}
			>
				<Link href={"/"} className="flex items-center gap-2">
					<Image
						src={"/icon-a.png"}
						width={50}
						height={50}
						alt="Logo for Music World"
						priority
					/>
					<h1 className="tracking-wider uppercase font-bold text-highlight">
						Music World
					</h1>
				</Link>

				<div>
					<SearchBar />
				</div>
			</div>
		</div>
	)
}

export default Header
