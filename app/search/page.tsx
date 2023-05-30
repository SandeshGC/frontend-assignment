"use client"

import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import React, { use, useEffect, useState } from "react"

type Props = {}

const searchAlbums = async (query: string) => {
	const queryString: any = new URLSearchParams({
		q: query,
		type: "albums",
		offset: "0",
		limit: "20",
		numberOfTopResults: "5",
	})

	const url: string = `https://spotify81.p.rapidapi.com/search?${queryString}`

	const options: any = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
			"X-RapidAPI-Host": "spotify81.p.rapidapi.com",
		},
	}

	try {
		const response = await fetch(url, options)
		const result = await response.json()
		const formattedSearchResults = result?.albums?.items?.map((i: any) => ({
			id: i.data.uri.split("album:")[1],
			name: i.data.name,
			artists: i.data.artists.items.map((a: any) => a.profile.name),
			coverArt: i.data.coverArt.sources[0].url,
			date: i.data.date,
		}))

		return formattedSearchResults
	} catch (error) {
		console.error(error)
	}
}

const SearchResultsPage = (props: Props) => {
	const [albums, setAlbums] = useState([])
	const searchParams: any = useSearchParams()
	const query: any = searchParams.toString().replace("query=", "")
	const queryText = searchParams.get("query")

	useEffect(() => {
		const getAlbums = async () => {
			const albums = await searchAlbums(query)
			setAlbums(albums)
		}
		getAlbums()
	}, [query])
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl my-4">
				Search Results for &quot;{queryText}&quot;
			</h1>

			<div className="grid grid-flow-row grid-cols-2 gap-x-8">
				{albums.map((album: any) => (
					<Link
						key={album.id}
						href={`/albums/${album.id}`}
						className="shadow hover:shadow-md group border-2 my-4 p-4 rounded-lg duration-300 transition ease-in-out"
					>
						<div className="flex my-4 group">
							<Image
								src={album.coverArt}
								className="rounded"
								alt={album.name}
								width={96}
								height={96}
								unoptimized
							/>
							<div className="ml-4 group">
								<h2 className="text-xl group-hover:text-highlight">
									{album.name}
								</h2>
								<h3 className="text-gray-500">{album.artists.join(", ")}</h3>
								<h3 className="text-gray-500">{album.date.year}</h3>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default SearchResultsPage
