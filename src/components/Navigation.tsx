import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 text-white p-4 z-50 flex justify-between items-center backdrop-blur-sm">
      <div className="font-bold text-xl">
        <Link href="/">Dojo</Link>
      </div>
      <ul className="flex gap-4">
        <li><Link href="/about" className="hover:text-amber-400">Sobre (Espelho)</Link></li>
        <li><Link href="/projects" className="hover:text-amber-400">Projetos (Pergaminhos)</Link></li>
        <li><Link href="/contact" className="hover:text-amber-400">Contato</Link></li>
      </ul>
    </nav>
  );
}
