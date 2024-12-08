import Head from 'next/head';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>My Account - Login</title>
      </Head>
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <p className="text-sm text-center text-gray-500">
          Please log in using your email address.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-pink-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-pink-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-pink-500 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
          >
            Sign In
          </button>
          <p className="text-sm text-center text-gray-500">
            <a href="#" className="text-pink-500 hover:underline">
              Forgot your password?
            </a>
          </p>
          <p className="text-sm text-center text-gray-500">
            Don't have an account?{' '}
            <a href="#" className="text-pink-500 hover:underline">
              Create an account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;