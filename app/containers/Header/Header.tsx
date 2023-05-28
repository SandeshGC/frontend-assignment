import Image from "next/image"
import Link from "next/link"
import React from "react"

type Props = {}

const Header = (props: Props) => {
	return (
		<div className="bg-white shadow-md">
			<div
				className={
					"flex items-center gap-2 justify-between container p-2 mx-auto"
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
					<label htmlFor="search" className="flex relative">
						<input
							type="text"
							placeholder="Search..."
							id="search"
							className="border-2 border-gray-300 rounded-lg p-2 "
						/>
						<div className="absolute right-2 top-2 text-gray-500 cursor-pointer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
								/>
							</svg>
						</div>
					</label>
				</div>
			</div>
		</div>
	)
}

export default Header
