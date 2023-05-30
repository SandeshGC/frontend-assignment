import React from "react"

type Props = {}

const Footer = (props: Props) => {
	return (
		<footer className="mt-auto bg-gray-700 text-gray-50">
			<div className="container mx-auto p-4">
				<div className="row">
					&copy; 2023 - <a href="https://www.gcsandesh.com.np">Sandesh GC</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
