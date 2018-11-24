// Section for user to select and deselect dots.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import StopPropagationDispatcher from '../../dispatchers/StopPropagationDispatcher'
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
        selectedDotKeys: PropTypes.object.isRequired
    }

    state = {
        hasInteractivatedDotText: 0
    }

    handleContainerClick = (e) => {
        this.dispatchStopPropagation(e)

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
                        handleContainerClick: this.handleContainerClick,
                        hasInteractivatedDotText: hasInteractivatedDotText,
                        setHasInteractivatedDotText: this._setHasInteractivatedDotText
                    }}
                />
                <StopPropagationDispatcher {...{ getDispatch: this }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(DotsSlide)
