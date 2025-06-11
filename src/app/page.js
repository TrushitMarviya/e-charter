"use-client";
import React from 'react'
import Hero from '@/Components/home/hero';
import Choice from '@/Components/home/choice'
import Service from '@/Components/home/service'
import Fleet from '@/Components/home/fleet'
import Quality from'@/Components/home/quality'

export default function page() {
  return (
    <>
    <Hero/>
    <Choice/>
    <Service/>
    <Fleet/>
    <Quality/>
    </>
  )
}
