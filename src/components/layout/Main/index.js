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

const articles = [
    {
        author: "Claire Robinson",
        thumb: "currency",
        title: "Receive money in any currency with no fees",
        text: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
    },
    {
        author: "Wilson Hutton",
        thumb: "restaurant",
        title: "Treat yourself without worrying about money",
        text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
    },
    {
        author: "Wilson Hutton",
        thumb: "plane",
        title: "Take your Easybank card wherever you go",
        text: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
    },
    {
        author: "Claire Robinson",
        thumb: "confetti",
        title: "Our invite-only Beta accounts are now live!",
        text: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
    }
]

export default () => (
    <main>
        <img className="mockups" src="images/image-mockups.png" alt="mockups" />
        <section className="hero">
            <h1>Next generation digital banking</h1>
            <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <CTAButton />
        </section>
        <section className="middle">
            <div className="wrapper">
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
        <section className="articles">
            <h2>Latest Articles</h2>
            <div className="list">{articles.map((item, index) => (
                <div key={index} className="item">
                    <div>
                        <img src={`images/image-${item.thumb}.jpg`} alt={item.author} />
                    </div>
                    <div className="details">
                        <div className="author">By {item.author}</div>
                        <div className="title">{item.title}</div>
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}</div>
        </section>
    </main>
)