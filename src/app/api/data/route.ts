// ...baqi imports same rahenge
import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { workdata } from '@/app/types/workdata'
import { featureddata } from '@/app/types/featureddata'
import { testimonials } from '@/app/types/testimonials'
import { articles } from '@/app/types/articles'
import { footerlinks } from '@/app/types/footerlinks'

// header nav-links data
const headerData: HeaderItem[] = [
  { label: 'About Us', href: '#About' },
  { label: 'Team', href: '#Team' },
  { label: 'FAQ', href: '#FAQ' },
  { label: 'Blog', href: '#Blog' },
  { label: 'Services', href: '#Services' },

]

// about data
const Aboutdata: aboutdata[] = [
  {
    heading: 'Our Mission',
    imgSrc: '/images/aboutus/imgOne.svg',
    paragraph:
      'Brave Links Systems LLC is committed to providing top-tier BPO services, empowering businesses to achieve operational excellence and sustained growth.',
    link: 'Discover More',
  },
  {
    heading: 'Customer Support Excellence',
    imgSrc: '/images/aboutus/imgTwo.svg',
    paragraph:
      'Our 24/7 multi-channel customer support delivers exceptional service, enhancing client satisfaction and strengthening your brand’s market presence.',
    link: 'Explore Support',
  },
  {
    heading: 'Operational Optimization',
    imgSrc: '/images/aboutus/imgThree.svg',
    paragraph:
      'We offer innovative IT and data management solutions to streamline processes, reduce costs, and keep your business agile and competitive.',
    link: 'Learn How',
  },
]

// ✅ UPDATED: WorkData with old site team
const WorkData: workdata[] = [
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
  // {
  //   name: "Mr. Muhammad Shahryar",
  //   profession: "Operations Manager | Brave BPO 1.0",
  //   imgSrc: "/images/Team/shahryar.jpg",
  // },
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
  // {
  //   name: "Mr. Zaman Khan",
  //   profession: "QA Manager – Brave BPO",
  //   imgSrc: "/images/Team/zaman-khan.jpg",
  // },
  // {
  //   name: "Mr. Rehman Khan",
  //   profession: "Business Development Manager – Brave BPO",
  //   imgSrc: "/images/Team/rehman-khan.png",
  // },
  // {
  //   name: "Mr. Faraz",
  //   profession: "Director. Business Development",
  //   imgSrc: "/images/Team/maqsood.jpg",
  // },
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
  // {
  //   name: "Mr. Fawad Khan",
  //   profession: "Team Lead – Brave BPO 2.0",
  //   imgSrc: "/images/Team/fawad-khan.jpg",
  // },
  // {
  //   name: "Mr. Umer-Bin-Tariq",
  //   profession: "Digital Media Specialist – Brave BPO",
  //   imgSrc: "/images/Team/umer-bin-tariq.jpg",
  // },
  // {
  //   name: "Mr. Ali Asghar",
  //   profession: "IT Support – Brave BPO 1.0",
  //   imgSrc: "/images/Team/ali-asghar.jpeg",
  // },
  // {
  //   name: "Muhammad Arman",
  //   profession: "IT Support – Brave BPO 1.0",
  //   imgSrc: "/images/Team/arman.jpg",
  // },
  // {
  //   name: "Mr. Muhammad Shakeel",
  //   profession: "Admin & Facilities Supervisor – Brave BPO",
  //   imgSrc: "/images/Team/muhammad-shakeel.jpg",
  // },
  // {
  //   name: "Mr. Alaudin Khan",
  //   profession: "Security Supervisor – Brave BPO 2.0",
  //   imgSrc: "/images/Team/alaudin-khan.jpg",
  // },
]

const FeaturedData: featureddata[] = [
  {
    heading: 'Customer Support for Retail',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'IT Optimization for Finance',
    imgSrc: '/images/featured/feat2.jpg',
  },
  {
    heading: 'Data Management for Healthcare',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'Back-Office Support for E-Commerce',
    imgSrc: '/images/featured/feat2.jpg',
  },
]

const PlansData = [
  {
    heading: 'Essential BPO',
    price: { monthly: 19, yearly: 190 },
    user: 'per user',
    features: {
      profiles: 'Basic Customer Support',
      posts: 'Standard IT Support',
      templates: 'Core Data Management',
      view: 'Performance Dashboard',
      support: '24/7 Support',
    },
  },
  {
    heading: 'Professional BPO',
    price: { monthly: 29, yearly: 290 },
    user: 'per user',
    features: {
      profiles: 'Multi-Channel Customer Support',
      posts: 'Advanced IT Solutions',
      templates: 'Comprehensive Data Management',
      view: 'Performance Dashboard',
      support: '24/7 Priority Support',
    },
  },
  {
    heading: 'Enterprise BPO',
    price: { monthly: 59, yearly: 590 },
    user: 'per user',
    features: {
      profiles: 'Global Customer Support',
      posts: 'Custom IT Solutions',
      templates: 'Scalable Data Management',
      view: 'Performance Dashboard',
      support: '24/7 VIP Support',
    },
  },
]

const TestimonialsData: testimonials[] = [
  {
    name: 'Ahmed Hassan',
    profession: 'COO, RetailCorp',
    comment:
      'Brave Links Systems LLC revolutionized our customer support with 24/7 multi-channel services, boosting client satisfaction significantly.',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'Sara Iqbal',
    profession: 'Director, FinanceNow',
    comment:
      'Their IT solutions optimized our financial workflows, reducing costs and improving operational efficiency.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 4,
  },
  {
    name: 'Bilal Khan',
    profession: 'Manager, HealthCare Inc.',
    comment:
      'Their data management services ensured compliance and accuracy, transforming our healthcare operations.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 4,
  },
  {
    name: 'Laila Ahmed',
    profession: 'CEO, ShopOnline',
    comment:
      'Brave Links Systems LLC’s back-office support allowed us to focus on growth while they managed our operations seamlessly.',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'Hassan Raza',
    profession: 'VP, TechTrend',
    comment:
      'Their scalable BPO solutions adapted perfectly to our growing business needs, ensuring consistent performance.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 4,
  },
  {
    name: 'Zara Siddiqui',
    profession: 'Operations Head, LogiCorp',
    comment:
      'Their expertise in process optimization reduced our overhead costs and enhanced operational efficiency.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 4,
  },
]

const ArticlesData: articles[] = [
  {
    time: '5 min',
    heading: 'Why Outsource Customer Support?',
    heading2: 'Enhancing Efficiency with BPO',
    name: 'Taimor Osman Khan',
    date: 'August 1, 2025',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '4 min',
    heading: 'Streamlining Business Operations',
    heading2: 'The Power of BPO Solutions',
    name: 'Taimor Osman Khan',
    date: 'July 25, 2025',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '6 min',
    heading: 'Scaling Your Business',
    heading2: 'Flexible BPO for Growth',
    name: 'Taimor Osman Khan',
    date: 'July 15, 2025',
    imgSrc: '/images/articles/article3.png',
  },
  {
    time: '5 min',
    heading: 'Boosting Customer Experience',
    heading2: '24/7 Support Strategies',
    name: 'Taimor Osman Khan',
    date: 'July 1, 2025',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '4 min',
    heading: 'Optimizing Data Management',
    heading2: 'BPO for Data-Driven Success',
    name: 'Taimor Osman Khan',
    date: 'June 20, 2025',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '5 min',
    heading: 'Cost Savings with BPO',
    heading2: 'Maximizing Your Budget',
    name: 'Taimor Osman Khan',
    date: 'June 10, 2025',
    imgSrc: '/images/articles/article3.png',
  },
]

const FooterLinksData: footerlinks[] = [
  {
    section: 'Menu',
    links: [
      { label: 'About Us', href: '#About' },
      { label: 'Team', href: '#Team' },
      { label: 'FAQ', href: '#FAQ' },
      { label: 'Blog', href: '#Blog' },
    ],
  },
  {
    section: 'Services',
    links: [
      { label: 'Customer Support', href: '/services/customer-support' },
      { label: 'IT Solutions', href: '/services/it-solutions' },
      { label: 'Data Management', href: '/services/data-management' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    section: 'Resources',
    links: [
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Whitepapers', href: '/whitepapers' },
      { label: 'Guides', href: '/guides' },
    ],
  },
  {
    section: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    headerData,
    Aboutdata,
    WorkData,
    FeaturedData,
    PlansData,
    TestimonialsData,
    ArticlesData,
    FooterLinksData,
  })
}