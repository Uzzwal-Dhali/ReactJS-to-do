const ListHeader = ({ listName }) => {

  const signOut = () => {
    console.log('signOut')
  }

  return (
    <div className="list_header">
      <h1>{ listName }</h1>
      <div className="buttons_container">
        <button className="create">Add New</button>
        <button className="signout" onClick="{signOut}">Sgnout</button>
      </div>
    </div>
  );
}

export default ListHeader;
