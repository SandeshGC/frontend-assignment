import Image from "next/image"
import React from "react"

type Props = {
	name: string
	coverArt: string
	year: string
}

const AlbumCardMd = ({ name, year, coverArt }: Props) => {
	return (
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
	)
}

export default AlbumCardMd
