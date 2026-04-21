import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="border-t-2 border-pink-500 bg-black px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold text-white">BulldogEx Shop</p>
            <p className="mt-1 text-sm text-gray-400">Campus essentials, simple ordering.</p>
            <p className="mt-4 text-sm text-gray-500">
              Your go-to store for all things campus life. From study aids to daily comforts, we've got you covered.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pink-500">Shop</p>
            <ul className="mt-4 space-y-2">
              <li><NavLink to="/products" className="text-sm text-gray-400 hover:text-pink-500">All Products</NavLink></li>
              <li><NavLink to="/products?category=Bags" className="text-sm text-gray-400 hover:text-pink-500">Bags</NavLink></li>
              <li><NavLink to="/products?category=Stationery" className="text-sm text-gray-400 hover:text-pink-500">Lanyards</NavLink></li>
              <li><NavLink to="/products?category=Tech" className="text-sm text-gray-400 hover:text-pink-500">Clothes</NavLink></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pink-500">Support</p>
            <ul className="mt-4 space-y-2">
              <li><NavLink to="/about" className="text-sm text-gray-400 hover:text-pink-500">About Us</NavLink></li>
              <li><a href="mailto:support@bulldogex.com" className="text-sm text-gray-400 hover:text-pink-500">Contact</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-pink-500">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pink-500">Account</p>
            <ul className="mt-4 space-y-2">
              <li><NavLink to="/auth/signin" className="text-sm text-gray-400 hover:text-pink-500">Sign In</NavLink></li>
              <li><NavLink to="/auth/signup" className="text-sm text-gray-400 hover:text-pink-500">Sign Up</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500">
            © 2026 BulldogEx Shop. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
