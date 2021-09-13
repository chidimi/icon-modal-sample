import React, { useState } from 'react';
import './App.css';
import ModalButton from './components/ModalButton';
import './index.css';
import { FcBusinessman, FcBusinesswoman, FcAssistant, FcLike, FcElectricity, FcHeadset, FcLinux, FcStart, FcVip } from 'react-icons/fc'
import { IconType } from 'react-icons';
import { IconContext } from 'react-icons/lib';


const icons = {
  fcBusinessman: FcBusinessman,
  fcBusinesswoman: FcBusinesswoman,
  fcAssistant: FcAssistant,
  fcLike: FcLike,
  fcElectricity: FcElectricity,
  fcHeadset: FcHeadset,
  fcLinux: FcLinux,
  fcStart: FcStart,
  fcVip: FcVip
}

function App() : JSX.Element {
  const [icon, setIcon] = useState<IconType>();

  return (
    <div className="App">
      <h1 className="m-10 text-5xl">Modal Sample</h1>
      {icon &&
        <div className="flex justify-center">
          <IconContext.Provider value={{ size: '100px' }}>
            {icon}
          </IconContext.Provider>
        </div>}
      <ModalButton setIcon={setIcon} />
    </div>
  );
}

export default App;
