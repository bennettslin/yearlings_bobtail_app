import React from 'react'
import PropTypes from 'prop-types'

const NAV_BOOK_MAP = {
    [true]: (
        <circle
            {...{
                cx: 50,
                cy: 50,
                r: 25,
                fill: 'orange',
                stroke: 'red'
            }}
        />
    ),
    [false]: (
        <rect
            {...{
                x: 25,
                y: 25,
                width: 50,
                height: 50,
                fill: 'green',
                stroke: 'yellow'
            }}
        />
    )
}

const propTypes = {
    buttonIdentifier: PropTypes.number.isRequired
}

const NavBookIcon = ({

    buttonIdentifier: bookIndex

}) => {

    const isRight = Boolean(bookIndex)

    return (
        NAV_BOOK_MAP[isRight]
    )
}

NavBookIcon.propTypes = propTypes

export default NavBookIcon
