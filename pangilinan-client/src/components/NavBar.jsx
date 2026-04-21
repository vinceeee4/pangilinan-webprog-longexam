import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-pink-500 bg-pink-500 text-white'
      : 'border-transparent text-white hover:border-pink-500 hover:bg-black hover:text-pink-500',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-pink-500 bg-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="BulldogEx" className="h-9 w-9 rounded-full border-2 border-pink-500 bg-white object-contain" />
          <div className="space-y-0.5">
            <p className="text-xl font-bold text-white">BulldogEx Shop</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
          <div className="ml-4 flex items-center gap-2">
            <NavLink to="/auth/signin" className="rounded-full border-2 border-pink-500 bg-pink-500 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-white hover:text-pink-500">
              Sign In
            </NavLink>
            <NavLink to="/auth/signup" className="rounded-full border-2 border-white bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-pink-500 hover:text-white hover:border-pink-500">
              Sign Up
            </NavLink>
          </div>
        </nav>  
      </div>
    </header>
  );
};

export default NavBar;
