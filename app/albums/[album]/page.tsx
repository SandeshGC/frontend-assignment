import Image from "next/image"
import React from "react"

type Props = {
	params: {
		album: number
	}
}

const page = (props: Props) => {
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-semibold">
				Bimbaakash {props.params.album}
			</h1>
			<div className="my-4 flex gap-8 items-start">
				<Image
					src="/album1.jpg"
					width={500}
					height={500}
					alt="Album 1"
					className="w-2/5 border-2 border-red-600 object-cover rounded-lg"
				/>

				<div className="w-3/5">
					<h2 className="text-2xl font-semibold">Author: Bartika Eam Rai</h2>
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
						<Image
							src="/album1.jpg"
							width={200}
							height={200}
							alt="Album 1"
							className="border-2 border-red-600 rounded-lg"
						/>
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
						<Image
							src="/album1.jpg"
							width={200}
							height={200}
							alt="Album 1"
							className="border-2 border-red-600 rounded-lg"
						/>
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
