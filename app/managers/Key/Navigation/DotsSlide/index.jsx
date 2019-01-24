import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAccessStore } from 'flux/access/action'

import DotSelectDispatcher from '../../../../dispatchers/DotSelectDispatcher'

import { populateRefs } from 'helpers/ref'

import {
    ARROW_LEFT,
    ARROW_RIGHT,
    ARROW_UP,
    ARROW_DOWN,
    ENTER
} from 'constants/access'
import { ALL_DOT_KEYS } from 'constants/dots'

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

    navigateDotsSlide = (e, keyName) => {
        const { isAccessOn } = this.props

        if (isAccessOn) {
            const dotKeysCount = ALL_DOT_KEYS.length
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

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <DotSelectDispatcher {...{ getRefs: this._getRefs }} />
        )
    }
}

const mapStateToProps = ({
    accessStore: {
        isAccessOn,
        accessedDotIndex
    }
}) => ({
    isAccessOn,
    accessedDotIndex
})

export default connect(
    mapStateToProps,
    { updateAccessStore }
)(DotsSlideNavigation)
