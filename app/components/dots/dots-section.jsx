import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DotBlock from '../dot/dots-block'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

/*************
 * CONTAINER *
 *************/

const DotsSection = (props) => (
    <DotsSectionView {...props} />
)

DotsSection.propTypes = {
    handlePopupContainerClick: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

class DotsSectionView extends Component {

    constructor(props) {
        super(props)

        this._onContainerClick = this._onContainerClick.bind(this)
        this._setHasInteractivatedDotText = this._setHasInteractivatedDotText.bind(this)

        this.state = {
            hasInteractivatedDotText: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { props, state } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'selectedDotsIndex',
                    'accessedDotIndex',
                    'selectedDotKeys'
                ]
            }) || getComponentShouldUpdate({
                props: state,
                nextProps: nextState,
                updatingPropsArray: [
                    'hasInteractivatedDotText'
                ]
            })

        return componentShouldUpdate
    }

    _onContainerClick(e) {
        this.props.handlePopupContainerClick(e)

        this.setState({
            hasInteractivatedDotText: 0
        })
    }

    _setHasInteractivatedDotText(isInteractivated) {

        const hasInteractivatedDotText = this.state.hasInteractivatedDotText + (isInteractivated ? 1 : -1)

        this.setState({
            hasInteractivatedDotText
        })
    }

    render() {
        const { hasInteractivatedDotText } = this.state

        return (
            <div
                className="section dots-section"
                onClick={this._onContainerClick}
            >
                <DotBlock {...this.props}
                    inDotsSection={true}
                    hasInteractivatedDotText={hasInteractivatedDotText}
                    setHasInteractivatedDotText={e => this._setHasInteractivatedDotText(e)}
                />
            </div>
        )
    }
}

export default DotsSection
