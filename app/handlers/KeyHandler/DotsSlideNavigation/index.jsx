import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
    ARROW_LEFT,
    ARROW_RIGHT,
    ARROW_UP,
    ARROW_DOWN,
    ENTER
} from 'constants/access'
import { ALL_DOT_KEYS } from 'constants/dots'

class DotsSlideNavigation extends Component {

    static propTypes = {
        // Through Redux.
        isAccessOn: PropTypes.bool.isRequired,
        accessedDotIndex: PropTypes.number.isRequired,

        // From parent.
        getTryNavigateDotsSlide: PropTypes.func.isRequired,
        handleDotAccess: PropTypes.func.isRequired,
        handleDotSelect: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getTryNavigateDotsSlide(this.tryNavigateDotsSlide)
    }

    tryNavigateDotsSlide = (e, keyName) => {
        const {
            isAccessOn,
            handleDotAccess,
            handleDotSelect
        } = this.props

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
                    return handleDotSelect(e, accessedDotIndex)
                default:
                    return false
            }

            return handleDotAccess(accessedDotIndex)
        }

        return false
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    toggleStore: { isAccessOn },
    accessedDotIndex
}) => ({
    isAccessOn,
    accessedDotIndex
})

export default connect(mapStateToProps)(DotsSlideNavigation)
