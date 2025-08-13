import { aboutdata } from "../types/aboutdata";
import { workdata } from "../types/workdata";
import { featureddata } from "../types/featureddata";
import { testimonials } from "../types/testimonials";
import { articles } from "../types/articles";
import { footerlinks } from "../types/footerlinks";
import { HeaderItem } from "../types/menu";

// header nav-links data
export const headerData: HeaderItem[] = [
  { label: "About Us", href: "#About" },
  { label: "Team", href: "#Team" },
  { label: "FAQ", href: "#FAQ" },
  { label: "Blog", href: "#Blog" },
  { label: "Services", href: "#Services" },
  { label: "Contact Us", href: "#ContactUs" },
];

// about data
export const Aboutdata: aboutdata[] = [
  {
    heading: "Our Mission",
    imgSrc: "/images/aboutus/imgOne.svg",
    paragraph:
      "Brave Links Systems LLC is committed to providing top-tier BPO services, empowering businesses to achieve operational excellence and sustained growth.",
    link: "Discover More",
  },
  {
    heading: "Customer Support Excellence",
    imgSrc: "/images/aboutus/imgTwo.svg",
    paragraph:
      "Our 24/7 multi-channel customer support delivers exceptional service, enhancing client satisfaction and strengthening your brand’s market presence.",
    link: "Explore Support",
  },
  {
    heading: "Operational Optimization",
    imgSrc: "/images/aboutus/imgThree.svg",
    paragraph:
      "We offer innovative IT and data management solutions to streamline processes, reduce costs, and keep your business agile and competitive.",
    link: "Learn How",
  },
];

// WorkData
export const WorkData: workdata[] = [
  {
    name: "Mr. Imran Khan Sadri",
    profession: "Founder CEO",
    imgSrc: "/images/Team/imran-khan.jpg",
  },
  {
    name: "Mr. Shehzad Khan",
    profession: "Director Operations",
    imgSrc: "/images/Team/shehzad-khan.jpg",
  },
  {
    name: "Mr. Akbar Khan",
    profession: "Director Operations",
    imgSrc: "/images/Team/akbar-khan.jpg",
  },
  {
    name: "Ms. Zainab Shahid",
    profession: "HR Manager",
    imgSrc: "/images/Team/zainab-shahid.jpg",
  },
  {
    name: "Mr. Mashal Khan Sadri",
    profession: "Operations Manager",
    imgSrc: "/images/Team/mashal-khan.jpg",
  },
  {
    name: "Mr. Zia Ullah Khan",
    profession: "Compliance Manager",
    imgSrc: "/images/Team/zia-ullah.jpg",
  },
  {
    name: "Mr. Muhammad Usman",
    profession: "Software Project Manager",
    imgSrc: "/images/Team/muhammad-usman.png",
  },
  {
    name: "Mr. Taimor Osman Khan",
    profession: "Softawre Project Manager",
    imgSrc: "/images/Team/taimor-osman.jpg",
  },
  {
    name: "Ms. Sumbal Shahid",
    profession: "Finance Manager",
    imgSrc: "/images/Team/sumbal-shahid.jpg",
  },
  {
    name: "Ms. Neha Zaheer",
    profession: "Front Desk Officer",
    imgSrc: "/images/Team/neha-zaheer.jpg",
  },
  {
    name: "Mr. Taimor Ahmad",
    profession: "Project Manager – Brave BPO",
    imgSrc: "/images/Team/taimor-ahmad.jpg",
  },
  {
    name: "Mr. Bilawal Sajjad",
    profession: "ITManager – Brave BPO",
    imgSrc: "/images/Team/bilawal-sajjad.jpg",
  },
  {
    name: "Mr. Muhammad Irtza",
    profession: "Team Lead – Brave BPO 2.0",
    imgSrc: "/images/Team/muhammad-irtza.jpg",
  },
  {
    name: "Mr. Muhammad Saif",
    profession: "Team Lead – Brave BPO 2.0",
    imgSrc: "/images/Team/muhammad-saif.jpg",
  },
  {
    name: "Mr. Taimor Ahmad",
    profession: "Project Manager – Brave BPO",
    imgSrc: "/images/Team/taimor-ahmad.jpg",
  },
  {
    name: "Mr. Bilawal Sajjad",
    profession: "ITManager – Brave BPO",
    imgSrc: "/images/Team/bilawal-sajjad.jpg",
  },
  {
    name: "Mr. Muhammad Irtza",
    profession: "Team Lead – Brave BPO 2.0",
    imgSrc: "/images/Team/muhammad-irtza.jpg",
  },
  {
    name: "Mr. Muhammad Saif",
    profession: "Team Lead – Brave BPO 2.0",
    imgSrc: "/images/Team/muhammad-saif.jpg",
  },
];

// FeaturedData
export const FeaturedData: featureddata[] = [
  {
    heading: "Customer Support for Retail",
    imgSrc: "/images/featured/feat1.jpg",
  },
  {
    heading: "IT Optimization for Finance",
    imgSrc: "/images/featured/feat2.jpg",
  },
  {
    heading: "Data Management for Healthcare",
    imgSrc: "/images/featured/feat1.jpg",
  },
  {
    heading: "Back-Office Support for E-Commerce",
    imgSrc: "/images/featured/feat2.jpg",
  },
];

// PlansData
export const PlansData = [
  {
    heading: "Essential BPO",
    price: { monthly: 19, yearly: 190 },
    user: "per user",
    features: {
      profiles: "Basic Customer Support",
      posts: "Standard IT Support",
      templates: "Core Data Management",
      view: "Performance Dashboard",
      support: "24/7 Support",
    },
  },
  {
    heading: "Professional BPO",
    price: { monthly: 29, yearly: 290 },
    user: "per user",
    features: {
      profiles: "Multi-Channel Customer Support",
      posts: "Advanced IT Solutions",
      templates: "Comprehensive Data Management",
      view: "Performance Dashboard",
      support: "24/7 Priority Support",
    },
  },
  {
    heading: "Enterprise BPO",
    price: { monthly: 59, yearly: 590 },
    user: "per user",
    features: {
      profiles: "Global Customer Support",
      posts: "Custom IT Solutions",
      templates: "Scalable Data Management",
      view: "Performance Dashboard",
      support: "24/7 VIP Support",
    },
  },
];

// TestimonialsData
export const TestimonialsData: testimonials[] = [
  {
    name: "Ahmed Hassan",
    profession: "COO, RetailCorp",
    comment:
      "Brave Links Systems LLC revolutionized our customer support with 24/7 multi-channel services, boosting client satisfaction significantly.",
    imgSrc: "/images/testimonial/user1.svg",
    rating: 5,
  },
  {
    name: "Sara Iqbal",
    profession: "Director, FinanceNow",
    comment:
      "Their IT solutions optimized our financial workflows, reducing costs and improving operational efficiency.",
    imgSrc: "/images/testimonial/user2.svg",
    rating: 4,
  },
  {
    name: "Bilal Khan",
    profession: "Manager, HealthCare Inc.",
    comment:
      "Their data management services ensured compliance and accuracy, transforming our healthcare operations.",
    imgSrc: "/images/testimonial/user3.svg",
    rating: 4,
  },
  {
    name: "Laila Ahmed",
    profession: "CEO, ShopOnline",
    comment:
      "Brave Links Systems LLC’s back-office support allowed us to focus on growth while they managed our operations seamlessly.",
    imgSrc: "/images/testimonial/user1.svg",
    rating: 5,
  },
  {
    name: "Hassan Raza",
    profession: "VP, TechTrend",
    comment:
      "Their scalable BPO solutions adapted perfectly to our growing business needs, ensuring consistent performance.",
    imgSrc: "/images/testimonial/user2.svg",
    rating: 4,
  },
  {
    name: "Zara Siddiqui",
    profession: "Operations Head, LogiCorp",
    comment:
      "Their expertise in process optimization reduced our overhead costs and enhanced operational efficiency.",
    imgSrc: "/images/testimonial/user3.svg",
    rating: 4,
  },
];

// ArticlesData
export const ArticlesData: articles[] = [
  {
    time: "5 min",
    heading: "Why Outsource Customer Support?",
    heading2: "Enhancing Efficiency with BPO",
    name: "Taimor Osman Khan",
    date: "August 1, 2025",
    imgSrc: "/images/articles/article.png",
  },
  {
    time: "4 min",
    heading: "Streamlining Business Operations",
    heading2: "The Power of BPO Solutions",
    name: "Taimor Osman Khan",
    date: "July 25, 2025",
    imgSrc: "/images/articles/article2.png",
  },
  {
    time: "6 min",
    heading: "Scaling Your Business",
    heading2: "Flexible BPO for Growth",
    name: "Taimor Osman Khan",
    date: "July 15, 2025",
    imgSrc: "/images/articles/article3.png",
  },
  {
    time: "5 min",
    heading: "Boosting Customer Experience",
    heading2: "24/7 Support Strategies",
    name: "Taimor Osman Khan",
    date: "July 1, 2025",
    imgSrc: "/images/articles/article.png",
  },
  {
    time: "4 min",
    heading: "Optimizing Data Management",
    heading2: "BPO for Data-Driven Success",
    name: "Taimor Osman Khan",
    date: "June 20, 2025",
    imgSrc: "/images/articles/article2.png",
  },
  {
    time: "5 min",
    heading: "Cost Savings with BPO",
    heading2: "Maximizing Your Budget",
    name: "Taimor Osman Khan",
    date: "June 10, 2025",
    imgSrc: "/images/articles/article3.png",
  },
];

// FooterLinksData
export const FooterLinksData: footerlinks[] = [
  {
    section: "Menu",
    links: [
      { label: "About Us", href: "#About" },
      { label: "Team", href: "#Team" },
      { label: "FAQ", href: "#FAQ" },
      { label: "Blog", href: "#Blog" },
    ],
  },
  {
    section: "Services",
    links: [
      { label: "Customer Support", href: "/services/customer-support" },
      { label: "IT Solutions", href: "/services/it-solutions" },
      { label: "Data Management", href: "/services/data-management" },
      { label: "Contact Us", href: "/ContactUs" },
    ],
  },
  {
    section: "Resources",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Whitepapers", href: "/whitepapers" },
      { label: "Guides", href: "/guides" },
    ],
  },
  {
    section: "Legal",
    links: [
      { label: "Privacy Policy", href: "/PrivacyPolicy" },
      { label: "Terms of Service", href: "/TermsOfService" },
    ],
  },
];
