// Toggle button to show, hide, and disable tips section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import TipsDispatcher from '../../../handlers/Tips/Dispatcher'
import Button from '../../Button'
import TipsHand from '../../Tips/Hand'
import { populateRefs } from '../../../helpers/ref'
import { TIPS_TOGGLE_KEY } from '../../../constants/access'
import { TIPS_BUTTON_KEY } from '../../../constants/buttons'
import { TIPS } from '../../../constants/tips'
import { IS_TIPS_SHOWABLE_SELECTOR } from '../../../redux/transient/selectors'
import { SELECTED_TIPS_OPTION_SELECTOR } from '../../../redux/option/selectors'
import './style'

const mapStateToProps = state => {
    const
        isTipsShowable = IS_TIPS_SHOWABLE_SELECTOR(state),
        selectedTipsOption = SELECTED_TIPS_OPTION_SELECTOR(state)

    return {
        selectedTipsOption,
        isTipsShowable
    }
}

class TipsToggle extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedTipsOption: PropTypes.string.isRequired,
        isTipsShowable: PropTypes.bool.isRequired,

        // From parent.
        inPopup: PropTypes.bool,
        className: PropTypes.string
    }

    handleTipsClick = () => {
        this.dispatchTips({ isToggled: true })
    }

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    render() {
        const {
            selectedTipsOption,
            isTipsShowable,
            inPopup,
            className
        } = this.props

        return (
            <div
                {...{
                    className: cx(
                        'TipsToggle',
                        className
                    )
                }}
            >
                <Button
                    isLargeSize
                    {...{
                        isBrightHover: inPopup,
                        buttonName: TIPS_BUTTON_KEY,
                        buttonIdentifier: selectedTipsOption,
                        accessKey: TIPS_TOGGLE_KEY,
                        isDisabled: !isTipsShowable,
                        handleButtonClick: this.handleTipsClick
                    }}
                />
                {inPopup && (
                    <TipsHand reverse {...{ tipType: TIPS }} />
                )}
                <TipsDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}
export default connect(mapStateToProps)(TipsToggle)
