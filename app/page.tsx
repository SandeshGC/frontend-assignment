import Image from "next/image"
import { use } from "react"
import { HomeAlbumCard } from "./components"
import Link from "next/link"

const getAlbums = async () => {
	const url =
		"https://spotify-data.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv,1DF9B2hfwX4EdgEFwGcRwh,1m8eXQqp3QCQyR56fgbm6o,2yuQqhSklmfWgn8lmJNk5t,4XLPYMERZZaBzkJg0mkdvO,1MmVkhiwTH0BkNOU3nw5d3,4OanbmuJAWz8JPVE4cJA9L,21jF5jlMtzo94wbxmJ18aa,3AvPX1B1HiFROvYjLb5Qwi,59ULskOkBMij4zL8pS7mi0,224jZ4sUX7OhAuMwaxp86S"

	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "124269de65msh0e569bd15ba79eap1faf4ajsn57ec2ae1e519",
			"X-RapidAPI-Host": "spotify-data.p.rapidapi.com",
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
		<div className="container mx-auto p-4">
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

			<div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* <h2 className="text-2xl font-semibold leading-loose">Other Albums</h2> */}
				{albums.length ? (
					albums?.map((album: any) => (
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
