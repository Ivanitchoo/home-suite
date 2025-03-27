import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";

const Header = () => {
	return (
		<header className="w-full border-b bg-gradient-to-r from-gray-100 to-gray-300">
			<div className="wrapper flex items-center justify-between">
				{/* Logo Section (Left-Aligned) */}
				<Link href="/" className="w-36">
					<Image
						src="/assets/icons/logo.png"
						width={90}
						height={25}
						alt="Home Suite logo"
					/>
				</Link>

				<SignedIn>
					<nav className="md:flex-between hidden w-full max-w-xs">
						<NavItems />
					</nav>
				</SignedIn>

				{/* Login Button (Right-Aligned) */}
				<div className="flex w-32 justify-end gap-3">
					<SignedIn>
						<UserButton afterSwitchSessionUrl="/" />
					</SignedIn>
					<SignedOut>
						<Button
							asChild
							className="rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
							size="lg"
						>
							<Link href="/sign-in">Login</Link>
						</Button>
					</SignedOut>
				</div>
			</div>
		</header>
	);
};

export default Header;
