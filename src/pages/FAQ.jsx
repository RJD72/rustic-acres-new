const FAQ = () => {
  return (
    <section className="min-h-screen bg-lightGrey">
      <div className="relative w-full pt-10 pb-8 sm:mx-auto sm:max-w-6xl sm:px-5">
        <div className="mx-auto px-5">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-deepBurgundy text-center mb-10">
              FAQ
            </h2>
            <p className="mt-3 text-lg text-gray-700 md:text-xl">
              Frequently Asked Questions
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-xl divide-y divide-gray-300">
            {[
              {
                question: "How does the billing work?",
                answer:
                  "We offer monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment methods.",
              },
              {
                question: "Can I get a refund for my subscription?",
                answer:
                  "We offer a 30-day money-back guarantee for most subscription plans. If you are not satisfied within the first 30 days, you can request a full refund. Refunds after 30 days are considered on a case-by-case basis.",
              },
              {
                question: "How do I cancel my subscription?",
                answer:
                  "To cancel, log in to your account and navigate to the subscription management page. From there, you can cancel your subscription to stop future billing.",
              },
              {
                question: "Is there a free trial?",
                answer:
                  "Yes, we offer a free trial of our software for a limited time. During the trial, you have access to select features without any charges.",
              },
              {
                question: "How do I contact support?",
                answer:
                  "You can contact support by submitting a request through our website or emailing support@ourwebsite.com.",
              },
              {
                question: "Do you offer any discounts or promotions?",
                answer:
                  "We occasionally offer discounts or promotions. Stay updated by signing up for our newsletter or following us on social media.",
              },
            ].map((faq, index) => (
              <div key={index} className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-deepBurgundy font-medium">
                    <span>{faq.question}</span>
                    <span className="transition-transform group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-gray-700">
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;
