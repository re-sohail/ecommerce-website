import React from 'react'
import './Shop.scss'
import Hero from '../../Component/Hero/Hero'
import Popular from '../../Component/Popular/Popular'
import ExclusivePoster from '../../Component/ExclusivePoster/ExclusivePoster'
import NewCollection from '../../Component/New Collection/NewCollection'
import Newsletter from '../../Component/Newsletter/Newsletter'

function Shop() {
  return (
    <>
    <Hero />
    <Popular />
    <ExclusivePoster />
    <NewCollection />
    <Newsletter />
    </>
  )
}

export default Shop