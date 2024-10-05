import { HandCoinsIcon, ListTodo, ShoppingCart, Ticket } from "lucide-react";
import { DownloadBtnTypes } from "../../types";

export const baseUrl = process.env.NEXT_BASE_URL;
export const navMenuItems = [
  {
    name: "Referral Program",
    link: "/referral-program",
  },
  {
    name: "Get Support",
    link: "/get-support",
  },
];

export const donwloadLinks: DownloadBtnTypes[] = [
  {
    appLink: "#",
    provider: "App Store",
    svgLink: "/assets/appstore.svg",
    text: "Download on the",
  },

  {
    appLink: "#",
    provider: "Google Play",
    svgLink: "/assets/googlePlay.svg",
    text: "GET IT ON",
  },
];

export const processLinks = [
  {
    text: "Earn rewards on every purchase you make, both online and in-store, with no limits.",
    Icon: ShoppingCart,
  },
  {
    text: "Get rewarded for sharing your opinions through quick and easy online surveys.",
    Icon: ListTodo,
  },
  {
    text: "Unlock exclusive coupons for top online retailers and enjoy extra savings on every deal.",
    Icon: Ticket,
  },
  {
    text: "Redeem your rewards with flexible payment options, including gift cards, PayPal, and more.",
    Icon: HandCoinsIcon,
  },
];

export const summary = [
  {
    text: "Users must enter the referral code during signup, it cannot be done afterwards",
  },
  {
    text: `10% of your friend’s earnings will be provided to you once it is confirmed.`,
  },
  {
    text: "Please refer to Terms and Conditions for more details",
  },
];

export const tabData = [
  {
    tabName: "General",
    tabValue: "general",
    faq: [
      {
        question: "I disqualified from the survey",
        answer:
          "Sometimes the survey requires very specific type of respondent and thus may disqualify you for not meeting the specified criteria.",
      },
      {
        question:
          "What are Pollfish, Tapresearch and other names and images shown in the app?",
        answer:
          "They are the partner survey networks that RewardXpress has tied up with for providing surveys to its users. The images users see consists of logos and names of these survey networks. The number of networks may change in the future if new partners are introduced or old ones leave. ",
      },
      {
        question: "How do upload bill for coins works?",
        answer:
          "All you need to do is upload a screenshot for a digital bill or a photo of a physical bill and once its done, you will probably see a video ad for a reward. Do remember ad is not shown in all cases.",
      },
      {
        question: "Where can I view my transaction history?",
        answer: "Your transaction history can be viewed in the coins tab.",
      },
      {
        question: "Why my coins are pending?",
        answer:
          "Pending coins means that more verification is needed by the partners. All your earnings are verified in 30 to 45 days due to different policies of different partners.",
      },
      {
        question: "How long do payments take?",
        answer:
          "Once you have created a request it will be paid within 48 hours. You can request payment once you have reached 1000 coins and only one payment request is allowed every month.",
      },
      {
        question: "How to support contact?",
        answer: "Email us to support@rewardxpress.com",
      },
      {
        question: "Is my data secure?",
        answer:
          "Yes, we use industry-standard encryption to ensure your data present with us is secure and private. Every survey response you make is used for research purposes and not for any targeted advertisement. The reponses are always kept as anonymous.",
      },
    ],
  },
  {
    tabName: "Surveys",
    tabValue: "surveys",
    faq: [
      {
        question: "I don't recieve surveys frequently?",
        answer:
          "The survey providers need very specific type of respondents that they filter on basis of location and other internal cretria. If you don't recieve surveys frequently, it means your location is probably not a targeted area for conducting surveys.",
      },
      {
        question: "Why my survey reward was reversed?",
        answer:
          "Survey netwroks use various methods to prevent any action that they suspect is malicious. Things like rapid answering or answering without understanding the context of the question etc. can lead to reversal of rewards.",
      },
      {
        question: "Sometimes conformation takes very long time?",
        answer:
          "A conformation is always provided by the surver providing network. Once its done, it is automatically marked confirmed.",
      },
    ],
  },
  {
    tabName: "Referral",
    tabValue: "referral",
    faq: [
      {
        question: "My referral rewards are pending?",
        answer:
          "Referral rewards are awarded once the rewards are confirmed in your friends account. Reflecting the rewards in your account might take some time.",
      },
      {
        question: "Who is elegible to join the program?",
        answer: "Any member of the RewardXpress app is eligible to join",
      },
    ],
  },
];

export const footerLinks = [
  {
    name: "Privacy Policy",
    url: "/",
  },
  {
    name: "Terms & Conditions",
    url: "/",
  },
  {
    name: "ReferralProgram",
    url: "/referral-program",
  },
];
