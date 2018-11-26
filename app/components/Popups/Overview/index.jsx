// Popup container for overview section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Overview from '../../Overview'
import Popup from '../../Popup'

import { SHOWN } from 'constants/options'

const mapStateToProps = ({
    deviceStore: { isPhone },
    optionStore: {
        selectedOverviewOption,
        selectedTipsOption
    },
    renderStore: { canMainRender },
    renderedStore: { isRenderedLogue }
}) => ({
    isPhone,
    selectedOverviewOption,
    selectedTipsOption,
    canMainRender,
    isRenderedLogue
})

const overviewPopupPropTypes = {
    // Through Redux.
        canMainRender: PropTypes.bool.isRequired,
        isPhone: PropTypes.bool.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        isRenderedLogue: PropTypes.bool.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,

        // From parent.
        inMain: PropTypes.bool
    },

    OverviewPopup = ({
        inMain,
        isPhone,
        canMainRender,
        selectedOverviewOption,
        isRenderedLogue,
        selectedTipsOption
    }) => {
        const
            // Only position absolute when in main and is phone.
            noAbsoluteFull = isRenderedLogue || !isPhone

        let isVisible

        // Switch between logue and song overview sections.
        if (isRenderedLogue) {
            isVisible = !inMain

        } else {
            isVisible =
                selectedOverviewOption === SHOWN && Boolean(inMain)
        }

        /**
     * Always hide overview section when title is open, or when tip is shown
     * in song. Always hide before ready to render.
     */
        if (
            !canMainRender ||
            (
                !isRenderedLogue &&
                selectedTipsOption === SHOWN
            )
        ) {
            isVisible = false
        }

        return (
            <Popup
                bounceAnimate
                hasNarrowPadding
                {...{
                    popupName: 'Overview',
                    className: cx(
                        inMain && 'OverviewPopup__inMain'
                    ),
                    isVisible,
                    noFlexCentre: inMain,
                    noAbsoluteFull
                }}
            >
                <Overview />
            </Popup>
        )
    }

OverviewPopup.propTypes = overviewPopupPropTypes

export default connect(mapStateToProps)(OverviewPopup)
