import { useRouter } from 'next/router';
import {
    HomeIcon,
    DocumentDuplicateIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function NavLinks() {
  const router = useRouter(); // Get the current router

  // Define the links array with updated paths
  const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    { name: 'Invoices', href: 'dashboard/invoices', icon: UserGroupIcon },
    { name: 'Customers', href: 'dashboard/customers', icon: DocumentDuplicateIcon },
  ];

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        // Check if the current path matches the link's href
        const isActive = router.pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3
              ${isActive ? 'bg-sky-100 text-blue-600' : 'bg-gray-50 text-gray-600'} 
              hover:bg-sky-100 hover:text-blue-600`}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
