import { useState } from 'react'
import Modal from './Modal'

const ListHeader = ({ listName }) => {
  const [ showModal, setShowModal ] = useState(false)

  const signOut = () => {
    console.log('signOut')
  }

  return (
    <div className="list_header">
      <h1>{ listName }</h1>
      <div className="buttons_container">
        <div className="button create" onClick={() => setShowModal(true)}>Add New</div>
        <div className="button signout" onClick={signOut}>Sgnout</div>
      </div>
      {showModal && <Modal option={'create'} setShowModal={setShowModal} />}
    </div>
  );
}

export default ListHeader;
