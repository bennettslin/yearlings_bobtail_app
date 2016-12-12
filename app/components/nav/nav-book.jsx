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
    rowReverse,
    beginArrayIndex,
    endArrayIndex,

...other }) => (
    <div className={`${isNavToggle ? 'nav-toggle-book' : 'nav-book'}${isToggle ? ' toggle' : ''}${isLogue ? ' logue' : ''}${songs ? ' songs' : ''}`}>
        {songs ?
            Array.from(Array(endArrayIndex - beginArrayIndex).keys()).map(currentIndex => {
                const songIndex = rowReverse ? endArrayIndex - 1 - currentIndex : currentIndex + beginArrayIndex
                    return (
                        <NavItem {...other}
                            key={currentIndex}
                            song={songs[songIndex]}
                            index={songIndex}
                        />
                    )
            }) :
            <NavItem {...other}
                isNavToggle={isNavToggle}
                isToggle={isToggle}
            />
        }
    </div>
)

export default NavBook
