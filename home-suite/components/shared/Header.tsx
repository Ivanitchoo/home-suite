"use client";

import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<header className="w-full bg-gradient-to-r from-gray-100 to-gray-300">
			<div className="wrapper flex items-center justify-between">
				{/* Logo Section (Left-Aligned) */}
				<Link href="/" className="w-32">
					<Image
						src="/assets/icons/logo.png"
						width={62}
						height={12}
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
					<button
						onClick={() => setDarkMode(!darkMode)}
						className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 hover:cursor-pointer"
						aria-label="Toggle dark mode"
					>
						{darkMode ? (
							<IoSunnyOutline size={24} />
						) : (
							<IoMoonOutline size={24} />
						)}
					</button>
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
