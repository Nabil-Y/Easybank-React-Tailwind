import online from "../images/icon-online.svg";
import budgeting from "../images/icon-budgeting.svg";
import onboarding from "../images/icon-onboarding.svg";
import api from "../images/icon-api.svg";
import currency from "../images/image-currency.jpg";
import restaurant from "../images/image-restaurant.jpg";
import plane from "../images/image-plane.jpg";
import confetti from "../images/image-confetti.jpg";

export const navText = ["Home","About","Contact","Blog","Careers"];

export const heroText = ["Next generation digital banking", "Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more."];

export const featuresText = ["Why choose Easybank?", "We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before." ]

export const featuresContent = [
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

export const articlestitle =["Latest Articles"];

export const articlesContent = [
    {
        picture: currency,
        author:"Claire Robinson",
        title:"Receive money in any currency with no fees",
        description:"The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single…",
    },
    {
        picture: restaurant,
        author:"Wilson Hutton",
        title:"Treat yourself without worrying about money",
        description:"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you…",
    },
    {
        picture: plane,
        author:"Wilson Hutton",
        title:"Take your Easybank card wherever you go",
        description:"We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you…",
    },
    {
        picture: confetti,
        author:"Claire Robinson",
        title:"Our invite-only Beta accounts are now live!",
        description:"After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site…",
    }
]