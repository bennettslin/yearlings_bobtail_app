import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

import {
    LEFT,
    RIGHT
} from '../../../constants/lyrics'

const
    LEFT_BOOK_ICON = ({
        className
    }) => (
        <circle
            {...{
                className,
                cx: 50,
                cy: 50,
                r: 25
            }}
        />
    ),
    RIGHT_BOOK_ICON = ({
        className
    }) => (
        <rect
            {...{
                className,
                x: 25,
                y: 25,
                width: 50,
                height: 50
            }}
        />
    ),
    NAV_BOOK_MAP = {
        [LEFT]: LEFT_BOOK_ICON,
        [RIGHT]: RIGHT_BOOK_ICON
    }

const propTypes = {
    buttonIdentifier: PropTypes.number.isRequired,
    className: PropTypes.string
}

const NavBookIcon = ({

    buttonIdentifier: bookIndex,
    className

}) => {
    const
        bookDirection = bookIndex ? RIGHT : LEFT,
        IconComponent = NAV_BOOK_MAP[bookDirection]

    return (
        <IconComponent
            {...{
                className
            }}
        />
    )
}

NavBookIcon.propTypes = propTypes

export default NavBookIcon
