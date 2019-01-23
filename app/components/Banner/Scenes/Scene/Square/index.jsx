import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    // From parent.
    isOdd: PropTypes.bool.isRequired,
    isInteractivated: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isAfterSelected: PropTypes.bool.isRequired
}

const BannerSceneSquare = ({
    isOdd,
    isInteractivated,
    isSelected,
    isAfterSelected
}) => (
    <div
        {...{
            className: cx(
                'BannerSceneSquare',
                isOdd ?
                    'BannerSceneSquare__even' :
                    'BannerSceneSquare__odd',
                isInteractivated &&
                    'BannerSceneSquare__interactivated',
                isSelected &&
                    'BannerSceneSquare__selected',
                isAfterSelected &&
                    'BannerSceneSquare__afterSelected',
                'abF'
            )
        }}
    />
)

BannerSceneSquare.propTypes = propTypes

export default memo(BannerSceneSquare)
