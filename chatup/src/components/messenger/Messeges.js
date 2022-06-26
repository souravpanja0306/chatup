import {format} from "timeago.js"
import Avater from '../../assets/images/avater.png'


const Messeges = ({ messeges, me }) => {
  const image = false

  return (
    <>
      <div>
        <div id="chats" className={me ? "m-1 flex justify-end" : "m-1 flex"}>
          <div className='p-2'>
            <img src={image ? image : Avater} className="h-8 w-8" alt="Users"/>
          </div>
          <div>
            <h1 className={me
              ? "border-gray-300 border-2 border-solid flex text-gray-600 bg-gray-200 shadow-gray-200 shadow-lg p-1 max-w-xs rounded-xl rounded-tl-none text-sm"
              : "flex text-gray-100 bg-blue-600 shadow-blue-200 shadow-lg p-1 max-w-xs rounded-xl rounded-tl-none text-sm"}>
              {messeges.text}</h1>
            <span className='text-sm text-gray-400'>{format(messeges.createdAt)}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Messeges