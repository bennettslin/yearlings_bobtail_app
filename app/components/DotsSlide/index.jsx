// Container to show multiple dot toggles in dots section.
import React, { useRef } from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { resetActivatedDots } from '../../redux/dotsSlide/action'
import CSSTransition from 'react-transition-group/CSSTransition'
import StopPropagationDispatcher from '../../dispatchers/StopPropagation'
import DotsSlideSelect from './Select'
import { getDotKeysFromBitNumber } from '../../helpers/dot'
import { IS_TOUCH_SUPPORTED } from '../../constants/device'
import { DOT_KEYS_ARRAY_CONFIGS } from './constants'
import {
    mapIsAccessOn,
    mapAccessedDotIndex
} from '../../redux/access/selectors'
import { mapDotsBitNumber } from '../../redux/dots/selectors'
import { mapDotsSlideBitNumber } from '../../redux/dotsSlide/selectors'
import { mapIsDotsSlideShown } from '../../redux/toggle/selectors'
import './style'

const DotsSlide = () => {
    const
        dispatch = useDispatch(),
        stopPropagation = useRef(),
        isAccessOn = useSelector(mapIsAccessOn),
        accessedDotIndex = useSelector(mapAccessedDotIndex),
        dotsBitNumber = useSelector(mapDotsBitNumber),
        dotsSlideBitNumber = useSelector(mapDotsSlideBitNumber),
        isDotsSlideShown = useSelector(mapIsDotsSlideShown),

        selectedDotKeys = getDotKeysFromBitNumber(dotsBitNumber),
        activatedDotKeys = getDotKeysFromBitNumber(dotsSlideBitNumber)

    const onClick = e => {
        logEvent({ e, componentName: 'DotsSlide' })
        stopPropagation.current(e)
        dispatch(resetActivatedDots())
    }

    return (
        <CSSTransition
            mountOnEnter
            unmountOnExit
            {...{
                in: isDotsSlideShown,
                timeout: 200,
                classNames: {
                    enterActive: 'DotsSlide__shown',
                    enterDone: 'DotsSlide__shown'
                }
            }}
        >
            <div className="DotsSlide">
                <div
                    {...{
                        className: cx(
                            'DotsSlideSelects',

                            /**
                             * Avoid sticky hover in touchscreen devices.
                             * If it has both touch and mouse events, this
                             * will prevent mouse from hovering, but this
                             * is an acceptable tradeoff, at least for now.
                             */
                            !IS_TOUCH_SUPPORTED && 'DotsSlide__canHover'
                        ),
                        onClick
                    }}
                >
                    {DOT_KEYS_ARRAY_CONFIGS.map((arrayConfig, arrayIndex) => {
                        const {
                            dotKeysArray,
                            startingIndex
                        } = arrayConfig

                        return (
                            <div
                                {...{
                                    key: arrayIndex,
                                    className: 'DotsSlideSelects__row'
                                }}
                            >
                                {dotKeysArray.map((dotKey, index) => {
                                    const
                                        dotIndex = index + startingIndex,
                                        isAccessed =
                                            isAccessOn &&
                                            accessedDotIndex === dotIndex,
                                        isSelected = selectedDotKeys[dotKey],
                                        isActivated =
                                            activatedDotKeys[dotKey]

                                    return (
                                        <DotsSlideSelect
                                            {...{
                                                key: index,
                                                dotIndex,
                                                dotKey,
                                                isAccessed,
                                                isSelected,
                                                isActivated
                                            }}
                                        />
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                <StopPropagationDispatcher {...{ ref: stopPropagation }} />
            </div>
        </CSSTransition>
    )
}

export default DotsSlide
