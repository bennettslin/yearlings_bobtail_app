// Toggle button to show, hide, and disable overview section.
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import OverviewDispatcher from '../../../handlers/Overview/Dispatcher'
import Button from '../../Button'
import TipsHand from '../../Tips/Hand'
import { populateRefs } from '../../../helpers/ref'
import { OVERVIEW_TOGGLE_KEY } from '../../../constants/access'
import { OVERVIEW_BUTTON_KEY } from '../../../constants/buttons'
import { OVERVIEW } from '../../../constants/tips'
import { getOverviewToggleIdentifier } from './helper'
import { IS_LYRIC_LOGUE_SELECTOR } from '../../../redux/lyric/selectors'
import { SELECTED_OVERVIEW_OPTION_SELECTOR } from '../../../redux/option/selectors'
import './style'

const mapStateToProps = state => {
    const
        isLyricLogue = IS_LYRIC_LOGUE_SELECTOR(state),
        selectedOverviewOption = SELECTED_OVERVIEW_OPTION_SELECTOR(state)

    return {
        isLyricLogue,
        selectedOverviewOption
    }
}

class OverviewToggle extends PureComponent {

    static propTypes = {
        // Through Redux.
        isLyricLogue: PropTypes.bool.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,

        // From parent.
        isToggleInOverview: PropTypes.bool,
        className: PropTypes.string
    }

    handleOverviewClick = () => {
        // The isToggled argument is ignored by logue overview.
        this.dispatchOverview({ isToggled: true })
    }

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    getDispatchOverview = dispatch => {
        this.dispatchOverview = dispatch
    }

    render() {
        const {
                isLyricLogue,
                selectedOverviewOption,
                isToggleInOverview,
                className
            } = this.props,

            buttonIdentifier = getOverviewToggleIdentifier({
                isLyricLogue,
                selectedOverviewOption,
                isToggleInOverview
            })

        return (
            <div className={cx(
                'OverviewToggle',
                className
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
                <TipsHand {...{ tipType: OVERVIEW }} />
                <OverviewDispatcher {...{ ref: this.getDispatchOverview }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(OverviewToggle)
