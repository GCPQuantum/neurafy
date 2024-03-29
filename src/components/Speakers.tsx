'use client'

import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import andrewGreeneImage from '@/images/avatars/andrew-greene.jpg'
import cathleneBurrageImage from '@/images/avatars/cathlene-burrage.jpg'
import damarisKimuraImage from '@/images/avatars/damaris-kimura.jpg'
import dianneGuilianelliImage from '@/images/avatars/dianne-guilianelli.jpg'
import erhartCockrinImage from '@/images/avatars/erhart-cockrin.jpg'
import giordanoSagucioImage from '@/images/avatars/giordano-sagucio.jpg'
import gordonSandersonImage from '@/images/avatars/gordon-sanderson.jpg'
import heatherTerryImage from '@/images/avatars/heather-terry.jpg'
import ibrahimFraschImage from '@/images/avatars/ibrahim-frasch.jpg'
import jaquelinIschImage from '@/images/avatars/jaquelin-isch.jpg'
import kimberlyParsonsImage from '@/images/avatars/kimberly-parsons.jpg'
import parkerJohnsonImage from '@/images/avatars/parker-johnson.jpg'
import piersWilkinsImage from '@/images/avatars/piers-wilkins.jpg'
import richardAstley from '@/images/avatars/richard-astley.jpg'
import rinaldoBeynonImage from '@/images/avatars/rinaldo-beynon.jpg'
import ronniCantadoreImage from '@/images/avatars/ronni-cantadore.jpg'
import stevenMchailImage from '@/images/avatars/steven-mchail.jpg'
import waylonHydenImage from '@/images/avatars/waylon-hyden.jpg'

const days = [
  {
    name: 'Virtual & Augemented Reality',
    date: 'Metaverse',
    dateTime: '2022-04-04',
    speakers: [
      {
        name: 'Steven McHail',
        role: 'Unity AI & Unreal Engine',
        image: stevenMchailImage,
      },
      {
        name: 'Jaquelin Isch',
        role: 'UX UI with Metaverse',
        image: jaquelinIschImage,
      },
      {
        name: 'Dianne Guilianelli',
        role: 'General Manager',
        image: dianneGuilianelliImage,
      },
      {
        name: 'Ronni Cantadore',
        role: 'Apple Vision OS Virtual AI Engineer',
        image: ronniCantadoreImage,
      },
      {
        name: 'Erhart Cockrin',
        role: 'Product Lead',
        image: erhartCockrinImage,
      },
      {
        name: 'Parker Johnson',
        role: 'UI Designer',
        image: parkerJohnsonImage,
      },
    ],
  },
  {
    name: 'Autonomous & IoT Systems',
    date: 'Robotics & Mechatronics',
    dateTime: '2022-04-05',
    speakers: [
      {
        name: 'Damaris Kimura',
        role: 'Senior Engineer - Mechatronics',
        image: damarisKimuraImage,
      },
      {
        name: 'Ibrahim Frasch',
        role: 'Programmer ROS',
        image: ibrahimFraschImage,
      },
      {
        name: 'Cathlene Burrage',
        role: 'LLM Models with Smart Grid Management',
        image: cathleneBurrageImage,
      },
      {
        name: 'Rinaldo Beynon',
        role: 'Data Scientist',
        image: rinaldoBeynonImage,
      },
      {
        name: 'Waylon Hyden',
        role: 'DevOps ',
        image: waylonHydenImage,
      },
      {
        name: 'Giordano Sagucio',
        role: 'Robotics Engineer',
        image: giordanoSagucioImage,
      },
    ],
  },
  {
    name: 'Quantum & Cloud Computing',
    date: 'Azure & Google Cloud',
    dateTime: '2022-04-06',
    speakers: [
      {
        name: 'Andrew Greene',
        role: 'IBM Quantum Computing',
        image: andrewGreeneImage,
      },
      {
        name: 'Heather Terry',
        role: 'Azure & Google Cloud Expert',
        image: heatherTerryImage,
      },
      {
        name: 'Piers Wilkins',
        role: 'D-Wave Quantum Developer',
        image: piersWilkinsImage,
      },
      {
        name: 'Gordon Sanderson',
        role: 'DevOps MLOps AIOps',
        image: gordonSandersonImage,
      },
      {
        name: 'Kimberly Parsons',
        role: 'DevOps MLOps AIOps Engineer',
        image: kimberlyParsonsImage,
      },
      {
        name: 'Richard Astley',
        role: 'DevOps MLOps AIOps Engineer',
        image: richardAstley,
      },
    ],
  },
]

function ImageClipPaths({
  id,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & { id: string }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Speakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
 null
    
  )
}
