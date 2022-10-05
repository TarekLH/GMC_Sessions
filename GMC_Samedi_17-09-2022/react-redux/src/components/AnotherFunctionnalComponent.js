import React from 'react'
import SomeComponentsCounter, { SomeComponentsLogged } from './SomeComponents'

export default function AnotherFunctionnalComponent() {
  return (
    <div>
        <SomeComponentsCounter/>
        <SomeComponentsLogged/>
    </div>
  )
}