import React from "react";

const sections = [
  {
    title: "1. Introduction",
    content: (
      <>
        Welcome to Shopora. We value your privacy and are committed to
        protecting your personal information. This Privacy Policy explains how
        we collect, use, store, and protect your information when you visit our
        website, create an account, or purchase products from us.
        <div className="mt-4 space-y-1">
          <p>
            <strong>Website:</strong> www.shopora.example
          </p>
          <p>
            <strong>Company:</strong> Shopora Online Store
          </p>
          <p>
            <strong>Email:</strong> privacy@shopora.example
          </p>
        </div>
      </>
    ),
  },
  {
    title: "2. Information We Collect",
    content: (
      <>
        <h3 className="mb-2 font-semibold">Personal Information</h3>
        <ul className="list-disc space-y-1 pl-6">
          <li>Full name</li>
          <li>Email address and phone number</li>
          <li>Billing and shipping address</li>
        </ul>

        <h3 className="mb-2 mt-5 font-semibold">Account Information</h3>
        <ul className="list-disc space-y-1 pl-6">
          <li>Username and account details</li>
          <li>Securely hashed passwords</li>
          <li>Order history and preferences</li>
        </ul>

        <h3 className="mb-2 mt-5 font-semibold">Payment Information</h3>
        <p>
          We may process payment methods, transaction references, billing
          details, and payment confirmations through third-party payment
          providers. We do not store complete payment card details unless
          supported by an appropriate secure and compliant payment system.
        </p>

        <h3 className="mb-2 mt-5 font-semibold">Technical Information</h3>
        <ul className="list-disc space-y-1 pl-6">
          <li>IP address</li>
          <li>Browser and device information</li>
          <li>Website usage data</li>
          <li>Cookies and similar technologies</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. How We Use Your Information",
    content: (
      <>
        We use your information to:
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Process and deliver orders.</li>
          <li>Manage customer accounts.</li>
          <li>Send order confirmations and delivery updates.</li>
          <li>Respond to customer questions and complaints.</li>
          <li>Improve our products, services, and website.</li>
          <li>Detect fraud and protect our website.</li>
          <li>
            Send promotional emails when permitted by law and your preferences.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Cookies and Tracking Technologies",
    content:
      "Our website may use cookies to keep you signed in, remember your shopping cart, save preferences, and understand how visitors use our website. You can disable cookies through your browser settings, but some website features may not work properly.",
  },
  {
    title: "5. Sharing Your Information",
    content: (
      <>
        We do not sell your personal information. We may share necessary
        information with trusted service providers, including:
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Payment processors</li>
          <li>Delivery and courier companies</li>
          <li>Website hosting and cloud service providers</li>
          <li>Analytics and customer support services</li>
          <li>Legal or regulatory authorities when required by law</li>
        </ul>
        <p className="mt-3">
          These providers may access only the information necessary to perform
          their services, subject to applicable agreements and legal
          requirements.
        </p>
      </>
    ),
  },
  {
    title: "6. Data Security",
    content:
      "We use reasonable technical and organizational measures to protect your personal information against unauthorized access, loss, misuse, or disclosure. However, no electronic transmission or storage method is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "7. Data Retention",
    content:
      "We retain personal information only for as long as reasonably necessary to provide our services, fulfill orders, resolve disputes, maintain business records, and comply with applicable legal obligations. When information is no longer needed, we take appropriate steps to delete or anonymize it where reasonably possible.",
  },
  {
    title: "8. Your Privacy Rights",
    content: (
      <>
        Depending on applicable law, you may have the right to:
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Request access to your personal information.</li>
          <li>Correct inaccurate or incomplete information.</li>
          <li>Request deletion of certain personal information.</li>
          <li>Withdraw consent where processing is based on consent.</li>
          <li>Opt out of promotional communications.</li>
          <li>Raise a privacy complaint with the appropriate authority.</li>
        </ul>
        <p className="mt-3">
          To exercise your rights, contact us using the details below.
        </p>
      </>
    ),
  },
  {
    title: "9. Third-Party Links",
    content:
      "Our website may contain links to third-party websites or services. We are not responsible for their privacy practices or content. We recommend reviewing their privacy policies before sharing personal information.",
  },
  {
    title: "10. Children's Privacy",
    content:
      "Our services are not intended for children who are prohibited from using them under applicable law. We do not knowingly collect children's personal information in violation of applicable legal requirements. If you believe a child has improperly provided personal information, please contact us.",
  },
  {
    title: "11. Marketing Communications",
    content:
      "We may send promotional messages about products, discounts, and special offers where permitted by law. You can unsubscribe from marketing emails at any time using the unsubscribe link or by contacting our support team. Necessary transactional messages, such as order confirmations and delivery notifications, may still be sent.",
  },
  {
    title: "12. Changes to This Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time. Changes will be published on this page with an updated revision date. We encourage you to review this page periodically.",
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-base-200 px-4 py-12 text-base-content sm:px-6 lg:py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Shopora Online Store
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base-content/70">
            Learn how we collect, use, and protect your personal information
            when you shop with us.
          </p>

          <p className="mt-5 text-sm text-base-content/60">
            Last updated: October 11, 2026
          </p>
        </header>

        {/* Introduction Notice */}
        <div className="mb-8 rounded-xl border border-base-300 bg-base-100 p-5 sm:p-6">
          <h2 className="mb-2 text-lg font-semibold">
            Your privacy matters
          </h2>
          <p className="leading-7 text-base-content/75">
            We are committed to handling your personal information responsibly
            and transparently. This policy explains our privacy practices and
            the choices available to you.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-5">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-xl border border-base-300 bg-base-100 p-5 sm:p-7"
            >
              <h2 className="mb-4 text-lg font-bold sm:text-xl">
                {section.title}
              </h2>

              <div className="leading-7 text-base-content/75">
                {section.content}
              </div>
            </section>
          ))}

          {/* Contact Section */}
          <section className="rounded-xl border border-base-300 bg-base-100 p-5 sm:p-7">
            <h2 className="mb-4 text-lg font-bold sm:text-xl">
              13. Contact Us
            </h2>

            <p className="mb-5 leading-7 text-base-content/75">
              If you have questions, concerns, or requests regarding this
              Privacy Policy, please contact us.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-base-200 p-4">
                <p className="text-sm text-base-content/60">Store Name</p>
                <p className="mt-1 font-semibold">Shopora Online Store</p>
              </div>

              <div className="rounded-lg bg-base-200 p-4">
                <p className="text-sm text-base-content/60">Privacy Email</p>
                <a
                  href="mailto:privacy@shopora.example"
                  className="mt-1 block font-semibold text-primary hover:underline"
                >
                  privacy@shopora.example
                </a>
              </div>

              <div className="rounded-lg bg-base-200 p-4">
                <p className="text-sm text-base-content/60">Support Email</p>
                <a
                  href="mailto:support@shopora.example"
                  className="mt-1 block font-semibold text-primary hover:underline"
                >
                  support@shopora.example
                </a>
              </div>

              <div className="rounded-lg bg-base-200 p-4">
                <p className="text-sm text-base-content/60">Phone</p>
                <p className="mt-1 font-semibold">+880 1700-000000</p>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-base-200 p-4">
              <p className="text-sm text-base-content/60">Business Address</p>
              <p className="mt-1 font-semibold">
                123 Example Road, Dhaka, Bangladesh
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-10 text-center text-sm text-base-content/60">
          <p>Thank you for trusting Shopora with your shopping experience.</p>
          <p className="mt-2">
            © {new Date().getFullYear()} Shopora Online Store. All rights
            reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
