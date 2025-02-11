export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-900">
              Unlinked Brand Mentions Finder
            </div>
            <nav className="hidden sm:block">
              <ul className="flex items-center gap-8">
                <li>
                  <a
                    href="#features"
                    className="text-gray-600 hover:text-indigo-600"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-gray-600 hover:text-indigo-600"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <div className="bg-gradient-to-br from-indigo-50 to-white">
          <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28">
            <div className="text-center space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
                Find Unlinked Brand Mentions
              </h1>
              <p className="max-w-2xl mx-auto text-xl text-gray-600">
                Discover websites mentioning your brand without linking back to
                you. Convert mentions into valuable backlinks.
              </p>
              <div>
                <a
                  href="#"
                  className="inline-flex items-center px-8 py-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-lg hover:shadow-xl transition-all"
                >
                  Get Started
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* How it Works Section */}
        <div className="bg-white py-24" id="features">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                How it Works
              </h2>
              <p className="text-xl text-gray-600">
                Three simple steps to find and convert unlinked mentions
              </p>
            </div>

            <div className="mt-16 grid gap-10 grid-cols-1 md:grid-cols-3">
              {/* Step 1 */}
              <div className="relative bg-gradient-to-br from-emerald-50 to-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="absolute -top-4 left-8 h-8 w-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Enter Your Brand
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Start by entering your brand name and let our system do the
                    heavy lifting
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative bg-gradient-to-br from-amber-50 to-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="absolute -top-4 left-8 h-8 w-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Find Mentions
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We scan the web to discover all unlinked mentions of your
                    brand
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative bg-gradient-to-br from-rose-50 to-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="absolute -top-4 left-8 h-8 w-8 bg-rose-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Get Backlinks
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Receive contact details and convert mentions into valuable
                    backlinks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div
          className="bg-gradient-to-br from-gray-50 to-white py-24"
          id="benefits"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The fastest and most accurate way to find and convert unlinked
                brand mentions
              </p>
            </div>

            <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-3">
              {/* Fast Results */}
              <div className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 bg-indigo-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <svg
                      className="h-8 w-8 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    Lightning Fast Results
                  </h3>
                  <p className="mt-4 text-gray-600 text-center leading-relaxed">
                    Get comprehensive results in minutes, not hours or days
                  </p>
                </div>
              </div>

              {/* Accurate Detection */}
              <div className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 bg-emerald-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <svg
                      className="h-8 w-8 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    Accurate Detection
                  </h3>
                  <p className="mt-4 text-gray-600 text-center leading-relaxed">
                    Advanced algorithms ensure high-precision brand mention
                    detection
                  </p>
                </div>
              </div>

              {/* Support */}
              <div className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 bg-amber-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <svg
                      className="h-8 w-8 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    Dedicated Support
                  </h3>
                  <p className="mt-4 text-gray-600 text-center leading-relaxed">
                    Expert team ready to help you maximize your outreach success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Get answers to common questions about our platform
              </p>
            </div>
            <div className="mt-16 max-w-3xl mx-auto">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-gray-50 to-white shadow-lg rounded-xl p-8 hover:shadow-xl transition-all">
                  <h3 className="text-lg font-semibold text-gray-900">
                    How accurate are the brand mention results?
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Our advanced algorithms provide highly accurate results with
                    over 95% precision. We use natural language processing to
                    understand context and filter out irrelevant mentions.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white shadow-lg rounded-xl p-8 hover:shadow-xl transition-all">
                  <h3 className="text-lg font-semibold text-gray-900">
                    How long does it take to get results?
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Most searches complete within 5-10 minutes, depending on
                    your brand&apos;s online presence. Our platform continuously
                    monitors for new mentions and updates results in real-time.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white shadow-lg rounded-xl p-8 hover:shadow-xl transition-all">
                  <h3 className="text-lg font-semibold text-gray-900">
                    What information do you provide for each mention?
                  </h3>
                  <p className="mt-3 text-gray-600">
                    For each mention, we provide the website URL, mention
                    context, site metrics, and contact information when
                    available. This helps you prioritize outreach opportunities
                    effectively.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white shadow-lg rounded-xl p-8 hover:shadow-xl transition-all">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Do you offer support for outreach campaigns?
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Yes! Our team provides templates, best practices, and
                    personalized guidance to help you convert mentions into
                    valuable backlinks. We&apos;re here to support your success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Unlinked Brand Mentions Finder.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
