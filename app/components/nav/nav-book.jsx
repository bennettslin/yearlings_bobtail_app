import React from 'react'
import NavItem from './nav-item'

/*************
 * CONTAINER *
 *************/

const NavBook = (props) => {

    return (
        <NavBookView {...props} />
    )
}

/****************
 * PRESENTATION *
 ****************/

const NavBookView = ({

    // From props.
    isNavToggle,
    isLogue,
    songs,
    beginArrayIndex,
    endArrayIndex,

...other }) => (
    <div className={`nav-book${isNavToggle ? ' nav-toggle' : ''}${isLogue ? ' logue' : ''}`}>
        {songs ?
            Array.from(Array(endArrayIndex - beginArrayIndex).keys()).map(currentIndex => {
                const songIndex = currentIndex + beginArrayIndex
                    return (
                        <NavItem {...other}
                            key={currentIndex}
                            song={songs[songIndex]}
                            index={songIndex}
                        />
                    )
            }) :
            <NavItem {...other} />
        }
    </div>
)

export default NavBook
