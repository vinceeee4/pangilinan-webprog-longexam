import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-pink-500 bg-black px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-pink-500">
            Error
          </p>
          <h1 className="text-6xl font-bold leading-tight text-white sm:text-7xl">
            404
          </h1>
          <p className="mt-4 text-lg leading-7 text-gray-400">
            Page not found. The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6 flex gap-3">
            <Button to="/">Back Home</Button>
            <Button to="/products">View Products</Button>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-pink-500 bg-black px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-pink-500">
            Quick Links
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Explore the site</h2>
          
          <div className="mt-6 space-y-3">
            <div className="rounded-3xl border-2 border-pink-500 bg-gray-900 p-4">
              <h3 className="font-semibold text-white">Home</h3>
              <p className="mt-1 text-sm text-gray-400">Return to the BulldogEx homepage</p>
              <Button to="/" className="mt-3">Go Home</Button>
            </div>
            
            <div className="rounded-3xl border-2 border-pink-500 bg-gray-900 p-4">
              <h3 className="font-semibold text-white">Products</h3>
              <p className="mt-1 text-sm text-gray-400">Browse all campus essentials</p>
              <Button to="/products" className="mt-3">View Products</Button>
            </div>

            <div className="rounded-3xl border-2 border-pink-500 bg-gray-900 p-4">
              <h3 className="font-semibold text-white">About</h3>
              <p className="mt-1 text-sm text-gray-400">Learn more about BulldogEx Shop</p>
              <Button to="/about" className="mt-3">About Us</Button>
            </div>

            <div className="rounded-3xl border-2 border-pink-500 bg-gray-900 p-4">
              <h3 className="font-semibold text-white">Sign In</h3>
              <p className="mt-1 text-sm text-gray-400">Access your account</p>
              <Button to="/auth/signin" className="mt-3">Sign In</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage
