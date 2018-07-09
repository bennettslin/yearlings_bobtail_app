// Section for user to select and deselect dots.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import DotsSlideSelects from './DotsSlideSelects'
import { getPropsAreShallowEqual } from '../../helpers/generalHelper'

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
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        }) || !getPropsAreShallowEqual({
            props: this.state,
            nextProps: nextState
        }) || !getPropsAreShallowEqual({
            props: this.props.selectedDotKeys,
            nextProps: nextProps.selectedDotKeys
        })
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
