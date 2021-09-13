import React, { Dispatch, SetStateAction, useState } from 'react'
import { IconType } from 'react-icons';
import Modal from './Modal';

interface Props {
  setIcon: Dispatch< SetStateAction<IconType | undefined>>
}

export default function modalButton({setIcon} : Props): JSX.Element {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="m-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setShow(true)}>Open Modal</button>
      <Modal setIcon={setIcon} show={show} setShow={setShow} />
    </>
  )
}
