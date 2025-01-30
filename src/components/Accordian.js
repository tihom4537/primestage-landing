import React, { useState } from 'react';
import '../styles/Accordian.css';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="accordion-item">
            <div className="accordion-header" onClick={onClick}>
                <h3 className="accordion-title">{question}</h3>
                <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>+</span>
            </div>
            <div className={`accordion-body ${isOpen ? 'open' : ''}`}>
                <p>{answer}</p>
            </div>
        </div>
    );
};

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for all products. Please ensure the item is unused and in its original packaging."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we offer international shipping. Shipping costs will be calculated at checkout based on your location."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order has been shipped, you will receive a tracking number via email."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept major credit cards, PayPal, and Apple Pay."
        },
        {
            question: "Can I change or cancel my order?",
            answer: "Orders can be changed or canceled within 1 hour of placing them. Please contact our support team immediately."
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for all products. Please ensure the item is unused and in its original packaging."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we offer international shipping. Shipping costs will be calculated at checkout based on your location."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order has been shipped, you will receive a tracking number via email."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept major credit cards, PayPal, and Apple Pay."
        },
        {
            question: "Can I change or cancel my order?",
            answer: "Orders can be changed or canceled within 1 hour of placing them. Please contact our support team immediately."
        }
        // Add more FAQs as needed
    ];

    const toggle = index => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {faqs.map((faq, index) => (
                <AccordionItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => toggle(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
