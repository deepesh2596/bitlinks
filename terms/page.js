export default function TermsOfService() {
    return (
      <div className="bg-gray-100 min-h-screen">
        {/* Header */}
        <header className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">Terms of Service</h1>
            <p className="text-lg mt-2">Please read our terms and conditions carefully</p>
          </div>
        </header>
  
        {/* Content */}
        <section className="container mx-auto py-10 px-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By using our URL shortener service, you agree to comply with and be bound by these Terms of Service. If you do
              not agree with any part of these terms, you may not use the service.
            </p>
  
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Description of Service</h2>
            <p className="text-gray-600">
              Our service allows users to shorten URLs and track link analytics. You are solely responsible for the content
              of the URLs you submit.
            </p>
  
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. User Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Do not submit illegal, harmful, or inappropriate URLs.</li>
              <li>Do not attempt to misuse or disrupt the service.</li>
              <li>Ensure that you have the right to share the content you submit.</li>
            </ul>
  
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Prohibited Activities</h2>
            <p className="text-gray-600">
              You may not use our service for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Phishing, spamming, or distributing malware.</li>
              <li>Violating intellectual property rights.</li>
              <li>Sharing or promoting illegal content.</li>
            </ul>
  
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Termination</h2>
            <p className="text-gray-600">
              We reserve the right to terminate or suspend your access to the service at any time, without prior notice, if
              we determine that you have violated these terms.
            </p>
  
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">6. Disclaimer of Warranties</h2>
            <p className="text-gray-600">
              Our service is provided &ldquo;as is&rdquo; without any warranties, expressed or implied. We do not guarantee
              that the service will be uninterrupted or error-free.
            </p>
  
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-600">
              In no event shall we be liable for any indirect, incidental, or consequential damages arising from your use of
              the service.
            </p>
  
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">8. Changes to Terms</h2>
            <p className="text-gray-600">
              We may update these Terms of Service at any time. Continued use of the service after changes are posted
              constitutes your acceptance of the new terms.
            </p>
  
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">9. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions or concerns about these Terms of Service, please contact us at
              <span className="text-blue-600"> support@yourbrand.com</span>.
            </p>
          </div>
        </section>
      </div>
    );
  }
  