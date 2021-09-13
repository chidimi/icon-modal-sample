import React from 'react'
import { FcBusinessman, FcBusinesswoman, FcAssistant, FcLike, FcElectricity, FcHeadset, FcLinux, FcStart, FcVip } from 'react-icons/fc'

export default function Icons() : JSX.Element {
  return (
    <>
      <div className="flex">
        <div className="flex-auto">
          <FcBusinessman size={100}/>
        </div>
        <div className="flex-auto">
          <FcBusinesswoman size={100}/>
        </div>
        <div className="flex-auto">
          <FcAssistant size={100}/>
        </div>
      </div>
      <div className="flex">
        <div className="flex-auto">
          <FcLike size={100}/>
        </div>
        <div className="flex-auto">
          <FcLinux size={100}/>
        </div>
        <div className="flex-auto">
          <FcStart size={100}/>
        </div>
      </div>
      <div className="flex">
        <div className="flex-auto">
          <FcElectricity size={100}/>
        </div>
        <div className="flex-auto">
          <FcVip size={100}/>
        </div>
        <div className="flex-auto">
          <FcHeadset size={100}/>
        </div>
      </div>
    </>
  )
}
