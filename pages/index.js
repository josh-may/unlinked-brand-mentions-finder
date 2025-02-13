import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>
          Unlinked Brand Mentions Finder | Find & Convert Brand Mentions
        </title>
        <meta
          name="description"
          content="Discover websites mentioning your brand without linking back. Our automated tool helps you find and convert unlinked brand mentions into valuable backlinks."
        />
        <meta
          name="keywords"
          content="unlinked brand mentions finder, brand mentions tool, find unlinked mentions, backlink opportunities, brand monitoring"
        />

        <meta
          property="og:title"
          content="Unlinked Brand Mentions Finder | Find & Convert Brand Mentions"
        />
        <meta
          property="og:description"
          content="Discover websites mentioning your brand without linking back. Our automated tool helps you find and convert unlinked brand mentions into valuable backlinks."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Unlinked Brand Mentions Finder"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Unlinked Brand Mentions Finder | Find & Convert Brand Mentions"
        />
        <meta
          name="twitter:description"
          content="Discover websites mentioning your brand without linking back. Our automated tool helps you find and convert unlinked brand mentions into valuable backlinks."
        />

        <link rel="canonical" href="https://unlinkedbrandmentionsfinder.com" />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Header */}
      <header className="bg-indigo-200 ">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold text-gray-800">
              Brand Mentions Finder
            </div>
            <nav className="hidden sm:block">
              <ul className="flex items-center space-x-6">
                <li>
                  <a
                    href="#features"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Why
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setIsAboutOpen(true)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    About
                  </button>
                </li>
                <li>
                  <a
                    href="https://www.brandmentionsfinder.com/"
                    className="px-4 py-2.5 text-white bg-gray-900 rounded hover:bg-gray-800 font-bold"
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {/*  */}

      {/* About Modal */}
      {isAboutOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsAboutOpen(false);
            }
          }}
        >
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setIsAboutOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
            <p className="text-gray-600 mb-4">
              I built Unlinked Brand Mentions Finder to scratch my own itch. The
              manual process to find unlinked brand mentions took hours and I
              knew the process could be automated. So I built this!
            </p>
            <p className="text-gray-600">
              Let me know what you think!
              <br />
              -Josh
            </p>
          </div>
        </div>
      )}

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-indigo-200 to-gray-100">
          <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28">
            <div className="text-center space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
                Find Unlinked Brand Mentions
              </h1>
              <p className="max-w-2xl mx-auto text-xl text-gray-600">
                Discover websites mentioning your brand without linking back to
                you. Convert mentions into valuable backlinks.
              </p>
              <div className="flex justify-center space-x-4">
                <input
                  type="text"
                  placeholder="Enter your website URL"
                  id="websiteUrl"
                  className="px-4 py-3.5 w-96 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button
                  onClick={() => {
                    const url = document
                      .getElementById("websiteUrl")
                      .value.trim();
                    if (!url) {
                      alert("Please enter your website URL first");
                      return;
                    }
                    window.location.href =
                      "https://www.brandmentionsfinder.com/";
                  }}
                  className="inline-flex items-center px-8 py-3.5 text-white bg-indigo-700 rounded-lg hover:bg-indigo-600 shadow-lg hover:shadow-xl transition-all font-bold"
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
                </button>
              </div>
            </div>
          </div>
        </section>
        {/*  */}

        <div className="border-t border-gray-200"> </div>

        {/* How it Works */}
        <section className="py-20" id="features">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                How it Works
              </h2>
              <p className="text-xl text-gray-600">
                Automated backlink outreach in three simple steps
              </p>
            </div>

            <div className="mt-16 grid gap-10 grid-cols-1 md:grid-cols-3">
              <div className="relative bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-indigo-100">
                <div className="absolute -top-4 left-8 h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center text-black font-bold">
                  1
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Enter Website
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Simply enter your website URL and we&apos;ll identify your
                    brand name automatically
                  </p>
                </div>
              </div>

              <div className="relative bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-indigo-100">
                <div className="absolute -top-4 left-8 h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center text-black font-bold">
                  2
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Comprehensive Audit
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We scan the entire web to find sites mentioning your brand
                    without linking back
                  </p>
                </div>
              </div>

              <div className="relative bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-indigo-100">
                <div className="absolute -top-4 left-8 h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center text-black font-bold">
                  3
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Automated Outreach
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our system automatically sends personalized emails and
                    follow-ups to convert mentions into backlinks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}

        <div className="border-t border-gray-200"> </div>

        {/* Case Study */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <span className="text-indigo-600 font-semibold">CASE STUDY</span>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                How Sock Club Reclaimed 21 Valuable Backlinks
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Using our platform, Sock Club discovered over 100 unlinked brand
                mentions and successfully converted 21 into high-quality
                backlinks.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-indigo-100">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-4xl font-bold text-indigo-600">
                      21
                    </span>
                    <span className="text-xl text-gray-600">
                      New
                      <br />
                      Backlinks
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900">
                    Notable Mentions Converted:
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-indigo-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Austin Monthly
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-indigo-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Coldwell Banker
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-indigo-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      KUTX Radio
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-indigo-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Texas Advocacy Project
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-indigo-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Observer
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="bg-indigo-50 rounded-xl p-6">
                    <blockquote className="text-gray-700 italic">
                      &ldquo;I was amazed to discover how many quality websites
                      were mentioning our brand without linking back. The
                      automated outreach system made it incredibly easy to
                      reclaim these valuable backlinks.&rdquo;
                    </blockquote>
                    <div className="mt-4">
                      <p className="font-semibold text-gray-900">Josh May</p>
                      <p className="text-gray-600">Sock Club</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 rounded-full p-2">
                        <svg
                          className="h-6 w-6 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          100+ Mentions Found
                        </p>
                        <p className="text-gray-600">
                          Across various authority sites
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 rounded-full p-2">
                        <svg
                          className="h-6 w-6 text-green-600"
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
                      <div>
                        <p className="font-semibold text-gray-900">
                          21% Success Rate
                        </p>
                        <p className="text-gray-600">For backlink conversion</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200"> </div>

        {/* Pricing Section */}
        <section className="py-20" id="pricing">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Choose the plan that works best for your needs
              </p>
            </div>

            <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-indigo-100 hover:shadow-xl transition-shadow">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    One-Time Audit + Outreach
                  </h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">
                      $99
                    </span>
                    <span className="ml-2 text-gray-600">one-time</span>
                  </div>
                  <p className="text-gray-600">
                    We find and contact websites mentioning your brand
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-indigo-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-3 text-gray-600">
                        Find unlinked brand mentions
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-indigo-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-3 text-gray-600">
                        Automated email outreach
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-indigo-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-3 text-gray-600">
                        Follow-up emails and tracking
                      </span>
                    </li>
                  </ul>
                  <button
                    onClick={() => {
                      window.location.href =
                        "https://www.brandmentionsfinder.com/";
                    }}
                    className="w-full py-3 px-6 text-white bg-indigo-700 rounded-lg hover:bg-indigo-600 transition-colors font-bold"
                  >
                    Get Started
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-indigo-100 hover:shadow-xl transition-shadow">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Monthly Monitor
                  </h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">
                      $20
                    </span>
                    <span className="ml-2 text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600">
                    Ongoing monitoring and automatic reclaiming
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-indigo-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-3 text-gray-600">
                        24/7 brand mention monitoring
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-indigo-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-3 text-gray-600">
                        Automatic outreach system
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="h-5 w-5 text-indigo-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-3 text-gray-600">
                        Monthly performance reports
                      </span>
                    </li>
                  </ul>
                  <button
                    onClick={() => {
                      window.location.href =
                        "https://www.brandmentionsfinder.com/";
                    }}
                    className="w-full py-3 px-6 text-white bg-indigo-700 rounded-lg hover:bg-indigo-600 transition-colors font-bold"
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200"> </div>

        {/* Why Choose Us  */}
        <section className="py-20" id="why">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Choose Us?
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                The fastest and most accurate way to find and convert unlinked
                brand mentions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 border border-indigo-50">
                <div className="bg-indigo-100 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                  <svg
                    className="h-6 w-6 text-indigo-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Data-Driven Insights
                </h3>
                <p className="text-gray-600">
                  Make informed decisions with detailed analytics and metrics.
                  Track your backlink growth and measure the impact on your SEO
                  performance.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 border border-indigo-50">
                <div className="bg-indigo-100 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                  <svg
                    className="h-6 w-6 text-indigo-700"
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Accurate Detection
                </h3>
                <p className="text-gray-600">
                  Advanced algorithms ensure high-precision brand mention
                  detection with over 98% accuracy and intelligent filtering.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 border border-indigo-50">
                <div className="bg-indigo-100 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                  <svg
                    className="h-6 w-6 text-indigo-700"
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Dedicated Support
                </h3>
                <p className="text-gray-600">
                  Our expert team provides personalized guidance and templates
                  to help maximize your outreach success.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*  */}

        <div className="border-t border-gray-200"> </div>

        {/* FAQ  */}
        <section className=" py-20">
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
                <div className="bg-gray-50  shadow-lg rounded-xl p-8 hover:shadow-xl transition-all">
                  <h3 className="text-lg font-semibold text-gray-900">
                    How accurate are the brand mention results?
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Our advanced algorithms provide highly accurate results with
                    over 98% precision. We use natural language processing to
                    understand context and filter out irrelevant mentions.
                  </p>
                </div>

                <div className="bg-gray-50 shadow-lg rounded-xl p-8 hover:shadow-xl transition-all">
                  <h3 className="text-lg font-semibold text-gray-900">
                    How long does it take to get results?
                  </h3>
                  <p className="mt-3 text-gray-600">
                    We&apos;re currently in beta testing. Once we&apos;re ready
                    to launch, we&apos;ll reach out to let you know when you can
                    start discovering your brand mentions.
                  </p>
                </div>

                <div className="bg-gray-50 shadow-lg rounded-xl p-8 hover:shadow-xl transition-all">
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

                <div className="bg-gray-50 shadow-lg rounded-xl p-8 hover:shadow-xl transition-all">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Do you offer support for outreach campaigns?
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Yes! Our team provides templates, best practices, and
                    personalized guidance to help you convert mentions into
                    valuable backlinks. We&apos;re here to support your success.
                  </p>
                </div>

                <div className="bg-gray-50 shadow-lg rounded-xl p-8 hover:shadow-xl transition-all">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Can I track multiple brands or products?
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Yes, our platform supports monitoring multiple brands,
                    products, or variations of your brand name simultaneously.
                    Each can be tracked and managed separately within your
                    dashboard.
                  </p>
                </div>

                <div className="bg-gray-50 shadow-lg rounded-xl p-8 hover:shadow-xl transition-all">
                  <h3 className="text-lg font-semibold text-gray-900">
                    What makes your service different from Google Alerts?
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Unlike Google Alerts, we specifically focus on finding
                    unlinked mentions and provide detailed site metrics and
                    contact information. Our platform also includes outreach
                    tools and tracks your conversion success rate.
                  </p>
                </div>

                <div className="bg-gray-50 shadow-lg rounded-xl p-8 hover:shadow-xl transition-all">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Is there a limit to how many mentions I can track?
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Our different pricing tiers accommodate various volumes of
                    brand mentions. The basic plan includes up to 100 monthly
                    mentions, while our premium plans offer unlimited tracking
                    capabilities.
                  </p>
                </div>

                <div className="bg-gray-50 shadow-lg rounded-xl p-8 hover:shadow-xl transition-all">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Can I export the mention data?
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Yes, you can export all your mention data in various formats
                    including CSV, Excel, and PDF. This makes it easy to
                    integrate with your existing workflows or create custom
                    reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200"> </div>

        {/* Final CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Ready to Find Your Unlinked Mentions?
              </h2>
              <p className="text-xl text-gray-600">
                Start discovering valuable backlink opportunities today
              </p>
              <div className="flex justify-center space-x-4">
                <input
                  type="text"
                  placeholder="Enter your website URL"
                  id="websiteUrl"
                  className="px-4 py-3.5 w-96 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button
                  onClick={() => {
                    window.location.href =
                      "https://buy.stripe.com/00g2cdcme6mG7CM5kk";
                  }}
                  className="inline-flex items-center px-8 py-3.5 text-white bg-indigo-700 rounded-lg hover:bg-indigo-600 shadow-lg hover:shadow-xl transition-all font-bold"
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
                </button>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
      </main>
      {/* Footer */}
      <footer className="bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Unlinked Brand Mentions Finder.
              All rights reserved.
            </p>
            <p className="mt-2">
              Built by{" "}
              <a
                href="https://www.joshmmay.com/"
                className="text-gray-600 hover:text-gray-900"
              >
                Josh May
              </a>
            </p>
          </div>
        </div>
      </footer>
      {/*  */}
    </div>
  );
}
