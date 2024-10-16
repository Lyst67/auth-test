import Button from "@/app/components/button";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="h-[80vh] text-center p-10 space-y-10">
			<h2 className="text-3xl">The page does not exist</h2>
			<p>The requested resource could not be found</p>
			<div className="inline-block">
				<Link href="/">
					<Button>Back Home</Button>
				</Link>
			</div>
		</div>
	);
}
