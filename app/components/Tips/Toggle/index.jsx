// Toggle button to show, hide, and disable tips section.

import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TipsDispatcher from '../../../handlers/TipsHandler/Dispatcher'
import Button from '../../Button'

import { populateRefs } from 'helpers/ref'

import { TIPS_TOGGLE_KEY } from 'constants/access'
import { TIPS_BUTTON_KEY } from 'constants/buttons'

const mapStateToProps = ({
    optionStore: { selectedTipsOption }
}) => ({
    selectedTipsOption
})

class TipsToggle extends PureComponent {

    static propTypes = {
    // Through Redux.
        selectedTipsOption: PropTypes.string.isRequired,

        // From parent.
        className: PropTypes.any
    }

    handleTipsClick = () => {
        this.dispatchTips({ isToggled: true })
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
            selectedTipsOption,
            className
        } = this.props

        return (
            <___>
                <Button
                    isLargeSize
                    {...{
                        className,
                        buttonName: TIPS_BUTTON_KEY,
                        buttonIdentifier: selectedTipsOption,
                        accessKey: TIPS_TOGGLE_KEY,
                        handleButtonClick: this.handleTipsClick
                    }}
                />
                <TipsDispatcher {...{ getRefs: this._getRefs }} />
            </___>
        )
    }
}
export default connect(mapStateToProps)(TipsToggle)
