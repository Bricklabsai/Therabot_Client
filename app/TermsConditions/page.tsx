// pages/terms.js

import Head from 'next/head';

export default function Terms() {
  return (
    <div className="bg-gray-100 h-screen w-screen py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

        <div className="bg-white p-6 text-black rounded shadow">
          <p className="text-lg mb-4 text-blue-700">1. Acceptance of Terms</p>
          <p>By accessing and using our AI therapy platform, you agree to comply with these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our services.</p>

          <p className="text-lg mb-4 text-blue-700">2. Use of the Platform</p>
          <p>Our platform provides AI-driven mental health support. It is not a substitute for professional medical advice or therapy.</p>
          <p>You must be at least 16 years old to use our services.</p>
          <p>Do not share your account credentials with others.</p>
          <p>You are responsible for the content you share during sessions.</p>

          <p className="text-lg mb-4 text-blue-700">3. Privacy and Confidentiality</p>
          <p>We take privacy seriously. Your conversations with the AI are confidential.</p>
          <p>We do not store personally identifiable information (PII) unless required by law.</p>
          <p>Our platform uses encryption to protect your data.</p>

          {/* Add the rest of your Terms and Conditions content here */}
        </div>
      </div>
    </div>
  );
}
