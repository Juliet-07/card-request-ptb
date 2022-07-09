import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Card Request App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <h1 className="text-3xl font-bold text-center text-white">
            PTB CARD REQUEST PLATFORM
          </h1>
          <div className="w-full p-6 m-auto bg-white border-t border-red-600 rounded shadow-lg shadow-red-800/50 lg:max-w-md">
            <h1 className="text-3xl font-semibold text-center text-red-800">
              LOGO
            </h1>
            <form className="mt-6">
              <div className="mt-4">
                <label htmlFor="email" className="block text-sm text-gray-800">
                  Email
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-800"
                >
                  Password
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-6">
                <Link href="/start-up">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
                    Login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
