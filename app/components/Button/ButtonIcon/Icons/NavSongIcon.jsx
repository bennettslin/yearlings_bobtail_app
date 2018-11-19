import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    buttonIdentifier: PropTypes.number.isRequired,
    className: PropTypes.string
}

const NavSongIcon = ({

    buttonIdentifier: songIndex,
    className

}) => {
    let characterIndex = songIndex

    // Hard-coding because I don't know if this code will be kept, and I'm lazy.
    if (songIndex === 0) {
        characterIndex = 'p'

    } else if (songIndex === 19) {
        characterIndex = 'e'
    }

    return (
        <Fragment>
            <circle
                className={cx(
                    'NavSongIcon__field',
                    className
                )}
                {...{
                    cx: 50,
                    cy: 50,
                    r: 50
                }}
            />
            <text
                className={cx(
                    'NavSongIcon__char',
                    className
                )}
                {...{
                    x: 25,
                    y: 75,
                    fontSize: 64
                }}
            >
                {characterIndex}
            </text>
        </Fragment>
    )
}

NavSongIcon.propTypes = propTypes

export default NavSongIcon
