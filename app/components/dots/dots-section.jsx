// Section for user to select and deselect dots.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DotBlock from '../dot/dot-block'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

// Pass Redux state into component props.
const passReduxStateToProps = ({
    accessedDotIndex,
    selectedDotKeys
}) => ({
    accessedDotIndex,
    selectedDotKeys
})

/*************
 * CONTAINER *
 *************/

class DotsSection extends Component {

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
        const { selectedDotKeys,
                ...other } = this.props,
            { hasInteractivatedDotText } = this.state

        return (
            <DotsSectionView {...other}
                dotKeys={selectedDotKeys}
                handleContainerClick={this._onContainerClick}
                hasInteractivatedDotText={hasInteractivatedDotText}
                setHasInteractivatedDotText={this._setHasInteractivatedDotText}
            />
        )
    }
}

DotsSection.propTypes = {
    accessedDotIndex: PropTypes.number.isRequired,
    selectedDotKeys: PropTypes.object.isRequired,
    handlePopupContainerClick: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const DotsSectionView = ({

    handleContainerClick,

...other }) => (

    <div
        className="section dots-section"
        onClick={handleContainerClick}
    >
        <DotBlock {...other}
            inDotsSection={true}
        />
    </div>
)

DotsSectionView.propTypes = {
    handleContainerClick: PropTypes.func.isRequired
}

export default connect(passReduxStateToProps)(DotsSection)
