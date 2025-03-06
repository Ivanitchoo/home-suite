import {headerLinks} from '@/constants'
import Link from 'next/link';


 const NavItems = () => {
    return (


        <ul className='md:flex-between flex w-full flex-col items-start gap-5 md:flex-row'>
            {headerLinks.map((link) => (
                <li key={link.route} className='flex-center p-medium-16 whitespace-nowrap'>
                    <Link href={link.route}> {link.label} </Link>
                </li>
            ))}
        </ul>
    );
};


export default NavItems;