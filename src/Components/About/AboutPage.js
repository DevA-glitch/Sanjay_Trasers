import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const handleAccordionClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`accordion ${isActive ? 'active' : ''}`}>
      <div className="accordion-header bg-gray-200 py-2 px-4 cursor-pointer" onClick={handleAccordionClick}>
        {title}
      </div>
      {isActive && (
        <div className="accordion-content bg-white p-4">
          {content}
        </div>
      )}
    </div>
  );
};

const AboutPage = () => {
  const [activeAccordion, setActiveAccordion] = useState('');

  const handleAccordionClick = (accordionName) => {
    setActiveAccordion(accordionName === activeAccordion ? '' : accordionName);
  };

  return (
    <>
      <div className='flex items-center justify-center flex-col text-center gap-4 px-10 py-5'>
        <h1 className='text-4xl font-bold'>Get To Know Us</h1>
        <p className='text-xl tracking-normal leading-10 since_P'>
          Sanjay Traders is a leading company in the home improvement industry, offering a wide range of products and services to enhance the functionality and aesthetics of residential spaces. Since its establishment in 2009, Sanjay Traders has been dedicated to providing high-quality solutions for customers' diverse needs, ranging from TV units to modular kitchens, false ceilings to Pooja cupboards, and window mosquito nets.
        </p>
      </div>
      <div className='flex items-center justify-center flex-col text-center gap-4 px-10 py-5'>
        <h1 className='text-2xl font-bold'>The Tipping Point:</h1>
        <p className='text-xl tracking-normal leading-9 since_P'>
          Sanjay Traders has reached a significant milestone in its journey, known as the tipping point. This pivotal moment marks the company's growth and recognition in the market, where it has established a strong reputation for its exceptional products and services. The tipping point symbolizes Sanjay Traders' evolution into a trusted and preferred choice for customers seeking innovative and reliable home improvement solutions.
        </p>
      </div>
      <div className='flex items-center justify-center flex-col text-center gap-4 px-10 py-5'>
        <h1 className='text-2xl font-bold'>Accordion Categories</h1>
        <div className='flex flex-col gap-4 since_P'>
          <Accordion
            title="Our Mission"
            content="At Sanjay Traders, our mission is to transform homes into comfortable and inspiring spaces by providing top-notch products and services. We strive to understand the unique requirements of our customers and deliver tailored solutions that exceed their expectations. With a customer-centric approach, we aim to enhance the quality of life for homeowners, making their living spaces more functional, stylish, and personalized."
          />
          <Accordion
            title="Our Vision"
            content="Sanjay Traders envisions becoming the go-to company for all home improvement needs, renowned for its unmatched quality, innovation, and customer satisfaction. We aspire to set new industry standards by continuously introducing groundbreaking products and services. By focusing on innovation, craftsmanship, and attention to detail, we aim to revolutionize the way people perceive and experience home improvements."
          />
          <Accordion
            title="Our Plan"
            content="To achieve our vision, Sanjay Traders has devised a comprehensive plan that encompasses several key strategies. First and foremost, we prioritize the development of cutting-edge designs and technologies, ensuring that our products remain at the forefront of the industry. We invest in research and development to continuously enhance our offerings, keeping up with evolving trends and customer preferences."
          />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
