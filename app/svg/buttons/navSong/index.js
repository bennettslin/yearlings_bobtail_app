import navSong from 'assets/svgs/app/navSong'

const getIcon = () => navSong

export default getIcon

// import React, { Fragment as ___ } from 'react'
// import PropTypes from 'prop-types'
// import cx from 'classnames'

// const propTypes = {
//     buttonIdentifier: PropTypes.number.isRequired,
//     className: PropTypes.string
// }

// const NavSongIcon = ({

//     buttonIdentifier: songIndex,
//     className

// }) => {
//     let characterIndex = songIndex

//     // Hard-coding because I don't know if this code will be kept, and I'm lazy.
//     if (songIndex === 0) {
//         characterIndex = 'p'

//     } else if (songIndex === 19) {
//         characterIndex = 'e'
//     }

//     return (
//         <___>
//             <rect
//                 {...{
//                     className: cx(
//                         'NavSongIcon__field',
//                         className
//                     ),
//                     x: 0,
//                     y: 0,
//                     width: 100,
//                     height: 100
//                 }}
//             />
//             <text
//                 className={cx(
//                     'NavSongIcon__char',
//                     className
//                 )}
//                 {...{
//                     x: 25,
//                     y: 75,
//                     fontSize: 64
//                 }}
//             >
//                 {characterIndex}
//             </text>
//         </___>
//     )
// }

// NavSongIcon.propTypes = propTypes

// export default NavSongIcon
