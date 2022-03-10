import React from 'react'
import BasicDetails from '../BasicDetails'
import Education from '../Education'
import InternShip from '../internship'

import Training from '../Project'



const ResumeComponent = () => {
  return (
    <div>
       
        <BasicDetails/>
        <Education/>
        <Training/>
        <InternShip/>
        
    </div>
  )
}

export default ResumeComponent