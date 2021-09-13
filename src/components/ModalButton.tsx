import React, { useState } from 'react'
import Modal from './Modal';

export default function modalButton(): JSX.Element {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="m-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setShow(true)}>Open Modal</button>
      <Modal show={show} setShow={setShow} />
    </>
  )
}
