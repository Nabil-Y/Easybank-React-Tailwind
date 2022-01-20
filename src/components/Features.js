import React from 'react';
import online from "../images/icon-online.svg";
import budgeting from "../images/icon-budgeting.svg";
import onboarding from "../images/icon-onboarding.svg";
import api from "../images/icon-api.svg";

export default function Features() {
    const featuresText = ["Why choose Easybank?", "We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before." ]
    const featuresContent = [
        {
            key: 1,
            imageUrl: online,
            title: "Online Banking",
            text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        },
        {
            key: 2,
            imageUrl: budgeting,
            title: "Simple Budgeting",
            text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
        },
        {
            key: 3,
            imageUrl: onboarding,
            title: "Fast Onboarding",
            text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
        },
        {
            key: 4,
            imageUrl: api,
            title: "Open API",
            text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
        }
    ]
  return <section className='bg-grayish-blue-light py-16 px-4 lg:px-40 md:text-left'>
        <h2 className='text-4xl text-dark-blue py-4'>{featuresText[0]}</h2>
        <p className="text-grayish-blue py-4 md:w-2/3">{featuresText[1]}</p>
        <div className='py-8 md:flex  '>
            {featuresContent.map(item => <div key={item.key} className='flex flex-col px-4'>
                <img src={item.imageUrl} alt="" className='self-center md:self-start py-6'/>
                <h3 className='py-4'>{item.title}</h3>
                <p className='text-grayish-blue'>{item.text}</p>
            </div>)}
        </div>
  </section>;
}
