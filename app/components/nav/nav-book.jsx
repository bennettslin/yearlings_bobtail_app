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
    isToggle,
    isLogue,
    songs,
    rowReverse,
    beginArrayIndex,
    endArrayIndex,

...other }) => (

    <div className={classnames(
        'nav-book',
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
                            index={songIndex}
                        />
                    )
            }) :
            <NavItem {...other}
                isToggle={isToggle}
            />
        }
    </div>
)

NavBookView.propTypes = {
    isToggle: PropTypes.bool,
    isLogue: PropTypes.bool,
    songs: PropTypes.array,
    rowReverse: PropTypes.bool,
    beginArrayIndex: PropTypes.number,
    endArrayIndex: PropTypes.number
}

export default NavBook
