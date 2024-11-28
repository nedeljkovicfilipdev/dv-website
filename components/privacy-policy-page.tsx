"use client"; 

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl mt-20 font-bold mb-6">Privacy Policy</h1>
      <p>Last Updated: <strong>9/18/2024</strong></p>

      <p className="mt-4">
        By using <a href="https://diversevisa.com" className="text-customblue underline">diversevisa.com</a> (the "Site"), you agree to the terms in this Privacy Policy.
        Diverse Visa is committed to protecting your privacy. We will NEVER sell your personal information to third parties. The information you provide will only be used to stay connected with you.
        Should you wish to stop receiving communications from us, feel free to contact us, and we’ll promptly cease communication.
      </p>

      <h2 className="text-3xl font-semibold mt-6">Information Collection and Use</h2>

      <h3 className="text-xl font-semibold mt-4">Information We Collect:</h3>
      <p className="mt-2">
        When you visit <a href="https://diversevisa.com" className="text-customblue underline">diversevisa.com</a> (the “Site”), we may collect the following types of personal information:
      </p>
      <ol className="list-decimal ml-6 mt-2">
        <li><strong>Information You Provide:</strong> This includes details like your name, email address, and other contact information, which you may share with us when filling out contact forms, subscribing to our newsletter, or interacting with the Site.</li>
        <li><strong>Automatically Collected Information:</strong> We may gather data such as your IP address, browser type, and the pages you visit on our Site, along with other devices and browsing activity.</li>
      </ol>

      <h3 className="text-xl font-semibold mt-4">How We Use Your Information:</h3>
      <ol className="list-decimal ml-6 mt-2">
        <li><strong>Communication:</strong> To respond to your questions, provide updates, and offer customer support.</li>
        <li><strong>Marketing:</strong> To send newsletters, promotions, and other marketing content, with the option to opt out at any time.</li>
        <li><strong>Improvement:</strong> To analyze user interactions on our Site and enhance its functionality and user experience.</li>
      </ol>

      <h2 className="text-3xl font-semibold mt-6">Cookies</h2>
      <p className="mt-2">
        Cookies are small data files that may contain an anonymous unique identifier. These files are sent to your browser by a website and stored on your computer’s hard drive.
        Like many websites, we use cookies to collect information. You can configure your browser to reject all cookies or notify you when a cookie is being sent. However, please note that some parts of our Site may not function properly if you choose to disable cookies.
      </p>

      <h2 className="text-3xl font-semibold mt-6">Information Collected from Third-party Platforms</h2>
      <p className="mt-2">
        Diverse Visa may gather information from third-party platforms, including Facebook, Instagram, and Google Ads, when you engage with our ads or visit our social media pages. 
        This can include demographic data, interests, and other details shared by these platforms to help us refine our marketing strategies and improve our services. 
        However, we do not have control over the data collection practices of these platforms, and your interactions with them are governed by their respective privacy policies. 
        We encourage you to review their policies to understand how your data is collected and used.
      </p>

      <h2 className="text-3xl font-semibold mt-6">Security</h2>
      <p className="mt-2">
        We take the security of your Personal Information seriously, but it&apos;s important to understand that no method of transmitting data over the Internet or storing it electronically is entirely secure. 
        Although we employ industry-standard measures to protect your Personal Information, we cannot provide a guarantee of absolute security.
      </p>

      <h2 className="text-3xl font-semibold mt-6">Your Rights</h2>
      <p className="mt-2">
        As a website visitor, you have the right to access, correct, or delete your personal information held by us. 
        To exercise these rights or if you have any questions about your personal information, please contact us using the contact form on our website.
      </p>

      <h2 className="text-3xl font-semibold mt-6">Changes to this Privacy Policy</h2>
      <p className="mt-2">
        This Privacy Policy is effective as of <strong>9/18/24</strong> and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
        We reserve the right to update or change our Privacy Policy at any time, and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
        If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us or by placing a prominent notice on our website.
      </p>

      <h2 className="text-3xl font-semibold mt-6">Contact Us</h2>
      <p className="mt-2">
        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@diversevisa.com" className="text-customblue underline">info@diversevisa.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
