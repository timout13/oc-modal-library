import React, { useState } from "react";

import { Modal } from 'oc-modal-library'
import 'oc-modal-library/dist/index.css'

const App = () => {
 const  [isOpen,setIsOpen]= useState();
  return (
    <>
      <button onClick={()=>setIsOpen(true)}>ouvrir</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Ceci est un test, le bouton ne fait rien :</h2>
        <button>Aucune action</button>
      </Modal>
    </>
  );
}

export default App
