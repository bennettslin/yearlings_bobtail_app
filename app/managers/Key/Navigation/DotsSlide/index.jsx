import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAccessStore } from '../../../../redux/access/action'
import DotSelectDispatcher from '../../../../dispatchers/DotSelect'
import { populateRefs } from '../../../../helpers/ref'
import {
    ARROW_LEFT,
    ARROW_RIGHT,
    ARROW_UP,
    ARROW_DOWN,
    ENTER
} from '../../../../constants/access'
import { ORDERED_DOT_KEYS } from '../../../../constants/dots'
import {
    IS_ACCESS_ON_SELECTOR,
    ACCESSED_DOT_INDEX_SELECTOR
} from '../../../../redux/access/selectors'

const mapStateToProps = state => {
    const
        isAccessOn = IS_ACCESS_ON_SELECTOR(state),
        accessedDotIndex = ACCESSED_DOT_INDEX_SELECTOR(state)

    return {
        isAccessOn,
        accessedDotIndex
    }
}

class DotsSlideNavigation extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAccessOn: PropTypes.bool.isRequired,
        accessedDotIndex: PropTypes.number.isRequired,
        updateAccessStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            navigateDotsSlide: this.navigateDotsSlide
        })
    }

    navigateDotsSlide = (keyName) => {
        const { isAccessOn } = this.props

        if (isAccessOn) {
            const dotKeysCount = ORDERED_DOT_KEYS.length
            let { accessedDotIndex } = this.props

            switch (keyName) {
                case ARROW_LEFT:
                    accessedDotIndex = (accessedDotIndex + (dotKeysCount - 1)) % dotKeysCount
                    break
                case ARROW_RIGHT:
                    accessedDotIndex = (accessedDotIndex + 1) % dotKeysCount
                    break
                case ARROW_UP:
                    if (accessedDotIndex >= dotKeysCount / 2) {
                        accessedDotIndex = (accessedDotIndex + (dotKeysCount / 2)) % dotKeysCount
                    } else if (accessedDotIndex !== 0) {
                        accessedDotIndex = (accessedDotIndex + (dotKeysCount / 2) - 1) % dotKeysCount
                    } else {
                        accessedDotIndex = (accessedDotIndex + (dotKeysCount - 1)) % dotKeysCount
                    }
                    break
                case ARROW_DOWN:
                    if (accessedDotIndex < dotKeysCount / 2) {
                        accessedDotIndex = (accessedDotIndex + (dotKeysCount / 2)) % dotKeysCount
                    } else if (accessedDotIndex !== dotKeysCount - 1) {
                        accessedDotIndex = (accessedDotIndex + (dotKeysCount / 2) + 1) % dotKeysCount
                    } else {
                        accessedDotIndex = (accessedDotIndex + 1) % dotKeysCount
                    }
                    break
                case ENTER:
                    this.dispatchSelectDot(accessedDotIndex)
                    return true
                default:
                    return false
            }

            this.props.updateAccessStore({ accessedDotIndex })
        }
        return true
    }

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    getDispatchDotSelect = dispatch => {
        if (dispatch) {
            this.dispatchSelectDot = dispatch.dispatchSelectDot
        }
    }

    render() {
        return (
            <DotSelectDispatcher {...{ ref: this.getDispatchDotSelect }} />
        )
    }
}

export default connect(
    mapStateToProps,
    { updateAccessStore }
)(DotsSlideNavigation)
