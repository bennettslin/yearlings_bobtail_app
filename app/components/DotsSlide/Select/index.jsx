// Button in dots section to select and deselect dot.
import React, { memo, useRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import DotSelectDispatcher from '../../../dispatchers/DotSelect'
import StopPropagationDispatcher from '../../../dispatchers/StopPropagation'
import Button from '../../Button'
import Dot from '../../Dot'
import Anchor from '../../Anchor'
import { ENTER } from '../../../constants/access'
import { DOTS_SLIDE_SELECT_BUTTON_KEY } from '../../../constants/buttons'
import { DOT_DESCRIPTIONS } from '../../../constants/dots'
import './style'

const DotsSlideSelect = ({
    dotIndex,
    dotKey,
    isAccessed,
    isSelected,
    isActivated
}) => {
    const
        dispatchDot = useRef(),
        stopPropagation = useRef()

    const handleButtonClick = () => {
        dispatchDot.current.select(dotIndex)
    }

    const handleAnchorClick = e => {
        dispatchDot.current.activate(dotIndex)

        // Stop propagation if anchor click is valid.
        stopPropagation.current(e)

        return true
    }

    return (
        <>
            <div
                {...{
                    className: cx(
                        'DotsSlideSelect'
                    )
                }}
            >
                <Button
                    isCustomSize
                    isBrightHover
                    {...{
                        className: cx({
                            /**
                             * These classes are passed purely to let the
                             * Button know to update its children. Not
                             * ideal, but it will do for now.
                             */
                            isSelected,
                            isActivated
                        }),
                        buttonName: DOTS_SLIDE_SELECT_BUTTON_KEY,
                        accessKey: ENTER,
                        isAccessed,
                        handleButtonClick
                    }}
                >
                    {/* Button handles all drop shadow styling. */}
                    <Dot
                        noDropShadow
                        {...{
                            dotKey,
                            isDeselected: !isSelected
                        }}
                    />

                    <div className={cx(
                        'SlideSelectDescription',

                        isAccessed &&
                            'SlideSelectDescription__accessed',

                        isActivated &&
                            'SlideSelectDescription__activated',

                        'abF',
                        'fCC'
                    )}>
                        {DOT_DESCRIPTIONS[dotKey]}
                    </div>
                </Button>

                <Anchor
                    {...{
                        isAccessed,
                        isSelected: isActivated,
                        text: dotKey,
                        handleAnchorClick
                    }}
                />
            </div>
            <DotSelectDispatcher {...{ ref: dispatchDot }} />
            <StopPropagationDispatcher {...{ ref: stopPropagation }} />
        </>
    )
}

DotsSlideSelect.propTypes = {
    dotIndex: PropTypes.number.isRequired,
    dotKey: PropTypes.string.isRequired,
    isAccessed: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isActivated: PropTypes.bool.isRequired
}

export default memo(DotsSlideSelect)
