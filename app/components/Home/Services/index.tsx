'use client'
import { Icon } from '@iconify/react'
import React from 'react'

const services = {
  Telemarketing: [
    {
      title: 'Cold Calling',
      description:
        'Reach out to potential clients with persuasive scripts and professional outreach. Our agents are trained to engage prospects and convert leads into opportunities using proven techniques and tools. Cold calling remains one of the most effective ways to reach new markets. Let us help you scale your outreach with precision and professionalism.',
      icon: 'ic:baseline-phone-in-talk',
    },
    {
      title: 'Warm Calling',
      description:
        'Follow up with leads already familiar with your product or service. Warm calling enhances conversion rates as it involves prospects who have shown prior interest. Our team builds trust and addresses concerns to move them down the sales funnel. Consistent follow-up leads to better customer acquisition.',
      icon: 'mdi:phone-incoming',
    },
    {
      title: 'Blind Transfer',
      description:
        'Transfer calls to your sales team without a prior introduction. This approach reduces wait times and quickly connects prospects with decision-makers. While it requires fast handling, our agents ensure smooth and respectful transitions. Blind transfers can improve sales efficiency if executed correctly.',
      icon: 'fluent:call-transfer-24-filled',
    },
    {
      title: 'Hot Transfer',
      description:
        'Live call transfers after confirming customer interest and eligibility. Our team pre-qualifies the lead, ensuring your sales team speaks only to serious prospects. This increases productivity and close rates. Hot transfers provide real-time opportunities for high-value conversions.',
      icon: 'tabler:phone-calling',
    },
    {
      title: 'Survey Calling',
      description:
        'Conduct phone surveys to collect feedback, preferences, or market data. Surveys help in understanding customer satisfaction and market trends. We handle everything from script design to execution. Accurate data collection aids in strategic decision-making.',
      icon: 'mdi:clipboard-list-outline',
    },
    {
      title: 'Appointment Setting',
      description:
        'Schedule meetings between your sales team and potential clients. Our agents confirm interest and availability before booking. We ensure your calendar is filled with valuable leads. Efficient appointment setting is key to maintaining a strong sales pipeline.',
      icon: 'material-symbols:calendar-month',
    },
  ],
  'Inbound Call Services': [
    {
      title: 'Customer Support',
      description:
        '24/7 support to help your customers with queries, complaints, and assistance needs. Our trained professionals ensure quick resolution and empathetic communication. Happy customers build long-term brand loyalty. Let us enhance your customer experience.',
      icon: 'mdi:headset',
    },
    {
      title: 'Order Processing',
      description:
        'Accurate and fast order management via inbound calls for a smooth customer experience. We help customers with placing orders, tracking, and returns. Ensuring order accuracy reduces friction and increases satisfaction. Our system supports high-volume handling with ease.',
      icon: 'mdi:clipboard-check-outline',
    },
    {
      title: 'Helpdesk Services',
      description:
        'Technical and general helpdesk support to resolve issues and boost client satisfaction. Our support team is trained to manage troubleshooting, FAQs, and guidance. Helpdesk services are vital to customer retention. We ensure clarity, accuracy, and patience in every call.',
      icon: 'mdi:lifebuoy',
    },
  ],
  'IT & Software Development': [
    {
      title: 'Custom Web Apps',
      description:
        'Scalable and secure web applications tailored to your business needs. We use modern frameworks to deliver fast, responsive, and user-friendly experiences. Every solution is designed to align with your business goals. From concept to deployment, we handle it all.',
      icon: 'mdi:web',
    },
    {
      title: 'Mobile App Development',
      description:
        'iOS and Android apps built with performance and usability in mind. We design intuitive user interfaces and robust backend systems. Apps are tested for speed, security, and user satisfaction. Reach your audience wherever they are with powerful mobile apps.',
      icon: 'mdi:cellphone-cog',
    },
    {
      title: 'SaaS Solutions',
      description:
        'Build cloud-based Software as a Service platforms with modern stacks. We focus on scalability, reliability, and user experience. Our team helps you bring your SaaS vision to life—from planning to post-launch. SaaS products that scale with your success.',
      icon: 'carbon:cloud-service-management',
    },
  ],
  'Digital Marketing': [
    {
      title: 'SEO Services',
      description:
        'Rank higher on Google and drive organic traffic with tailored strategies. We optimize your site structure, content, and backlinks. SEO isn’t just about rankings—it’s about revenue growth. Let us help you dominate search results in your niche.',
      icon: 'material-symbols:search',
    },
    {
      title: 'Social Media Marketing',
      description:
        'Boost your brand on Facebook, Instagram, LinkedIn, and more. Our campaigns are data-driven and creative to increase engagement. We plan, post, and promote content that converts. Connect with your audience through compelling stories and visuals.',
      icon: 'mdi:instagram',
    },
    {
      title: 'PPC Campaigns',
      description:
        'Maximize ROI with paid advertising through Google Ads and Meta. We manage bidding, targeting, and ad creatives for best performance. Get measurable results fast with expert PPC strategies. Every dollar spent is optimized for leads or sales.',
      icon: 'mdi:currency-usd',
    },
  ],
  'Resource Augmentation': [
    {
      title: 'Remote Staffing',
      description:
        'Hire dedicated professionals for your project without overhead costs. We handle recruitment, onboarding, and HR operations. Our remote talent integrates seamlessly with your team. Reduce costs and increase productivity with skilled global staff.',
      icon: 'mdi:account-group',
    },
    {
      title: 'Dedicated Developers',
      description:
        'Get full-time expert developers working directly under your lead. You control the project, we provide the coders. Our developers are proficient in modern tech stacks. Focus on results without worrying about hiring headaches.',
      icon: 'mdi:human-male-board',
    },
    {
      title: 'Virtual Assistants',
      description:
        'Free up your time with skilled VAs handling admin, calls, and tasks. We match you with assistants that fit your workflow. Virtual help boosts efficiency and reduces stress. Perfect for solopreneurs or busy teams.',
      icon: 'mdi:account-tie',
    },
  ],
}

const cardHoverColors = [
  'hover:bg-pink-300',
  'hover:bg-blue-300',
  'hover:bg-purple-300',
  'hover:bg-green-300',
  'hover:bg-yellow-300',
  'hover:bg-indigo-300',
  'hover:bg-red-300',
  'hover:bg-teal-300',
  'hover:bg-orange-300',
  'hover:bg-cyan-300',
]

const Services = () => {
  return (
    <section
      id='Services'
      className='py-16 bg-gradient-to-br from-[#f6f1ff] via-[#eaf5ff] to-[#e0ecff]'>
      <div className='container mx-auto px-4 max-w-7xl'>
        <h2 className='text-center text-4xl font-bold text-gray-800 mb-4'>
          Our Services
        </h2>
        <p className='text-center text-lg text-gray-600 mb-12'>
          Explore our wide range of services crafted for US-based businesses.
        </p>

        {Object.entries(services).map(([category, items]) => (
          <div key={category} className='mb-16'>
            <h3 className='text-2xl font-semibold text-primary mb-6'>
              {category}
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
              {items.map((service, idx) => (
                <div
                  key={idx}
                  className={`bg-white transition-all duration-300 p-6 rounded-2xl shadow-md group ${
                    cardHoverColors[idx % cardHoverColors.length]
                  }`}>
                  <div className='text-4xl text-blue-600 group-hover:text-white mb-4 transition-all duration-300'>
                    <Icon icon={service.icon} />
                  </div>
                  <h4 className='text-xl font-semibold text-gray-800 group-hover:text-white mb-2 transition-all duration-300'>
                    {service.title}
                  </h4>
                  <p className='text-gray-600 group-hover:text-white text-sm transition-all duration-300'>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
