import AlbumCardMd from "@/app/components/AlbumCardMd"
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

const getAlbumTracks = async (id: string) => {
	const url: string = `https://spotify117.p.rapidapi.com/get_album_tracks/?album_id=${id}`
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
		return result.items
	} catch (error) {
		console.error(error)
	}
}

const EachAlbumPage = (props: Props) => {
	const data = use<any>(getAlbumMetadata(props.params.albumId))

	const { name, coverArt, artists, date, label, moreAlbumsByArtist } = data

	const tracks = use<any>(getAlbumTracks(props.params.albumId))

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
					<h1 className="text-3xl font-bold">{name} </h1>
					<h2 className="text-xl font-semibold text-gray-500 gap-2 flex">
						by
						{artistsDetails?.map((artist: any) => (
							<span key={artist.artistId}>{artist.artistName}</span>
						))}
					</h2>

					<p className="">
						Released on: {new Date(date?.isoString).getFullYear()}
					</p>

					<p>{label}</p>

					<div>
						Tracks:
						{tracks.map((t: any) => (
							<li key={t?.id} className="text-gray-500 indent-4 list-disc">
								{t?.name}
							</li>
						))}
					</div>
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
									<AlbumCardMd name={name} year={year} coverArt={coverArt} />
								</Link>
							)
						}
					)}
				</div>
			</div>
		</div>
	)
}

export default EachAlbumPage
