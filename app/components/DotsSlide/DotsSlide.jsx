// Section for user to select and deselect dots.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import DotsSlideSelects from './DotsSlideSelects'
import { getComponentShouldUpdate } from '../../helpers/generalHelper'

const mapStateToProps = ({
    selectedDotKeys
}) => ({
    selectedDotKeys
})

class DotsSlide extends Component {

    static propTypes = {
        // Through Redux.
        selectedDotKeys: PropTypes.object.isRequired,

        // From parent.
        handlePopupContainerClick: PropTypes.func.isRequired
    }

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
            <div className="DotsSlide">
                <DotsSlideSelects {...other}
                    dotKeys={selectedDotKeys}
                    handleContainerClick={this._onContainerClick}
                    hasInteractivatedDotText={hasInteractivatedDotText}
                    setHasInteractivatedDotText={this._setHasInteractivatedDotText}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(DotsSlide)
