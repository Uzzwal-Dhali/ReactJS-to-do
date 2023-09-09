import TickIcon from './TickIcon'
import ProgressBar from './ProgressBar'

const ListItem = ({task}) => {
  return (
    <li className="list_item">
      <div className="info_container">
        <TickIcon />
        <p>{task.title}</p>
        <ProgressBar />
      </div>
    </li>
  );
}

export default ListItem;
