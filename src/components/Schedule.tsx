'use client'

import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'

interface Day {
  date: React.ReactNode
  dateTime: string
  summary: string
  timeSlots: Array<{
    name: string
    description: string | null
    start: string
    end: string
  }>
}

const schedule: Array<Day> = [
  {
    date: 'Cognitive Data Analytics',
    dateTime: '2022-04-04',
    summary:
      'Large Language Models & FinTech Analytics',
    timeSlots: [
      {
        name: 'Natural Language Databases',
        description: 'Querying in Human Language via LLMS',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Predictive Analytics and Trend Forecasting',
        description: 'Financial Planning & Forecasting',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Unity AI & Augemeted Metaverse ',
        description: ' Virtual worlds',
        start: '11:00AM',
        end: '12:00PM',
      },
      
      
    ],
  },
  {
    date: 'Robotics & Autonomous Systems',
    dateTime: '',
    summary:
      'IoT Applications',
    timeSlots: [
      {
        name: 'ROS Trajectory Generation',
        description: 'Self Driving',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Robotics & Autonomous Sensor Engineering',
        description: 'Movements and Sensors',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Computer Vision & NLP',
        description: 'Deep & Reinforecements Learning',
        start: '11:00AM',
        end: '12:00PM',
      },
      
    ],
  },
  {
    date: 'Quantum & Blockchain Computing',
    dateTime: '      ',
    summary:
      ' Web 3.0 Applications ',
    timeSlots: [
      {
        name: 'Quantum IBM Applications',
        description: 'Neuralink dark patterns',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Blockchain Developements',
        description: 'NFT Contract Development',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Quantum Security',
        description: 'Quantum password cracking',
        start: '11:00AM',
        end: '12:00PM',
      },
      
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) => (
          <>
            {schedule.map((day, dayIndex) => (
              <div
                key={day.dateTime}
                className={clsx(
                  'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                  dayIndex !== selectedIndex && 'opacity-70',
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                    date: (
                      <Tab className="ui-not-focus-visible:outline-none">
                        <span className="absolute inset-0" />
                        {day.date}
                      </Tab>
                    ),
                  }}
                />
              </div>
            ))}
          </>
        )}
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="ui-not-focus-visible:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }: { day: Day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blue-900">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }: { day: Day; className?: string }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blue-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
           
            
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Our Services 
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-white">
          Technologically advanced & socially responsible & sustainable
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-white">
          Technologically advanced but also socially responsible & sustainable
          </p>
          
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" className="-bottom-32 -top-40" />
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
