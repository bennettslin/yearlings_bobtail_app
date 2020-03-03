// Button to select book or song in nav section.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import isFinite from 'lodash/isfinite'

import { getSongTitle } from 'album/api/songs'

import { getIndexCharacter } from '../Character/helper'

const NavButtonTitle = ({ bookIndex, songIndex }) => {

    const title = isFinite(bookIndex) ?
        `Book ${getIndexCharacter({ bookIndex })}` :
        getSongTitle({ songIndex, showIndex: false })

    return Boolean(title) && (
        <div
            {...{
                className: cx(
                    'NavButtonTitle',
                    'abF'
                )
            }}
        >
            <div
                {...{
                    className: cx(
                        'NavButtonTitle__text',
                        'Rancho',
                        'textShadow__light',
                        'flexCentreContainer'
                    )
                }}
            >
                {title.replace(/\s/g, '\u00a0')}
            </div>
        </div>
    )
}

NavButtonTitle.propTypes = {
    bookIndex: PropTypes.number,
    songIndex: PropTypes.number
}

export default NavButtonTitle
