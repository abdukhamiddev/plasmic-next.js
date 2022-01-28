import Script from "next/script";

import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../plasmic-init";

export default function PlasmicHost() {
	return (
		PLASMIC && (
			<div>
				<Script
					src="https://static1.plasmic.app/preamble.js"
					strategy="beforeInteractive"
				/>
				<PlasmicCanvasHost />
			</div>
		)
	);
}