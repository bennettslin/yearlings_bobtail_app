// Toggle button to show, hide, and disable overview section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import OverviewDispatcher from '../../../handlers/OverviewHandler/Dispatcher'
import Button from '../../Button'

import { OVERVIEW_TOGGLE_KEY } from 'constants/access'
import { OVERVIEW_BUTTON_KEY } from 'constants/buttons'

const mapStateToProps = ({
    renderedStore: { isRenderedLogue },
    sessionStore: { selectedOverviewOption }
}) => ({
    isRenderedLogue,
    selectedOverviewOption
})

class OverviewToggle extends PureComponent {

    static propTypes = {
        // Through Redux.
        isRenderedLogue: PropTypes.bool.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,

        // From props.
        inLeftShelf: PropTypes.bool
    }

    handleOverviewClick = () => {
        if (!this.props.isRenderedLogue) {
            this.dispatchOverview({ isToggled: true })
        }
    }

    render() {
        const {
            inLeftShelf,
            isRenderedLogue,
            selectedOverviewOption
        } = this.props

        return (
            <div className={cx(
                'OverviewToggle',
                inLeftShelf && 'LeftShelf__child'
            )}>
                <Button
                    isCustomSize
                    {...{
                        buttonName: OVERVIEW_BUTTON_KEY,
                        isDisabled: isRenderedLogue,
                        accessKey: OVERVIEW_TOGGLE_KEY,
                        buttonIdentifier: selectedOverviewOption,
                        handleButtonClick: this.handleOverviewClick
                    }}
                />
                <OverviewDispatcher {...{ getDispatch: this }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(OverviewToggle)
