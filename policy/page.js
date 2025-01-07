export default function PrivacyPolicy() {
    return (
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-lg mt-2">Your privacy is important to us</p>
          </div>
        </header>
  
        <section className="container mx-auto py-10 px-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-600">
              This Privacy Policy explains how we collect, use, and protect your information when you use our URL shortener
              service. By using our service, you agree to the terms outlined in this policy.
            </p>
  
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-600">
              We collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Personal Information: Name, email address, and contact details when you sign up.</li>
              <li>Usage Data: URLs you shorten, clicks on shortened URLs, and analytics data.</li>
            </ul>
  
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600">
              Your information is used to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Provide and improve our URL shortener service.</li>
              <li>Analyze and track user behavior to enhance user experience.</li>
              <li>Communicate updates, features, and promotional offers.</li>
            </ul>
  
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Data Protection</h2>
            <p className="text-gray-600">
              We implement various security measures to protect your personal information, including encryption and secure
              server access. However, no system is completely secure, and we cannot guarantee the security of your data.
            </p>
  
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Sharing of Information</h2>
            <p className="text-gray-600">
              We do not sell or share your personal information with third parties, except when required by law or to provide
              the service (e.g., with analytics tools or payment processors).
            </p>
  
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Your Rights</h2>
            <p className="text-gray-600">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Access, update, or delete your personal information.</li>
              <li>Opt-out of marketing communications.</li>
            </ul>
  
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated
              date.
            </p>
  
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions or concerns about this Privacy Policy, please contact us at
              <span className="text-blue-600"> support@yourbrand.com</span>.
            </p>
          </div>
        </section>
      </div>
    );
  }
  