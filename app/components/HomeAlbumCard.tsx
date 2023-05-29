import Image from "next/image"
import React from "react"

type Props = {
	album: any
}

const HomeAlbumCard = ({ album }: Props) => {
	// console.log(album?.images[0].url, "img")
	return (
		<div className="shadow-md my-4 p-4 rounded-lg border">
			<div className="relative h-[400px] max-w-[400px] mb-4 rounded-md object-cover">
				<Image
					src={album?.images[0].url}
					fill={true}
					alt={album.name}
					className="rounded-md object-cover"
					unoptimized
				/>
			</div>
			{/* <img
				src={album?.images[0].url}
				width={250}
				height={250}
				alt={album.name}
				className="border-2 rounded-md"
			/> */}
			<div className="">
				<h1 className="font-bold text-2xl leading-relaxed hover:text-highlight duration-300 transition ease-in-out">
					{album.name}
				</h1>
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
		</div>
	)
}

export default HomeAlbumCard
