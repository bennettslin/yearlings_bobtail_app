// Section for user to select and deselect dots.

import React, { PureComponent } from 'react'

import StopPropagationDispatcher from '../../dispatchers/StopPropagationDispatcher'
import DotsSlideSelects from './Selects'

import { populateDispatch } from 'helpers/dispatch'

class DotsSlide extends PureComponent {

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
        const hasInteractivatedDotText =
            this.state.hasInteractivatedDotText
            + (isInteractivated ? 1 : -1)

        this.setState({
            hasInteractivatedDotText
        })
    }

    _setDispatch = (payload) => {
        populateDispatch(this, payload)
    }

    render() {
        const { hasInteractivatedDotText } = this.state

        return (
            <div className="DotsSlide">
                <DotsSlideSelects
                    {...{
                        handleContainerClick: this.handleContainerClick,
                        hasInteractivatedDotText: hasInteractivatedDotText,
                        setHasInteractivatedDotText: this._setHasInteractivatedDotText
                    }}
                />
                <StopPropagationDispatcher {...{ setDispatch: this._setDispatch }} />
            </div>
        )
    }
}

export default DotsSlide
