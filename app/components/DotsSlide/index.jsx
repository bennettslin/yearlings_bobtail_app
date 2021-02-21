// Container to show multiple dot toggles in dots section.
import React, { useRef } from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { resetActivatedDots } from '../../redux/dotsSlide/action'
import CSSTransition from 'react-transition-group/CSSTransition'
import StopPropagationDispatcher from '../../dispatchers/StopPropagation'
import DotsSlideSelect from './Select'
import { getDotKeysFromBit } from '../../helpers/dot'
import { IS_TOUCH_SUPPORTED } from '../../constants/device'
import { DOT_KEYS_ARRAY_CONFIGS } from './constants'
import {
    mapIsAccessOn,
    mapAccessedDotIndex,
} from '../../redux/access/selector'
import { mapSelectedDotsBit } from '../../redux/dots/selector'
import { mapDotsSlideBit } from '../../redux/dotsSlide/selector'
import { mapIsDotsSlideShown } from '../../redux/toggle/selector'
import './style'

const DotsSlide = () => {
    const
        dispatch = useDispatch(),
        stopPropagation = useRef(),
        isAccessOn = useSelector(mapIsAccessOn),
        accessedDotIndex = useSelector(mapAccessedDotIndex),
        selectedDotsBit = useSelector(mapSelectedDotsBit),
        dotsSlideBit = useSelector(mapDotsSlideBit),
        isDotsSlideShown = useSelector(mapIsDotsSlideShown),

        selectedDotKeys = getDotKeysFromBit(selectedDotsBit),
        activatedDotKeys = getDotKeysFromBit(dotsSlideBit)

    const onClick = e => {
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
                    enterDone: 'DotsSlide__shown',
                },
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
                        onClick,
                    }}
                >
                    {DOT_KEYS_ARRAY_CONFIGS.map((arrayConfig, arrayIndex) => {
                        const {
                            dotKeysArray,
                            startingIndex,
                        } = arrayConfig

                        return (
                            <div
                                {...{
                                    key: arrayIndex,
                                    className: 'DotsSlideSelects__row',
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
                                                isActivated,
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
