// Section for user to select and deselect dots.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import DotToggleBlock from '../Dot/DotToggleBlock'
import { getComponentShouldUpdate } from '../../helpers/generalHelper'

const mapStateToProps = ({
    selectedDotKeys
}) => ({
    selectedDotKeys
})

/*************
 * CONTAINER *
 *************/

class Dots extends Component {

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
            <DotsView {...other}
                dotKeys={selectedDotKeys}
                handleContainerClick={this._onContainerClick}
                hasInteractivatedDotText={hasInteractivatedDotText}
                setHasInteractivatedDotText={this._setHasInteractivatedDotText}
            />
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const dotsViewPropTypes = {
    // From parent.
    handleContainerClick: PropTypes.func.isRequired
},

DotsView = ({

    handleContainerClick,

...other }) => (

    <div className="Dots">
        <div
            className={cx(
                'Dots__slide'
            )}
            onClick={handleContainerClick}
            onTouchStart={handleContainerClick}
        >
            <DotToggleBlock {...other} />
        </div>
    </div>
)

DotsView.propTypes = dotsViewPropTypes

export default connect(mapStateToProps)(Dots)
