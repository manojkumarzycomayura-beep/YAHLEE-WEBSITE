import Header from "../components/Header";
import Footer from "../components/Footer";

function FAQ() {

  const faqs = [
    {
      question: "How can I choose the correct size?",
      answer:
        "Please refer to the size guide available on the relevant product page.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once order tracking is available, your tracking details will be provided through the configured customer communication channel.",
    },
    {
      question: "What payment methods are available?",
      answer:
        "Available payment methods will be displayed during checkout.",
    },
    {
      question: "Can I return or exchange an item?",
      answer:
        "Returns and exchanges are subject to YAHLEE's published return and exchange policy.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery estimates will be displayed based on your location and available shipping service.",
    },
    {
      question: "Can I shop for the whole family?",
      answer:
        "Yes. YAHLEE brings together Women, Men, Boys, Girls and Accessories in one family-focused shopping experience.",
    },
  ];

  return (
    <>
      <Header />

      <main className="faq-page">

        <div className="page-title">

          <span>HELP CENTER</span>

          <h1>Frequently Asked Questions</h1>

          <p>
            Find answers to common questions about shopping
            with YAHLEE.
          </p>

        </div>

        <section className="faq-list">

          {faqs.map((faq, index) => (

            <details key={index}>

              <summary>
                {faq.question}
              </summary>

              <p>
                {faq.answer}
              </p>

            </details>

          ))}

        </section>

      </main>

      <Footer />
    </>
  );
}

export default FAQ;
