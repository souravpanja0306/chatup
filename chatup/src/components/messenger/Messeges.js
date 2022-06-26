import react from 'react'
import Avater from '../../Assets/images/avater.png'


const Messeges = ({ me }) => {
  const image = false

  return (
    <>
      <div>
        <div id="chats" className={me ? "m-1 flex justify-end" : "m-1 flex"}>
          <div className='p-2'>
            <img src={image ? image : Avater} className="h-8 w-8" />
          </div>
          <div>
            <h1 className={me ? "border-gray-300 border-2 border-solid flex text-gray-600 bg-gray-200 shadow-gray-200 shadow-lg p-2 max-w-xs rounded-xl rounded-tl-none text-sm"
              : "flex text-gray-100 bg-blue-600 shadow-blue-200 shadow-lg p-2 max-w-xs rounded-xl rounded-tl-none text-sm"}>
              Sourav Panja Sourav Panja Sourav Panja Sourav Panja Sourav Panja Sourav Panja</h1>
            <span className='text-sm text-gray-400'>1m ago</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Messeges