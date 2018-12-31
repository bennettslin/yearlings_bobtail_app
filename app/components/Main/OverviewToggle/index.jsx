// Toggle button to show, hide, and disable overview section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import OverviewDispatcher from '../../../handlers/Overview/Dispatcher'
import Button from '../../Button'

import { populateRefs } from 'helpers/ref'

import { OVERVIEW_TOGGLE_KEY } from 'constants/access'
import { OVERVIEW_BUTTON_KEY } from 'constants/buttons'

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
        isLyricLogue: PropTypes.bool.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,

        // From props.
        inLeftShelf: PropTypes.bool
    }

    handleOverviewClick = () => {
        if (!this.props.isLyricLogue) {
            this.dispatchOverview({ isToggled: true })
        }
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
            inLeftShelf,
            isLyricLogue,
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
                        isDisabled: isLyricLogue,
                        accessKey: OVERVIEW_TOGGLE_KEY,
                        buttonIdentifier: selectedOverviewOption,
                        handleButtonClick: this.handleOverviewClick
                    }}
                />
                <OverviewDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(OverviewToggle)
