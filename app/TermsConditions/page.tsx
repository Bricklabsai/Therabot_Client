// pages/terms.js

import Head from 'next/head';

export default function Terms() {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

        <div className="bg-white p-8 text-black rounded shadow">
          <p className="text-lg mb-4 text-blue-700">1. Acceptance of Terms</p>
          <p className='mb-4'>By accessing and using our AI therapy platform, you agree to comply with these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our services.</p>

          <p className="text-lg mb-4 text-blue-700">2. Use of the Platform</p>
          <p>Our platform provides AI-driven mental health support. It is not a substitute for professional medical advice or therapy.</p>
          <p>You must be at least 16 years old to use our services.</p>
          <p>Do not share your account credentials with others.</p>
          <p className='mb-4'>You are responsible for the content you share during sessions.</p>

          <p className="text-lg mb-4 text-blue-700">3. Privacy and Confidentiality</p>
          <p>We take privacy seriously. Your conversations with the AI are confidential.</p>
          <p>We do not store personally identifiable information (PII) unless required by law.</p>
          <p className='mb-4'>Our platform uses encryption to protect your data.</p>

          {/* Add the rest of your Terms and Conditions content here */}
          <p className="text-lg mb-4 text-blue-700">4. Limitations </p>
          <p>Our AI is not a licensed therapist. It provides general guidance based on patterns and data. </p>
          <p>We do not guarantee specific outcomes or results. </p>
          <p className='mb-4'>If you are in crisis, seek immediate professional help. </p>

          <p className="text-lg mb-4 text-blue-700">5. User Conduct  </p>
          <p>Be respectful and considerate in your interactions.  </p>
          <p>Do not use offensive language or engage in harmful behavior. </p>
          <p className='mb-4'>Report any inappropriate content.  </p>

          <p className="text-lg mb-4 text-blue-700">6. Intellectual Property  </p>
          <p>Our platform’s content, including text, graphics, and code, is protected by intellectual property laws. </p>
          <p className='mb-4'>You may not reproduce, modify, or distribute our content without permission.  </p>

          <p className="text-lg mb-4 text-blue-700">7. Disclaimers  </p>
          <p>Our AI is not a licensed therapist. It provides general guidance based on patterns and data. </p>
          <p>We do not guarantee specific outcomes or results. </p>
          <p className='mb-4'>If you are in crisis, seek immediate professional help. </p>

          <p className="text-lg mb-4 text-blue-700">4. Limitations </p>
          <p>Our AI is not a licensed therapist. It provides general guidance based on patterns and data. </p>
          <p>We do not guarantee specific outcomes or results. </p>
          <p className='mb-4'>If you are in crisis, seek immediate professional help. </p>

          <p className="text-lg mb-4 text-blue-700">4. Limitations </p>
          <p>Our AI is not a licensed therapist. It provides general guidance based on patterns and data. </p>
          <p>We do not guarantee specific outcomes or results. </p>
          <p className='mb-4'>If you are in crisis, seek immediate professional help. </p>
        </div>
      </div>
    </div>
  );
}
