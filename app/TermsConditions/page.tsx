// pages/terms.js

import Head from 'next/head';

export default function Terms() {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <Head>
        <title>Terms and Conditions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

        <div className="bg-white p-6 rounded shadow">
          <p className="text-lg mb-4">1. Acceptance of Terms</p>
          <p>By accessing and using our AI therapy platform, you agree to comply with these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our services.</p>
          
          {/* Add the rest of your Terms and Conditions content here */}
        </div>
      </div>
    </div>
  );
}
