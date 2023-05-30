import { use } from "react"
import { HomeAlbumCard } from "./components"
import Link from "next/link"

const getAlbums = async () => {
	const url = "https://spotify117.p.rapidapi.com/new_releases/?country=us"
	const options: any = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
			"X-RapidAPI-Host": "spotify117.p.rapidapi.com",
		},
	}

	try {
		const response = await fetch(url, options)
		const result = await response.json()
		return result
	} catch (error) {
		console.error(error)
	}
}

export default function Home() {
	const { albums } = use<any>(getAlbums())
	return (
		<div className={`container mx-auto p-4`}>
			{/* <div>
				<h1 className="text-3xl font-semibold leading-loose">
					Trending Albums
				</h1>
				<Image
					src="/album1.jpg"
					width={1280}
					height={200}
					alt="Album 1"
					className="border-2 border-red-600 object-cover"
				/>
			</div> */}

			<h2 className="text-3xl font-semibold leading-loose">New Releases</h2>
			<div className="my-4 grid grid-cols-1 md:grid-cols-3 items-start align-middle object-contain gap-8">
				{albums?.items?.length ? (
					albums?.items?.map((album: any) => (
						<Link key={album.id} href={`/albums/${album.id}`}>
							<HomeAlbumCard album={album} />
						</Link>
					))
				) : (
					<p>No albums found!</p>
				)}
			</div>
		</div>
	)
}
