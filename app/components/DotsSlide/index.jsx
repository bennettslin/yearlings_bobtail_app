// Section for user to select and deselect dots.

import React, { PureComponent } from 'react'

import StopPropagationDispatcher from '../../dispatchers/StopPropagationDispatcher'
import DotsSlideSelects from './Selects'

import { populateRefs } from 'helpers/ref'

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

    _getRefs = (payload) => {
        populateRefs(this, payload)
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
                <StopPropagationDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default DotsSlide
