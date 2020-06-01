// Container to show multiple dot toggles in dots section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
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
import { IS_DOTS_SLIDE_SHOWN_SELECTOR } from '../../redux/toggle/selectors'
import './style'

const mapStateToProps = state => {
    const
        isAccessOn = mapIsAccessOn(state),
        accessedDotIndex = mapAccessedDotIndex(state),
        dotsBitNumber = mapDotsBitNumber(state),
        dotsSlideBitNumber = mapDotsSlideBitNumber(state),
        isDotsSlideShown = IS_DOTS_SLIDE_SHOWN_SELECTOR(state)

    return {
        accessedDotIndex,
        isAccessOn,
        isDotsSlideShown,
        dotsBitNumber,
        dotsSlideBitNumber
    }
}

class DotsSlide extends PureComponent {

    static propTypes = {
    // Through Redux.
        isAccessOn: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        accessedDotIndex: PropTypes.number,
        dotsBitNumber: PropTypes.number.isRequired,
        dotsSlideBitNumber: PropTypes.number.isRequired,
        resetActivatedDots: PropTypes.func.isRequired
    }

    _handleContainerClick = e => {
        logEvent({ e, componentName: 'DotsSlide' })
        this.stopPropagation(e)
        this.props.resetActivatedDots()
    }

    getSelectedDotKeys() {
        const { dotsBitNumber } = this.props
        return getDotKeysFromBitNumber(dotsBitNumber)
    }

    getActivatedDotKeys() {
        const { dotsSlideBitNumber } = this.props
        return getDotKeysFromBitNumber(dotsSlideBitNumber)
    }

    getStopPropagation = dispatch => {
        this.stopPropagation = dispatch
    }

    render() {
        const {
                isAccessOn,
                isDotsSlideShown,
                accessedDotIndex
            } = this.props,

            selectedDotKeys = this.getSelectedDotKeys(),
            activatedDotKeys = this.getActivatedDotKeys()

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
                            onClick: this._handleContainerClick
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
                    <StopPropagationDispatcher {...{ ref: this.getStopPropagation }} />
                </div>
            </CSSTransition>
        )
    }
}

export default connect(
    mapStateToProps,
    { resetActivatedDots }
)(DotsSlide)
