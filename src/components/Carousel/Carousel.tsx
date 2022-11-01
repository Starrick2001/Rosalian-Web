// import React, { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircleRight, faCircleLeft } from '@fortawesome/free-solid-svg-icons'

// const MAX_VISIBILITY = 3

// const Carousel: React.FC<{}> = ({ children }) => {
//   const [active, setActive] = useState(2)
//   const count = React.Children.count(children)

//   return (
//     <div className="w-96 h-96 relative">
//       {active > 0 && (
//         <button className="nav left" onClick={() => setActive((i: number) => i - 1)}>
//           <FontAwesomeIcon icon={faCircleLeft} />
//         </button>
//       )}
//       {React.Children.map(children, (child, i) => (
//         <div
//           className="absolute w-full h-full "
//           style={{
//             '--active': i === active ? 1 : 0,
//             '--offset': (active - i) / 3,
//             '--direction': Math.sign(active - i),
//             '--abs-offset': Math.abs(active - i) / 3,
//             'pointer-events': active === i ? 'auto' : 'none',
//             opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
//             display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block'
//           }}>
//           {child}
//         </div>
//       ))}
//       {active < count - 1 && (
//         <button className="nav right" onClick={() => setActive((i) => i + 1)}>
//           <FontAwesomeIcon icon={faCircleRight} />
//         </button>
//       )}
//     </div>
//   )
// }

// export default Carousel
export {}
