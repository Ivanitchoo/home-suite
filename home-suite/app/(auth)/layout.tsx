const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex justify-center pt-10 min-h-screen w-full bg-slate-400 bg-cover bg-fixed bg-center">
			{children}
		</div>
	);
};

export default Layout;
