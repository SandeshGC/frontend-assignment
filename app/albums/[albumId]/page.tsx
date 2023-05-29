import Image from "next/image"
import React, { use } from "react"

type Props = {
	params: {
		albumId: string
	}
}

const getAlbumDetails = async (id: string) => {
	const url: string = `https://spotify-data.p.rapidapi.com/album_metadata/?id=${id}`
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
			"X-RapidAPI-Host": "spotify-data.p.rapidapi.com",
		},
	}

	try {
		const response = await fetch(url, options)
		const result = await response.json()
		return result.data
	} catch (error) {
		console.error(error)
	}
}

const page = (props: Props) => {
	const { album } = use(getAlbumDetails(props.params.albumId))
	const artists = album.artists?.items.map(
		(artist: { profile: { name: string } }) => artist.profile.name
	)
	return (
		<div className="container mx-auto p-4">
			<div className="my-4 flex gap-8 items-start">
				<div className="w-3/6 h-[500px] max-w-[500px] relative object-cover rounded-lg">
					<Image
						alt={album.name}
						fill={true}
						priority
						src={album.coverArt.sources[0].url}
						sizes="(min-width: 60em) 24vw,
						(min-width: 28em) 45vw,
						100vw"
						unoptimized
						className="shadow object-cover rounded-lg"
					/>
				</div>
				<div className="w-3/6">
					<h1 className="text-3xl font-semibold">{album.name}</h1>
					<h2 className="text-2xl font-semibold text-gray-500 gap-2 flex">
						{artists?.map((artist: string) => (
							<span key={artist}>{artist}</span>
						))}
					</h2>
					<p className="text-xl">Released on: 2016</p>
					<p className="text-xl">Genre: Pop</p>
					<p className="text-xl">Rating: 4.5/5</p>

					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique,
						totam voluptatibus, eligendi doloremque aut voluptatum dolorum
						consequuntur mollitia nesciunt animi vitae, illo quis dolorem quasi
						sint commodi quo possimus quas?
					</p>
				</div>
			</div>

			<div className="my-4">
				<h2 className="text-2xl font-semibold leading-loose">Other Albums</h2>
				<div className="flex gap-6">
					<div className="flex gap-8 items-start">
						{/* <Image
							src="/album1.jpg"
							width={200}
							height={200}
							alt="Album 1"
							className="border-2 border-red-600 rounded-lg"
						/> */}
						<div>
							<h1 className="text-xl font-semibold">Bimbaakash</h1>
							<h2 className="text-lg">Author: Bartika Eam Rai</h2>
							<p>
								Genre:{" "}
								<span
									className="bg-gray-400 text-white px-3 rounded-full py-1 text-sm
								"
								>
									Pop
								</span>
							</p>
						</div>
					</div>
					<div className="flex gap-8 items-start">
						{/* <Image
							src="/album1.jpg"
							width={200}
							height={200}
							alt="Album 1"
							className="border-2 border-red-600 rounded-lg"
						/> */}
						<div>
							<h1 className="text-xl font-semibold">Bimbaakash</h1>
							<h2 className="text-lg">Author: Bartika Eam Rai</h2>
							<p>
								Genre:{" "}
								<span
									className="bg-gray-400 text-white px-3 rounded-full py-1 text-sm
								"
								>
									Pop
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default page
