import Link from 'next/link';

export default function Features() {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header Section */}
            <header className="bg-gray-800 text-white py-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Features of Our URL Shortener</h1>
                    <p className="text-lg mt-2">Discover why our tool is the best choice for your URL shortening needs</p>
                </div>
            </header>

            {/* Features Section */}
            <section className="container mx-auto py-10 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <h2 className="text-2xl font-semibold text-gray-800">Fast URL Shortening</h2>
                        <p className="text-gray-600 mt-2">Shorten your URLs in seconds with our blazing-fast service.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <h2 className="text-2xl font-semibold text-gray-800">Custom URLs</h2>
                        <p className="text-gray-600 mt-2">Create branded short links to enhance your online presence.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <h2 className="text-2xl font-semibold text-gray-800">Analytics Dashboard</h2>
                        <p className="text-gray-600 mt-2">Track clicks, traffic sources, and more with our built-in analytics.</p>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <h2 className="text-2xl font-semibold text-gray-800">Secure and Reliable</h2>
                        <p className="text-gray-600 mt-2">All your data is encrypted, ensuring maximum security and reliability.</p>
                    </div>

                    {/* Feature 5 */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <h2 className="text-2xl font-semibold text-gray-800">Bulk URL Shortening</h2>
                        <p className="text-gray-600 mt-2">Shorten multiple URLs at once with our bulk processing feature.</p>
                    </div>

                    {/* Feature 6 */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <h2 className="text-2xl font-semibold text-gray-800">Easy Integration</h2>
                        <p className="text-gray-600 mt-2">Integrate our API into your applications for seamless functionality.</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gray-800 text-white py-10">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
                    <p className="text-lg mt-2">Create an account today and start shortening URLs effortlessly.</p>
                    <Link href="/signup" className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                        Get Started for Free
                    </Link>
                </div>
            </section>
        </div>
    );
}
