// Container to show a single character representing an access key.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

import {
    ENTER,
    ARROW_LEFT,
    ARROW_RIGHT,
    ARROW_UP,
    ARROW_DOWN,

    NAVIGATION_ENTER_KEY,
    NAVIGATION_LEFT_KEY,
    NAVIGATION_UP_KEY,
    NAVIGATION_RIGHT_KEY,
    NAVIGATION_DOWN_KEY
} from '../../../../constants/access'

const propTypes = {
    accessKey: PropTypes.string
},

AccessIcon = ({

    accessKey

}) => {

    /**
     * TODO: This might be temporary. The navigation keys will be replaced by
     * actual svgs. The letters might be able to remain as text characters.
     */
    let shownKey = accessKey

    switch (accessKey) {
        case ENTER:
            shownKey = NAVIGATION_ENTER_KEY
            break
        case ARROW_LEFT:
            shownKey = NAVIGATION_LEFT_KEY
            break
        case ARROW_RIGHT:
            shownKey = NAVIGATION_RIGHT_KEY
            break
        case ARROW_UP:
            shownKey = NAVIGATION_UP_KEY
            break
        case ARROW_DOWN:
            shownKey = NAVIGATION_DOWN_KEY
            break
    }

    /**
     * Having the field and icon live in separate svgs will make it easier to
     * centre the icon.
     */
    return (
        <Svg
            className={cx(
                'AccessIcon'
            )}
        >
            <text
                className={cx(
                    'AccessIcon__character'
                )}
                {...{
                    x: 25,
                    y: 75,
                    fontSize: 75
                }}
            >
                {shownKey}
            </text>
        </Svg>
    )
}

AccessIcon.propTypes = propTypes

export default AccessIcon
