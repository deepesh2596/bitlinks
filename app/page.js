import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";


const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-2xl font-bold ${poppins.className}`}>
            Effortless link sharing with the best URL shortener.
          </p>
          <p className="px-9 text-center">
            Simplify your links and make sharing easier than ever. Our tool is designed to streamline your online presence, allowing you to transform long URLs into concise, memorable links that are perfect for any platform.
          </p>
          <div className='flex gap-3 justify-center'>
            <Link href="/shorten"><button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg p-3 py-1 text-center'>Try Now</button></Link>
            <Link href="/github"><button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg p-3 py-1 text-center'>GitHub</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="vector.jpg" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
      <div className="bg-slate-950 h-1 opacity-10 mx-20"></div>

      <section className="bg-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

            {/* <!-- Card 1 --> */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
              <div className="flex justify-center mb-4">
                <i className="fas fa-link text-5xl text-purple-950"></i>
              </div>
              <h3 className="text-xl font-semibold text-purple-950 text-center mb-3">Shorten URLs</h3>
              <p className="text-gray-700 text-center">Easily shorten long URLs to share them with others. Fast, secure, and efficient!</p>
            </div>

            {/* <!-- Card 2 --> */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
              <div className="flex justify-center mb-4">
                <i className="fas fa-chart-line text-5xl text-purple-950"></i>
              </div>
              <h3 className="text-xl font-semibold text-purple-950 text-center mb-3">Track Links</h3>
              <p className="text-gray-700 text-center">Monitor the performance of your links with detailed analytics and insights.</p>
            </div>

            {/* <!-- Card 3 --> */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
              <div className="flex justify-center mb-4">
                <i className="fas fa-cogs text-5xl text-purple-950"></i>
              </div>
              <h3 className="text-xl font-semibold text-purple-950 text-center mb-3">Customizable Links</h3>
              <p className="text-gray-700 text-center">Create personalized short URLs that reflect your brand and make them memorable.</p>
            </div>

          </div>
        </div>
      </section>


    </main>
  );
}
