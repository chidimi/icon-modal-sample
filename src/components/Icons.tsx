import React, { Dispatch, SetStateAction } from 'react'
import { IconType } from 'react-icons'
import { FcBusinessman, FcBusinesswoman, FcAssistant, FcLike, FcElectricity, FcHeadset, FcLinux, FcStart, FcVip } from 'react-icons/fc'

interface Props {
  setIcon: Dispatch< SetStateAction<IconType | undefined>>
  setShow: (boolean: boolean) => void
}

export default function Icons({setIcon, setShow} : Props) : JSX.Element {
  return (
    <>
      <div className="flex">
        <button onClick={() => {
            setIcon(FcBusinessman)
            setShow(false)
          }} className="flex-auto">
          <FcBusinessman size={100}/>
        </button>
        <button onClick={() => {
            setIcon(FcBusinesswoman)
            setShow(false)}}
            className="flex-auto">
          <FcBusinesswoman size={100}/>
        </button>
        <button onClick={() => {
            setIcon(FcAssistant)
            setShow(false)
          }} className="flex-auto">
          <FcAssistant size={100}/>
        </button>
      </div>
      <div className="flex">
        <button onClick={() => {
          setIcon(FcLike)
          setShow(false)}} className="flex-auto">
          <FcLike size={100}/>
        </button>
        <button onClick={() => {
          setIcon(FcLinux)
          setShow(false)
          }}  className="flex-auto">
          <FcLinux size={100}/>
        </button>
        <button onClick={() => {setIcon(FcStart)
          setShow(false)
        }}  className="flex-auto">
          <FcStart size={100}/>
        </button>
      </div>
      <div className="flex">
        <button onClick={() => {
          setIcon(FcElectricity)
          setShow(false)
        }}  className="flex-auto">
          <FcElectricity size={100}/>
        </button>
        <button onClick={() => {setIcon(FcVip)
          setShow(false)
      }}  className="flex-auto">
          <FcVip size={100}/>
        </button>
        <button onClick={() => {
          setIcon(FcHeadset)
          setShow(false)
        }} className="flex-auto">
          <FcHeadset size={100}/>
        </button>
      </div>
    </>
  )
}
