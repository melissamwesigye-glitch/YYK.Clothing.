import { BUSINESS } from '../data';
import { whatsappLink } from '../utils';

interface Props {
  title: string;
  lastUpdated?: string;
  sections: { heading: string; body: string[] }[];
}

function LegalPage({ title, lastUpdated, sections }: Props) {
  return (
    <div className="pt-16 md:pt-20">
      <div className="border-b border-royal-800 bg-royal-900/40">
        <div className="container-ykk py-12 lg:py-16">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-3 section-title">{title}</h1>
          {lastUpdated && (
            <p className="mt-3 text-xs uppercase tracking-widest text-royal-400">
              Last updated: {lastUpdated}
            </p>
          )}
        </div>
      </div>

      <div className="container-ykk py-14 lg:py-20">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="font-serif text-xl font-medium text-royal-50">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((para, j) => (
                  <p key={j} className="text-sm leading-relaxed text-royal-200">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <div className="border-t border-royal-800 pt-6 text-sm text-royal-300">
            <p>
              For any questions regarding this policy, contact us on WhatsApp at{' '}
              <a
                href={whatsappLink(`Hi ${BUSINESS.name}!`)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-300 underline"
              >
                {BUSINESS.whatsappDisplay}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="July 2026"
      sections={[
        {
          heading: 'Introduction',
          body: [
            `${BUSINESS.name} ("we", "our", "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our website or place an order with us.`,
          ],
        },
        {
          heading: 'Information We Collect',
          body: [
            'We collect information you provide directly to us, such as your name, phone number, and delivery address when you place an order or contact us via WhatsApp.',
            'We do not process online payments through this website. Payment details are shared with you privately via WhatsApp at the time of ordering.',
          ],
        },
        {
          heading: 'How We Use Your Information',
          body: [
            'We use your information to process and fulfil your orders, arrange delivery, respond to your enquiries, and keep you informed about your order status. With your consent, we may also send you newsletters and promotional updates.',
          ],
        },
        {
          heading: 'Sharing Your Information',
          body: [
            'We only share your information with trusted third parties as necessary to fulfil your order — for example, courier services for delivery. We never sell your personal information to anyone.',
          ],
        },
        {
          heading: 'Data Security',
          body: [
            'We take reasonable measures to protect your personal information from unauthorised access, alteration, or disclosure. However, no method of transmission over the internet is completely secure.',
          ],
        },
        {
          heading: 'Your Rights',
          body: [
            'You have the right to access, correct, or request deletion of your personal information. To exercise these rights, please contact us on WhatsApp.',
          ],
        },
        {
          heading: 'Cookies',
          body: [
            'Our website may use cookies to improve your browsing experience. You can disable cookies in your browser settings at any time.',
          ],
        },
      ]}
    />
  );
}

export function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      lastUpdated="July 2026"
      sections={[
        {
          heading: 'Introduction',
          body: [
            `These Terms & Conditions govern your use of the ${BUSINESS.name} website and your purchases from us. By placing an order, you agree to these terms.`,
          ],
        },
        {
          heading: 'Ordering',
          body: [
            'Orders are placed through WhatsApp. Once you select a product and click "Order on WhatsApp", our team will confirm availability, pricing, and delivery with you before finalising your order.',
            'Prices are not displayed on this website. Pricing is discussed and agreed with you directly on WhatsApp.',
          ],
        },
        {
          heading: 'Payment',
          body: [
            'Payment is completed through WhatsApp using the method agreed with our team. Online payment is not currently available through this website but is planned for the future.',
          ],
        },
        {
          heading: 'Delivery',
          body: [
            'We offer three delivery options: collection (where arranged), courier delivery anywhere in South Africa, and Uber Package or Bolt Package delivery within Cape Town.',
            'Delivery times vary depending on your location and the chosen method. We will confirm estimated delivery times with you when you order.',
          ],
        },
        {
          heading: 'Exchanges & Returns',
          body: [
            'Items in original, unworn condition may be exchanged within 7 days of receipt. Please contact us on WhatsApp to arrange an exchange.',
            'Certain items, such as earrings for hygiene reasons, may not be eligible for exchange unless faulty.',
          ],
        },
        {
          heading: 'Product Availability & Condition',
          body: [
            'We make every effort to keep product information up to date. Products are marked as New or Preloved. Preloved items are carefully selected and in excellent condition.',
            'If an item you have ordered is unavailable, we will notify you promptly on WhatsApp.',
          ],
        },
        {
          heading: 'Limitation of Liability',
          body: [
            `${BUSINESS.name} is not liable for indirect or consequential losses arising from your use of our products or services. Our liability is limited to the value of the products purchased.`,
          ],
        },
        {
          heading: 'Changes to Terms',
          body: [
            'We may update these Terms & Conditions from time to time. Any changes will be posted on this page with an updated revision date.',
          ],
        },
      ]}
    />
  );
}
