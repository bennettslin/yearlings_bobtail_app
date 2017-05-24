import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import NavItem from './nav-item'

/*************
 * CONTAINER *
 *************/

const NavBook = (props) => (
    <NavBookView {...props} />
)

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
    <div className={classnames(
        isNavToggle ? 'nav-toggle-book' : 'nav-book',
        { 'toggle': isToggle,
          'logue': isLogue,
          songs }
    )}>
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

NavBookView.propTypes = {
    isNavToggle: PropTypes.bool,
    isToggle: PropTypes.bool,
    isLogue: PropTypes.bool,
    songs: PropTypes.array,
    rowReverse: PropTypes.bool,
    beginArrayIndex: PropTypes.number,
    endArrayIndex: PropTypes.number
}

export default NavBook
