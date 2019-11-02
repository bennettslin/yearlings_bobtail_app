import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getTipImage } from './helper'

const TipImage = ({
    songIndex

}) => {
    const IndexedTipImage = getTipImage(songIndex)

    return (
        <div
            {...{
                className: cx(
                    'TipImage',
                    `TipImage__${songIndex}`
                )
            }}
        >
            <IndexedTipImage />
        </div>
    )
}

TipImage.propTypes = {
    songIndex: PropTypes.number.isRequired
}

export default memo(TipImage)
