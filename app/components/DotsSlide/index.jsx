// Section for user to select and deselect dots.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import DotsSlideSelects from './Selects'

const mapStateToProps = ({
    dotsStore: {
        dotsBitNumber,
        ...selectedDotKeys
    }
}) => ({
    dotsBitNumber,
    selectedDotKeys
})

class DotsSlide extends PureComponent {

    static propTypes = {
        // Through Redux.
        dotsBitNumber: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,

        // From parent.
        handlePopupContainerClick: PropTypes.func.isRequired
    }

    state = {
        hasInteractivatedDotText: 0
    }

    _onContainerClick = (e) => {
        this.props.handlePopupContainerClick(e)

        this.setState({
            hasInteractivatedDotText: 0
        })
    }

    _setHasInteractivatedDotText = (isInteractivated) => {
        const hasInteractivatedDotText = this.state.hasInteractivatedDotText + (isInteractivated ? 1 : -1)

        this.setState({
            hasInteractivatedDotText
        })
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                handlePopupContainerClick,
                dispatch,
                /* eslint-enable no-unused-vars */

                selectedDotKeys,
                ...other
            } = this.props,
            { hasInteractivatedDotText } = this.state

        return (
            <div className="DotsSlide">
                <DotsSlideSelects {...other}
                    {...{
                        dotKeys: selectedDotKeys,
                        handleContainerClick: this._onContainerClick,
                        hasInteractivatedDotText: hasInteractivatedDotText,
                        setHasInteractivatedDotText: this._setHasInteractivatedDotText
                    }}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(DotsSlide)
