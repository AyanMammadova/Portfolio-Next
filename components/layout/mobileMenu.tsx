import Link from 'next/link';
import { IoClose } from 'react-icons/io5';

const MobileMenu = ({ setMenuOpen }: { setMenuOpen: (open: boolean) => void }) => {
  return (
    <div className="">

      <nav className="flex flex-col gap-6 text-xl font-medium">
        <Link href="/contact" className="hover:text-[hsl(var(--primary))] transition">Contact</Link>
        <Link href="/projects" className="hover:text-[hsl(var(--primary))] transition">Projects</Link>
        <Link href="/blogs" className="hover:text-[hsl(var(--primary))] transition">Blogs</Link>
      </nav>
      <IoClose className='absolute top-[20px] right-[20px]  text-[1.5em]' onClick={()=>(setMenuOpen(false))} />
    </div>
  );
};

export default MobileMenu;
