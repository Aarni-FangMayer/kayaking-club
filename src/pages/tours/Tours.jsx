import React from 'react'
import StaticLayout from '../../components/layouts/staticLayout/StaticLayout'
import ScrollLayout from '../../components/layouts/scrollLayout/ScrollLayout'
import ChooseRouteSection from './page_sections/ChooseRouteSection'
import SingleDayRouteSection from './page_sections/SingleDayRouteSection'
import MultiDayRouteSection from './page_sections/MultiDayRouteSection'
import CustomRouteSection from './page_sections/CustomRouteSection'

const Tours = () => {
  return (
    <StaticLayout>
      <ScrollLayout sectionOne={<ChooseRouteSection />} sectionTwo={<SingleDayRouteSection />} sectionThree={<MultiDayRouteSection />} sectionFour={<CustomRouteSection />} />
    </StaticLayout>
  )
}

export default Tours
