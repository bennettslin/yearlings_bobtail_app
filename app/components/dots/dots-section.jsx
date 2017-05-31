import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DotBlock from '../dot/dot-block'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

const passReduxStateToProps = ({
    selectedDotKeys,
    accessedDotIndex
}) => ({
    // Pass Redux state into component props.
    selectedDotKeys,
    accessedDotIndex
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
        const { hasInteractivatedDotText } = this.state

        return (
            <DotsSectionView {...this.props}
                handleContainerClick={this._onContainerClick}
                hasInteractivatedDotText={hasInteractivatedDotText}
                setHasInteractivatedDotText={this._setHasInteractivatedDotText}
            />
        )
    }
}

DotsSection.propTypes = {
    handlePopupContainerClick: PropTypes.func.isRequired,
    accessedDotIndex: PropTypes.number.isRequired,
    selectedDotKeys: PropTypes.object.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const DotsSectionView = ({

    handleContainerClick,
    hasInteractivatedDotText,
    setHasInteractivatedDotText,

...other }) => (

    <div
        className="section dots-section"
        onClick={handleContainerClick}
    >
        <DotBlock {...other}
            inDotsSection={true}
            hasInteractivatedDotText={hasInteractivatedDotText}
            setHasInteractivatedDotText={setHasInteractivatedDotText}
        />
    </div>
)

DotsSectionView.propTypes = {
    hasInteractivatedDotText: PropTypes.number.isRequired,
    setHasInteractivatedDotText: PropTypes.func.isRequired,
    handleContainerClick: PropTypes.func.isRequired
}

export default connect(passReduxStateToProps)(DotsSection)
