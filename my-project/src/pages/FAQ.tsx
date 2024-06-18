import React, { useState } from "react";    
import Layout from "./Components/CustomHooks/Layout";

const FAQ = () => {
   const [faqs, setFaqs] = useState([
       {
           category: "Selling Property",
           questions: [
               {
                   question: "What is the first step to selling a property?",
                   answer: "The first step is to determine the market value of your property. This can be done by getting a professional appraisal or by comparing your property to similar ones that have recently sold in your area.",
                   open: false
               },
               {
                   question: "How long does it take to sell a property?",
                   answer: "The time it takes to sell a property can vary greatly depending on factors such as location, market conditions, and the price of the property. On average, it can take anywhere from a few weeks to several months.",
                   open: false
               },
               {
                   question: "What are the costs associated with selling a property?",
                   answer: "Common costs include real estate agent commissions, closing costs, repairs and improvements, staging, and legal fees. It's important to budget for these expenses when planning to sell your property.",
                   open: false
               },
               {
                   question: "Do I need a real estate agent to sell my property?",
                   answer: "While it's possible to sell your property without an agent, having a real estate professional can help you navigate the complex process, market your property effectively, and negotiate with buyers.",
                   open: false
               }
           ]
       },
       {
           category: "Buying Property",
           questions: [
               {
                   question: "What is the first step to buying a property?",
                   answer: "The first step is to get pre-approved for a mortgage. This will give you a clear idea of your budget and show sellers that you are a serious buyer.",
                   open: false
               },
               {
                   question: "What should I look for when viewing a property?",
                   answer: "Pay attention to the condition of the property, its location, neighborhood, and any potential repairs or renovations that may be needed. It's also a good idea to check for any issues like damp, mold, or structural problems.",
                   open: false
               },
               {
                   question: "How much should I offer on a property?",
                   answer: "Your offer should be based on the market value of the property, the condition of the property, and how much you are willing to spend. It's often a good idea to start with a lower offer and negotiate from there.",
                   open: false
               },
               {
                   question: "What costs are involved in buying a property?",
                   answer: "In addition to the purchase price, you should budget for costs such as mortgage fees, legal fees, property taxes, home inspection fees, and moving costs.",
                   open: false
               }
           ]
       },
       {
           category: "Renting Property",
           questions: [
               {
                   question: "What should I consider when renting a property?",
                   answer: "Consider the location, rent price, lease terms, condition of the property, and the landlord's reputation. It's also important to understand your rights and responsibilities as a tenant.",
                   open: false
               },
               {
                   question: "How much rent can I afford?",
                   answer: "A common rule of thumb is to spend no more than 30% of your gross monthly income on rent. This helps ensure that you have enough money for other living expenses and savings.",
                   open: false
               },
               {
                   question: "What is included in the rent?",
                   answer: "Rent often includes the use of the property and sometimes utilities such as water, gas, and electricity. Always clarify with the landlord what is included in the rent and what is not.",
                   open: false
               },
               {
                   question: "What should I do if I have issues with my rental property?",
                   answer: "Report any issues to your landlord or property manager as soon as possible. If they are not resolved in a timely manner, you may need to seek advice from a tenant's rights organization or legal professional.",
                   open: false
               }
           ]
       }
   ]);

   const toggleFAQ = (categoryIndex:any, questionIndex:any) => {
       setFaqs(faqs.map((category, i) => {
           if (i === categoryIndex) {
               category.questions = category.questions.map((question, j) => {
                   if (j === questionIndex) {
                       question.open = !question.open;
                   } else {
                       question.open = false;
                   }
                   return question;
               });
           } else {
               category.questions = category.questions.map(question => {
                   question.open = false;
                   return question;
               });
           }
           return category;
       }));
   };

   return(
       <Layout>
           <div className="faq-container">
               <h2>Frequently Asked Questions</h2>
               {faqs.map((category, categoryIndex) => (
                   <div key={categoryIndex} className="faq-category">
                       <h3>{category.category}</h3>
                       {category.questions.map((question, questionIndex) => (
                           <div key={questionIndex} className="faq" onClick={() => toggleFAQ(categoryIndex, questionIndex)}>
                               <h4 className="faq-question">{question.question}</h4>
                               <div className={`faq-answer ${question.open ? 'open' : ''}`}>{question.answer}</div>
                           </div>
                       ))}
                   </div>
               ))}
           </div>
          
       </Layout>
   );
};

export default FAQ;
