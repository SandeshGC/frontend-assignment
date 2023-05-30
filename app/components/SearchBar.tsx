"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

type Props = {}

const SearchBar = (props: Props) => {
	const [query, setQuery] = useState("")

	const { push } = useRouter()
	const handleSearch = async () => {
		const queryString = new URLSearchParams({ query })
		push("/search?" + queryString)
		setQuery("")
	}

	return (
		<label htmlFor="search" className="flex relative">
			<input
				type="text"
				placeholder="Search for albums..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				id="search"
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						handleSearch()
					}
				}}
				className="border-2 border-gray-300 rounded-lg p-2 focus:outline-highlight"
			/>

			<div
				onClick={handleSearch}
				className="absolute right-2 top-2 text-gray-500 cursor-pointer"
			>
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
	)
}

export default SearchBar
