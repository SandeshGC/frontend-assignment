import Image from "next/image"
import Link from "next/link"
import React, { use } from "react"

type Props = {
	params: {
		albumId: string
	}
}

const getAlbumMetadata: any = async (id: string) => {
	const url: string = `https://spotify81.p.rapidapi.com/album_metadata?id=${id}`
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
		return result?.data?.album
	} catch (error) {
		console.error(error)
	}
}

const page = (props: Props) => {
	const data = use<any>(
		getAlbumMetadata(props.params.albumId)
	)

	const { name, coverArt, artists, tracks, date, label, moreAlbumsByArtist } = data

	const artistsDetails = artists?.items?.map((artist: any) => ({
		artistId: artist?.id,
		artistName: artist?.profile?.name,
		artistAvatar: artist?.visuals?.avatarImage.sources[0]?.url,
	}))

	return (
		<div className="container mx-auto p-4">
			<div className="my-4 flex gap-8 items-start">
				<div className="w-3/6 h-full aspect-square max-w-[500px] relative object-cover rounded-lg">
					<div className="h-full relative">
						<Image
							alt={name}
							fill={true}
							src={coverArt?.sources[0].url}
							unoptimized
							className="shadow object-cover aspect-square h-full rounded-lg"
						/>
					</div>
				</div>
				<div className="w-3/6">
					<h1 className="text-3xl font-semibold">{name} </h1>
					<h2 className="text-2xl font-semibold text-gray-500 gap-2 flex">
						by
						{artistsDetails?.map((artist: any) => (
							<span key={artist.artistId}>{artist.artistName}</span>
						))}
					</h2>

					<p className="">
						Released on: {new Date(date?.isoString).getFullYear()}
					</p>

					<p>{label}</p>
				</div>
			</div>

			<div className="my-4">
				<h2 className="text-2xl font-semibold leading-loose my-8">
					More Albums by{" "}
					{artistsDetails?.map((a: any) => (
						<span key={a.artistId} className="mx-2">
							{a.artistName}
						</span>
					))}
				</h2>

				<div className="grid grid-cols-3 gap-12">
					{moreAlbumsByArtist?.items[0]?.discography?.popularReleases?.items?.map(
						(item: any) => {
							const id = item?.releases?.items[0]?.id

							if (id === props.params.albumId) return

							const name = item?.releases?.items[0]?.name
							const year = item?.releases?.items[0]?.date?.year
							const coverArt =
								item?.releases?.items[0]?.coverArt?.sources[0]?.url
							return (
								<Link href={`/albums/${id}`} key={id}>
									<div className="flex gap-6 shadow-md border hover:shadow-lg rounded-md group">
										<div className="grid grid-cols-9 gap-8 items-start group ">
											<div className="h-[200px] col-start-1 col-end-5 overflow-hidden relative group">
												<Image
													src={coverArt}
													width={200}
													height={200}
													alt={name}
													unoptimized
													className="group-hover:scale-110 shadow-md rounded-tl-md rounded-bl-md h-[200px] w-[200px] object-cover duration-300 transition-all ease-in-out "
												/>
											</div>
											<div className="col-start-5 col-end-10 p-4">
												<h1 className="text-xl font-semibold">{name}</h1>
												<p className="text-gray-400 text-sm">{year}</p>
											</div>
										</div>
									</div>
								</Link>
							)
						}
					)}
				</div>
			</div>
		</div>
	)
}

export default page
