import Image from "next/image"

export default function Home() {
	return (
		<div className="container mx-auto p-4">
			<div>
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
			</div>

			<div className="my-4">
				<h2 className="text-2xl font-semibold leading-loose">Other Albums</h2>
				<div>
					<Image
						src="/album1.jpg"
						width={200}
						height={200}
						alt="Album 1"
						className="border-2 border-red-600"
					/>
					<h1>Test Album</h1>
					<h2>Author: Travis Scott</h2>
					<p>
						Genre:{" "}
						<span
							className="bg-gray-400 text-white px-3 rounded-full py-1 text-sm
						"
						>
							Pop
						</span>
					</p>
					<p>Released on: 28 May 2023</p>
				</div>
			</div>
		</div>
	)
}
