// Toggle button to show, hide, and disable overview section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import OverviewDispatcher from '../../../handlers/Overview/Dispatcher'
import Button from '../../Button'

import { populateRefs } from 'helpers/ref'

import { OVERVIEW_TOGGLE_KEY } from '../../../constants/access'
import { OVERVIEW_BUTTON_KEY } from '../../../constants/buttons'

import { getOverviewToggleIdentifier } from './helper'

const mapStateToProps = ({
    lyricStore: { isLyricLogue },
    optionStore: { selectedOverviewOption }
}) => ({
    isLyricLogue,
    selectedOverviewOption
})

class OverviewToggle extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedOverviewOption: PropTypes.string.isRequired,

        // From parent.
        isToggleInOverview: PropTypes.bool
    }

    handleOverviewClick = () => {
        // The isToggled argument is ignored by logue overview.
        this.dispatchOverview({ isToggled: true })
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
                isLyricLogue,
                selectedOverviewOption,
                isToggleInOverview
            } = this.props,

            buttonIdentifier = getOverviewToggleIdentifier({
                isLyricLogue,
                selectedOverviewOption,
                isToggleInOverview
            })

        return (
            <div className={cx(
                'OverviewToggle'
            )}>
                <Button
                    isCustomSize
                    {...{
                        buttonName: OVERVIEW_BUTTON_KEY,
                        accessKey: OVERVIEW_TOGGLE_KEY,
                        buttonIdentifier,
                        handleButtonClick: this.handleOverviewClick
                    }}
                />
                <OverviewDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(OverviewToggle)
