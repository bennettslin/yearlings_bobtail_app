// Container for image above each button.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'
import ThumbIcon from './Icon'

import { getSongTitle } from 'helpers/data'

const propTypes = {
    // From parent.
        isAccessed: PropTypes.bool,
        isSelected: PropTypes.bool,
        isLeftmost: PropTypes.bool,
        isRightmost: PropTypes.bool,
        songIndex: PropTypes.number
    },

    Thumb = memo(({

        // From props.
        isAccessed,
        isSelected,
        isLeftmost,
        isRightmost,
        songIndex

    }) => {

        const thumbTitle = getSongTitle({
            songIndex,
            showIndex: false
        })

        return (
            <div className={cx(
                'Thumb',
                {
                    'Thumb__isAccessed': isAccessed,
                    'Thumb__canShow': !isSelected,
                    'Thumb__leftmost': isLeftmost,
                    'Thumb__rightmost': isRightmost,
                    'Thumb__default': !isLeftmost && !isRightmost
                }
            )}>
                <Svg
                    className={cx(
                        'ThumbImage',
                        'absoluteFullContainer'
                    )}
                >
                    <rect
                        className={cx(
                            'ThumbField'
                        )}
                        {...{
                            x: 0,
                            y: 0,
                            width: 100,
                            height: 100
                        }}
                    />
                    <ThumbIcon
                        {...{
                            songIndex
                        }}
                    />
                </Svg>
                <div className="ThumbTitle">
                    {thumbTitle}
                </div>
            </div>
        )
    })

Thumb.propTypes = propTypes

export default Thumb
