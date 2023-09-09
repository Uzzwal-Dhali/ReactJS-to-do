const ListHeader = ({ listName }) => {

  const signOut = () => {
    console.log('signOut')
  }

  return (
    <div className="list_header">
      <h1>{ listName }</h1>
      <div className="buttons_container">
        <div className="button create">Add New</div>
        <div className="button signout" onClick="{signOut}">Sgnout</div>
      </div>
    </div>
  );
}

export default ListHeader;
