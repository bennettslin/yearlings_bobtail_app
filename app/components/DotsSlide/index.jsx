// Container to show multiple dot toggles in dots section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { resetInteractivatedDots } from 'flux/dotsSlide/action'

import CSSTransition from 'react-transition-group/CSSTransition'
import StopPropagationDispatcher from '../../dispatchers/StopPropagation'
import DotsSlideSelect from './Select'

import { getDotKeysFromBitNumber } from 'helpers/dot'
import { populateRefs } from 'helpers/ref'

import { DOT_KEYS_ARRAY_CONFIGS } from './constants'

const mapStateToProps = ({
    accessStore: { accessedDotIndex },
    toggleStore: {
        isAccessOn,
        isDotsSlideShown
    },
    dotsStore: { dotsBitNumber },
    dotsSlideStore: { dotsSlideBitNumber },
    mobileStore: { deviceSupportsTouch }
}) => ({
    accessedDotIndex,
    isAccessOn,
    isDotsSlideShown,
    dotsBitNumber,
    dotsSlideBitNumber,
    deviceSupportsTouch
})

class DotsSlide extends PureComponent {

    static propTypes = {
    // Through Redux.
        isAccessOn: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        accessedDotIndex: PropTypes.number,
        dotsBitNumber: PropTypes.number.isRequired,
        dotsSlideBitNumber: PropTypes.number.isRequired,
        deviceSupportsTouch: PropTypes.bool.isRequired,
        resetInteractivatedDots: PropTypes.func.isRequired
    }

    _handleContainerClick = (e) => {
        logEvent('DotsSlide', e)
        this.dispatchStopPropagation(e)
        this.props.resetInteractivatedDots()
    }

    getSelectedDotKeys() {
        const { dotsBitNumber } = this.props
        return getDotKeysFromBitNumber(dotsBitNumber)
    }

    getInteractivatedDotKeys() {
        const { dotsSlideBitNumber } = this.props
        return getDotKeysFromBitNumber(dotsSlideBitNumber)
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
                isAccessOn,
                isDotsSlideShown,
                accessedDotIndex,
                deviceSupportsTouch
            } = this.props,

            selectedDotKeys = this.getSelectedDotKeys(),
            interactivatedDotKeys = this.getInteractivatedDotKeys()

        return (
            <CSSTransition
                mountOnEnter
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
                                !deviceSupportsTouch && 'DotsSlide__canHover'
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
                                    key={arrayIndex}
                                    className="DotsSlideSelects__row"
                                >
                                    {dotKeysArray.map((dotKey, index) => {
                                        const
                                            dotIndex = index + startingIndex,
                                            isAccessed =
                                                isAccessOn &&
                                                accessedDotIndex === dotIndex,
                                            isSelected = selectedDotKeys[dotKey],
                                            isInteractivated =
                                                interactivatedDotKeys[dotKey]

                                        return (
                                            <DotsSlideSelect
                                                key={index}
                                                {...{
                                                    dotIndex,
                                                    dotKey,
                                                    isAccessed,
                                                    isSelected,
                                                    isInteractivated
                                                }}
                                            />
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                    <StopPropagationDispatcher {...{ getRefs: this._getRefs }} />
                </div>
            </CSSTransition>
        )
    }
}

export default connect(
    mapStateToProps,
    { resetInteractivatedDots }
)(DotsSlide)
