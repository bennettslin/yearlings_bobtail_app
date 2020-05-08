// Button to select book or song in nav section.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import isFinite from '../../../../../../utils/lodash/isfinite'

import { getSongTitle } from '../../../../../../album/api/songs'

import { getIndexCharacter } from '../Character/helper'

const NavButtonTitle = ({
    bookIndex,
    songIndex,
    isSelected
}) => {

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
                        isSelected ?
                            'Nav__text__selected' :
                            'Nav__text__interactable',
                        'Rancho',
                        'textShadow__dark',
                        'flexCentreContainer'
                    )
                }}
            >
                {title}
            </div>
        </div>
    )
}

NavButtonTitle.propTypes = {
    bookIndex: PropTypes.number,
    songIndex: PropTypes.number,
    isSelected: PropTypes.bool
}

export default NavButtonTitle
