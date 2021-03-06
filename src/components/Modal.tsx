import React, { Dispatch, SetStateAction } from 'react'
import { IconType } from 'react-icons';
import Icons from './Icons';

interface Props {
  show: boolean,
  setShow: (boolean: boolean) => void,
  setIcon: Dispatch< SetStateAction<IconType | undefined>>
}

export default function Modal({ show, setShow, setIcon } : Props): JSX.Element | null {

  if (show) {
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h3 className="text-center text-3xl leading-6 font-medium text-gray-900">icons</h3>
                  <Icons setIcon={setIcon} setShow={setShow}/>
              </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button className="m-5 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setShow(false)}>Close</button>
                </div>
            </div>
          </span>
          </div>
        </div>
      </div>
    )
  } else {
    return null;
  }
}
