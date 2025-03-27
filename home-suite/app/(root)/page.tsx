import { SignIn, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaBullhorn, FaMoneyBillAlt, FaEnvelope } from "react-icons/fa";

export default function Home() {
	return (
		<main>
			{/** Esta é a secção do panfleto e as ecrituras iniciais */}
			<section className="bg-primary-50 bg-contain py-5 md:py-10">
				<div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
					<div className="flex flex-col justify-center gap-2 ml-3">
						<h1 className="text-5xl font-bold text-black text-left leading-12">
							Aplicação de Gestão Eficiente para o Seu Condomínio
						</h1>
						<p className="text-base p-regular-20 md:p-regular-24 text-black text-justify leading-relaxed">
							Oferecemos uma plataforma completa, que une economia e
							praticidade, transformando a forma como os gestores e condóminos
							se conectam.
						</p>
					</div>

					<Image
						src="/assets/images/hero_1.png"
						alt="hero"
						width={1000}
						height={1000}
						className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
					/>
				</div>
			</section>

			<section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
				<div className="wrapper mx-auto mt-12 w-full max-w-4xl px-6 md:px-12">
					<h1 className="text-3xl font-bold text-black text-center leading-12">
						{" "}
						A solução 100% digital que irá revolucionar a administração de
						condomínios
					</h1>
					<p className="text-base p-regular-20 md:p-regular-24 text-black text-center leading-relaxed">
						Chega de dor de cabeça! HomeSuite coloca a gestão do seu condomínio
						no piloto automático, eliminando burocracia, papelada e grupos de
						WhatsApp caóticos.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-6">
					<div className="p-2 bg-gradient-to-r from-gray-300 to-gray-100 rounded-lg transition-all border-2 hover:border-blue-600 hover:shadow-lg duration-500 ease-in-out cursor-pointer flex flex-col items-center justify-between text-justify">
						<FaBullhorn className="rounded-full bg-blue-600 text-white w-14 h-14 p-2 mb-4" />
						<h3 className="font-semibold text-black text-center">
							Comunicação sem stress
						</h3>
						<p className="text-gray-600 text-center text-sm">
							Elimine os avisos em grupos de WhatsApp desorganizados.
							Notificações centralizadas e acessíveis garantem que todos estejam
							sempre informados, com rapidez e eficiência.
						</p>
					</div>

					<div className="p-2 bg-gradient-to-r from-gray-300 to-gray-100 rounded-lg border-2 transition-all hover:border-blue-600 hover:shadow-lg duration-500 ease-in-out cursor-pointer flex flex-col items-center justify-between text-justify">
						<FaMoneyBillAlt className="rounded-full bg-blue-600 text-white w-14 h-14 p-2 mb-4" />
						<h3 className="font-semibold text-black text-center">
							Fique no controle da inadimplência
						</h3>
						<p className="text-gray-600 text-center text-sm">
							Personalize acordos para inadimplentes, escolha o número de
							parcelas desejado e acompanhe o processo de perto, para uma sem
							complicações.
						</p>
					</div>

					<div className="p-2 bg-gradient-to-r from-gray-300 to-gray-100 rounded-lg border-2 transition-all hover:border-blue-600 hover:shadow-lg duration-500 ease-in-out cursor-pointer flex flex-col items-center justify-between text-justify">
						<FaEnvelope className="rounded-full bg-blue-600 text-white w-14 h-14 p-2 mb-4" />
						<h3 className="font-semibold text-black text-center">
							Facturas automáticas e sem erros
						</h3>
						<p className="text-gray-600 text-center text-sm">
							Esqueça as planilhas. As facturas de taxas de condomínio são
							geradas automaticamente, tornando o processo menos moroso, preciso
							e livre de burocracia.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
