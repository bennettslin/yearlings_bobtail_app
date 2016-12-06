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
    isToggle,
    isLogue,
    songs,
    beginArrayIndex,
    endArrayIndex,

...other }) => (
    <div className={`nav-book${isNavToggle ? ' nav-toggle' : ''}${isToggle ? ' toggle' : ''}${isLogue ? ' logue' : ''}${songs ? ' songs' : ''}`}>
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
