// Singleton to listen for non-toggle events related to carousel closing.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAccessStore } from 'flux/access/action'
import { resetInteractivatedDots } from 'flux/dotsSlide/action'

class DotsSlideListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAccessOn: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        accessedDotIndex: PropTypes.number.isRequired,
        updateAccessStore: PropTypes.func.isRequired,
        resetInteractivatedDots: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkAccessedDots(prevProps)
        this._checkDotsSlideClose(prevProps)
    }

    _checkAccessedDots = (prevProps = {}) => {
        const {
                accessedDotIndex,
                isAccessOn,
                isDotsSlideShown
            } = this.props,
            {
                isAccessOn: wasAccessOn,
                isDotsSlideShown: wasDotsSlideShown
            } = prevProps

        if (
            // If access is on, and dots slide is shown, and...
            isAccessOn && isDotsSlideShown && (

                // ... access was just now turned on, or...
                !wasAccessOn ||

                // ... dots slide was just now shown.
                !wasDotsSlideShown
            ) &&

            /**
             * If a dot was recently selected, it was also made the accessed
             * dot, in which case we'll keep it that way.
             */
            accessedDotIndex === -1
        ) {
            this.props.updateAccessStore({ accessedDotIndex: 0 })

        } else if (
            // Dots slide is just now hidden.
            !isDotsSlideShown && wasDotsSlideShown
        ) {
            this.props.updateAccessStore({ accessedDotIndex: -1 })
        }
    }

    _checkDotsSlideClose(prevProps) {
        const
            { isDotsSlideShown } = this.props,
            { isDotsSlideShown: wasDotsSlideShown } = prevProps

        if (!isDotsSlideShown && wasDotsSlideShown) {
            this.props.resetInteractivatedDots()
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    accessStore: {
        isAccessOn,
        accessedDotIndex
    },
    toggleStore: { isDotsSlideShown }
}) => ({
    isAccessOn,
    accessedDotIndex,
    isDotsSlideShown
})

export default connect(
    mapStateToProps,
    {
        updateAccessStore,
        resetInteractivatedDots
    }
)(DotsSlideListener)
