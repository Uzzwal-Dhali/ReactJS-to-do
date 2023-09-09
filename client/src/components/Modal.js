import { useState } from 'react'

const Modal = ({ option, setShowModal }) => {
  // const option = 'create'
  const selectedOption = option === 'edit' ? true : false
  const [data, setData] = useState({
    user_email: "",
    title: "",
    progress: "",
    date: selectedOption ? "" : new Date()
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setData (data => ({
      ...data,
      [name] : value
    }))
    console.log(data)
  }
  return (
    <div className="overlay">
      <div className="modal">
        <div className="header">
          <div className="title">Let's {option} your task</div>
          <div className="close" onClick={() => setShowModal(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="25"
              height="25"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
              </g>
            </svg>
          </div>
        </div>
        <div className="body">
          <form>
            <input
              required
              maxLength="30"
              placeholder="Task title"
              name="title"
              value={data.title}
              onChange={handleChange}
            />

            <div className="input_group">
              <label htmlFor="range">Select current progress</label>
              <input
                required
                type="range"
                id="range"
                className='progress_bar'
                min="0"
                max="100"
                name="progress"
                value={data.progress}
                onChange={handleChange}
              />
            </div>
            <input className={option} type="submit" value={option === 'create' ? 'CREATE' : 'UPDATE'} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
