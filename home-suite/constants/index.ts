{
	/* 
  *   This is just a file that has an array with some objects labels 
      and their respective routes
*/
}

import {
	FaPhone,
	FaEnvelope,
	FaMapMarkerAlt,
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";

//links do header
export const headerLinks = [
	{
		label: "Home",
		route: "/",
	},
	{
		label: "Dashboard",
		route: "/dashboard",
	},
	{
		label: "Finances",
		route: "/finances",
	},
	{
		label: "Records",
		route: "/records",
	},
	{
		label: "Maintenance",
		route: "/maintenance",
	},
];

//links do footer
export const footerLinks = [
	{
		label: "Portal Residencial",
		route: "/sign-in",
	},
	{
		label: "Portfólio",
		route: "/portfolio",
	},
	{
		label: "FAQ",
		route: "/faq",
	},
	{
		label: "Anunciar no Home Suite",
		route: "/advertise",
	},
	{
		label: "Sobre Nós",
		route: "/about",
	},
	{
		label: "Política de Privacidade",
		route: "/privacy",
	},
	{
		label: "Termos do serviço",
		route: "/termsofservice",
	},
	{
		label: "Declaração de acessibilidade",
		route: "/accessibility",
	},
];

//socialmedia links
export const socialLinks = [
	{ Icon: FaFacebookF, label: "Facebook", route: "/facebook" },
	{ Icon: FaInstagram, label: "Instagram", route: "/instagram" },
	{ Icon: FaLinkedinIn, label: "LinkedIn", route: "/linkedin" },
	{ Icon: FaTwitter, label: "Twitter", route: "/twitter" },
];
