import Image from "next/image"
import React from "react"

type Props = {
	album: any
}

const HomeAlbumCard = ({ album }: Props) => {
	console.log(album?.images, "img")
	return (
		<div className="shadow my-4 px-4 py-2 rounded-md">
			{/* <Image
				src={album?.images[0].url}
				width={250}
				height={250}
				alt={album.name}
				className="border-2 border-red-600"
			/> */}
			<img
				src={album?.images[0].url}
				width={250}
				height={250}
				alt={album.name}
				className="border-2 rounded-md"
			/>
			<h1 className="font-bold text-2xl">{album.name}</h1>
			<h6 className="text-xs text-gray-500">{album.label}</h6>
			<h2>
				Artists:{" "}
				{album?.artists?.map((artist: any) => (
					<span key={artist.id}>{artist.name}</span>
				))}
			</h2>
			{album?.genres?.length ? (
				<p>
					Genre:{" "}
					<span
						className="bg-gray-400 text-white px-3 rounded-full py-1 text-sm
    "
					>
						Pop
					</span>
				</p>
			) : (
				<p>No Genre Specified</p>
			)}
			<p>Release date: {album.release_date}</p>
		</div>
	)
}

export default HomeAlbumCard
