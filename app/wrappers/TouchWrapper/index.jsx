import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

class TouchWrapper extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAutoScroll: PropTypes.bool.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        isSliderTouched: PropTypes.bool.isRequired,
        activatedVerseIndex: PropTypes.number.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    render() {
        const {
            isAutoScroll,
            isSliderTouched,
            isSliderMoving,
            activatedVerseIndex,
            children
        } = this.props

        return (
            <div
                {...{
                    className: cx(
                        'TouchWrapper',

                        !isAutoScroll &&
                            'TW__manualScroll',

                        isSliderTouched &&
                            'TW__sliderTouched',

                        // Relevant to verse index classes.
                        isSliderMoving ?
                            'TW__sliderMoving' :
                            'TW__sliderNotMoving',

                        activatedVerseIndex >= 0 &&
                            'TW__verseActive',

                        // Make it easier to override this selector.
                        !isSliderMoving &&
                        activatedVerseIndex < 0 &&
                            'TW__verseCanHover'
                    )
                }}
            >
                {children}
            </div>
        )
    }
}

const mapStateToProps = ({
    sessionStore: { activatedVerseIndex },
    toggleStore: { isAutoScroll },
    sliderStore: {
        isSliderTouched,
        isSliderMoving
    }
}) => ({
    isAutoScroll,
    isSliderTouched,
    isSliderMoving,
    activatedVerseIndex
})

export default connect(mapStateToProps)(TouchWrapper)
