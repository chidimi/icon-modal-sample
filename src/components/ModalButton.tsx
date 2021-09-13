import React, { useState } from 'react'
import Modal from './Modal';

export default function modalButton(): JSX.Element {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Open Modal</button>
      <Modal show={show} setShow={setShow} />
    </>
  )
}
