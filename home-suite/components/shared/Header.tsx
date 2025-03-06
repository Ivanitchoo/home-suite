import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";

const Header = () => {
	return (
		<header className="w-full h-12 border-b bg-gradient-to-r from-gray-100 to-gray-300 px-8">
			<div className="wrapper flex h-full w-full items-center">
				{/* Logo Section (Left-Aligned) */}
				<div className="flex items-center pt-5.5">
					<Link href="/" className="w-32">
						<Image
							src="/assets/icons/logo.png"
							width={90}
							height={25}
							alt="Home Suite logo"
						/>
					</Link>
				</div>

				<SignedIn>
					<nav className="flex justify-center w-full">
						<NavItems />
					</nav>
				</SignedIn>

				{/* Login Button (Right-Aligned) */}
				<div className="flex w-full justify-end gap-3">
					<SignedIn>
						<UserButton />
					</SignedIn>
					<SignedOut>
						<SignInButton>
							<Button className="rounded-full x-4 py-1 text-sm bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
								<Link href="/sign-in">Login</Link>
							</Button>
						</SignInButton>
					</SignedOut>
				</div>
			</div>
		</header>
	);
};

export default Header;
