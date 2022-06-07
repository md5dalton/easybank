import React from 'react'
import CTAButton from '../../UI/CTAButton'

import './styles.sass'

const advantages = [
    {
        icon: "online",
        title: "online banking",
        description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
    },
    {
        icon: "budgeting",
        title: "simple budgeting",
        description: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
    },
    {
        icon: "onboarding",
        title: "fast onboarding",
        description: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
    },
    {
        icon: "api",
        title: "open API",
        description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    }
]

export default () => (
    <main>
        <section className="hero">
            <h1>Next generation digital banking</h1>
            <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <CTAButton />
        </section>
        <section className="middle">
            <div className="bg-wrapper">
                <h2>Why choose Easybank?</h2>
                <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                <div className="list">{advantages.map((item, index) => (
                    <div key={index} className="item">
                        <div>
                            <img src={`images/icon-${item.icon}.svg`} alt={item.title} />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}</div>
            </div>
        </section>
    </main>
)