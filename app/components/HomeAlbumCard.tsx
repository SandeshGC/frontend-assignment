import Image from "next/image"
import React from "react"

type Props = {
	album: any
}

const HomeAlbumCard = ({ album }: Props) => {
	return (
		<div className="shadow my-4 p-4 max-w-[400px] rounded-lg border hover:shadow-lg group transition duration-500 ease-in-out">
			<div className="relative h-[350px] w-full mx-auto group mb-4 rounded-md overflow-hidden">
				<Image
					src={album?.images[0].url}
					fill={true}
					alt={album.name}
					className="rounded-md object-contain aspect-square h-[350px] w-full group-hover:scale-110 group-hover:opacity-80 transition duration-500 ease-in-out"
					unoptimized
				/>
			</div>

			<div className="group">
				<h1 className="font-bold inline text-2xl leading-relaxed group-hover:text-highlight duration-300 transition ease-in-out">
					{album.name}
				</h1>
				<h6 className="text-xs text-gray-500">{album.label}</h6>
				<h2>
					Artists:{" "}
					{album?.artists?.map((artist: any) => (
						<span key={artist.id} className="mr-2">
							{artist.name}
						</span>
					))}
				</h2>
				<p>
					Genre:{" "}
					{album?.genres?.length ? (
						<span
							className="bg-gray-400 text-white px-3 rounded-full py-1 text-sm
					"
						>
							Pop
						</span>
					) : (
						<span className="text-gray-400">-</span>
					)}
				</p>
				<p>Year: {new Date(album.release_date).getFullYear()}</p>
			</div>
		</div>
	)
}

export default HomeAlbumCard
