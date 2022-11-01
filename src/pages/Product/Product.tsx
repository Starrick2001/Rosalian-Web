import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import Testimonial from '../../components/Testimonial/Testimonial'

interface productProps {
  img: string
  title: string
  description: string
  rate: number
  price: number
}

const Product: React.FC<productProps> = (props) => {
  const { user } = useAuth0()

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-wrap">
        <div className="flex-none p-8 rounded-t-lg shadow-md h-96 w-96 mx-auto">
          <img className=" h-full mx-auto" src={props.img} />
        </div>
        <div className="flex-auto p-8 w-1/2">
          <h2 className="text-2xl mb-4 truncate max-w-lg md:max-w-sm">{props.title}</h2>
          <p className="text-lg mb-4 overflow-auto max-h-52">{props.description}</p>
          <div className="flex items-center mt-2.5 mb-5">
            <svg
              aria-hidden="true"
              className={props.rate > 0 ? 'w-5 h-5 text-yellow-300' : 'w-5 h-5 text-gray-500'}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className={props.rate > 1 ? 'w-5 h-5 text-yellow-300' : 'w-5 h-5 text-gray-500'}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className={props.rate > 2 ? 'w-5 h-5 text-yellow-300' : 'w-5 h-5 text-gray-500'}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className={props.rate > 3 ? 'w-5 h-5 text-yellow-300' : 'w-5 h-5 text-gray-500'}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className={props.rate > 4 ? 'w-5 h-5 text-yellow-300' : 'w-5 h-5 text-gray-500'}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Fifth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {props.rate}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${props.price}</span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Order now
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
        <Testimonial
          title="title"
          content="content"
          rate={5}
          userAvatar={user?.picture as string}
          userName={user?.name as string}
        />
        <Testimonial
          title="title"
          content="content"
          rate={5}
          userAvatar={user?.picture as string}
          userName={user?.name as string}
        />
        <Testimonial
          title="title"
          content="content"
          rate={5}
          userAvatar={user?.picture as string}
          userName={user?.name as string}
        />
        <Testimonial
          title="title"
          content="content"
          rate={5}
          userAvatar={user?.picture as string}
          userName={user?.name as string}
        />
        <Testimonial
          title="title"
          content="content"
          rate={5}
          userAvatar={user?.picture as string}
          userName={user?.name as string}
        />
        <Testimonial
          title="title"
          content="content"
          rate={5}
          userAvatar={user?.picture as string}
          userName={user?.name as string}
        />
      </div>
    </div>
  )
}

export default Product
