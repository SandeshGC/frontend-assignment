import { Metadata } from "next"
import React from "react"

type Props = {}

export const metadata: Metadata = {
	title: "Album Details",
	description: "",
}

const layout = ({ children }: { children: React.ReactNode }) => {
	return <div>{children}</div>
}

export default layout
