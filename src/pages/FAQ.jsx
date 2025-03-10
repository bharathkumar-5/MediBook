import React from 'react';
import FAQItem from '../components/FAQItem';

const FAQ = () => {
  const faqs = [
    {
      question: 'How do I book an appointment?',
      answer: 'You can book an appointment by searching for a doctor and selecting a date and time.',
    },
    {
      question: 'Can I cancel an appointment?',
      answer: 'Yes, you can cancel an appointment from your dashboard.',
    },
  ];

  return (
    <div className="faq">
      <h1>FAQ</h1>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;