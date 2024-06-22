// Button in dots section to select and deselect dot.
import React, { memo, useRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch } from 'react-redux'
import StopPropagationDispatcher from '../../../dispatchers/StopPropagation'
import Button from '../../Button'
import Dot from '../../Dot'
import Anchor from '../../Anchor'
import { ENTER } from '../../../constants/access'
import { DOTS_SLIDE_SELECT_BUTTON_KEY } from '../../../constants/buttons'
import { DOT_DESCRIPTIONS } from '../../../constants/dots'
import { updateDotIndex } from '../../../redux/dots/action'
import { updateSlideDotIndex } from '../../../redux/dotsSlide/action'
import './style'

const DotsSlideSelect = ({
    dotIndex,
    dotKey,
    isAccessed,
    isSelected,
    isActivated,
}) => {
    const
        dispatch = useDispatch(),
        stopPropagation = useRef()

    const handleButtonClick = () => {
        dispatch(updateDotIndex(dotIndex))
    }

    const handleAnchorClick = e => {
        dispatch(updateSlideDotIndex(dotIndex))

        // Stop propagation if anchor click is valid.
        stopPropagation.current(e)

        return true
    }

    return (
        <>
            <div
                {...{
                    className: cx(
                        'DotsSlideSelect',
                    ),
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
                            isActivated,
                        }),
                        buttonName: DOTS_SLIDE_SELECT_BUTTON_KEY,
                        accessKey: ENTER,
                        isAccessed,
                        handleButtonClick,
                    }}
                >
                    {/* Button handles all drop shadow styling. */}
                    <Dot
                        noDropShadow
                        {...{
                            dotKey,
                            isDeselected: !isSelected,
                        }}
                    />

                    <div className={cx(
                        'SlideSelectDescription',

                        isAccessed &&
                            'SlideSelectDescription__accessed',

                        isActivated &&
                            'SlideSelectDescription__activated',

                        'abF',
                        'fCC',
                    )}>
                        {DOT_DESCRIPTIONS[dotKey]}
                    </div>
                </Button>

                <Anchor
                    {...{
                        isAccessed,
                        isSelected: isActivated,
                        text: dotKey,
                        analyticsLabel: 'dotsSlideSelect',
                        handleAnchorClick,
                    }}
                />
            </div>
            <StopPropagationDispatcher {...{ ref: stopPropagation }} />
        </>
    )
}

DotsSlideSelect.propTypes = {
    dotIndex: PropTypes.number.isRequired,
    dotKey: PropTypes.string.isRequired,
    isAccessed: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isActivated: PropTypes.bool.isRequired,
}

export default memo(DotsSlideSelect)
