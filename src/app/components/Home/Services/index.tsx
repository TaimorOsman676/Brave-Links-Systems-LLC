'use client'
import { Icon } from '@iconify/react'
import React from 'react'

const services = {
  Telemarketing: [
    {
      title: 'Cold Calling',
      description:
        'Reach out to potential clients with persuasive scripts and professional outreach.',
      icon: 'ic:baseline-phone-in-talk',
    },
    {
      title: 'Warm Calling',
      description:
        'Follow up with leads already familiar with your product or service.',
      icon: 'mdi:phone-incoming',
    },
    {
      title: 'Blind Transfer',
      description:
        'Transfer calls to your sales team without a prior introduction.',
      icon: 'fluent:call-transfer-24-filled',
    },
    {
      title: 'Hot Transfer',
      description:
        'Live call transfers after confirming customer interest and eligibility.',
      icon: 'tabler:phone-calling',
    },
    {
      title: 'Survey Calling',
      description:
        'Conduct phone surveys to collect feedback, preferences, or market data.',
      icon: 'mdi:clipboard-list-outline',
    },
    {
      title: 'Appointment Setting',
      description:
        'Schedule meetings between your sales team and potential clients.',
      icon: 'material-symbols:calendar-month',
    },
  ],
  'Inbound Call Services': [
    {
      title: 'Customer Support',
      description:
        '24/7 support to help your customers with queries, complaints, and assistance needs.',
      icon: 'mdi:headset',
    },
    {
      title: 'Order Processing',
      description:
        'Accurate and fast order management via inbound calls for a smooth customer experience.',
      icon: 'mdi:clipboard-check-outline',
    },
    {
      title: 'Helpdesk Services',
      description:
        'Technical and general helpdesk support to resolve issues and boost client satisfaction.',
      icon: 'mdi:lifebuoy',
    },
  ],
  'IT & Software Development': [
    {
      title: 'Custom Web Apps',
      description:
        'Scalable and secure web applications tailored to your business needs.',
      icon: 'mdi:web',
    },
    {
      title: 'Mobile App Development',
      description:
        'iOS and Android apps built with performance and usability in mind.',
      icon: 'mdi:cellphone-cog',
    },
    {
      title: 'SaaS Solutions',
      description:
        'Build cloud-based Software as a Service platforms with modern stacks.',
      icon: 'carbon:cloud-service-management',
    },
  ],
  'Digital Marketing': [
    {
      title: 'SEO Services',
      description:
        'Rank higher on Google and drive organic traffic with tailored strategies.',
      icon: 'material-symbols:search',
    },
    {
      title: 'Social Media Marketing',
      description:
        'Boost your brand on Facebook, Instagram, LinkedIn, and more.',
      icon: 'mdi:instagram',
    },
    {
      title: 'PPC Campaigns',
      description:
        'Maximize ROI with paid advertising through Google Ads and Meta.',
      icon: 'mdi:currency-usd',
    },
  ],
  'Resource Augmentation': [
    {
      title: 'Remote Staffing',
      description:
        'Hire dedicated professionals for your project without overhead costs.',
      icon: 'mdi:account-group',
    },
    {
      title: 'Dedicated Developers',
      description:
        'Get full-time expert developers working directly under your lead.',
      icon: 'mdi:human-male-board',
    },
    {
      title: 'Virtual Assistants',
      description:
        'Free up your time with skilled VAs handling admin, calls, and tasks.',
      icon: 'mdi:account-tie',
    },
  ],
}

const Services = () => {
  return (
    <section id='services' className='py-16 bg-gray-50'>
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
                  className='bg-white hover:bg-blue-600 transition-all duration-300 p-6 rounded-2xl shadow-md group'>
                  <div className='text-4xl text-blue-600 group-hover:text-white mb-4'>
                    <Icon icon={service.icon} />
                  </div>
                  <h4 className='text-xl font-semibold text-gray-800 group-hover:text-white mb-2'>
                    {service.title}
                  </h4>
                  <p className='text-gray-600 group-hover:text-white text-sm'>
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
