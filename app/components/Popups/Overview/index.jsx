// Popup container for overview section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Overview from '../../Overview'
import Popup from '../../Popup'

import { SHOWN } from 'constants/options'

const mapStateToProps = ({
    sessionStore: {
        selectedOverviewOption,
        selectedTipsIndex
    },
    renderStore: { canMainRender },
    renderedStore: { isRenderedLogue }
}) => ({
    selectedOverviewOption,
    selectedTipsIndex,
    canMainRender,
    isRenderedLogue
})

const overviewPopupPropTypes = {
    // Through Redux.
        canMainRender: PropTypes.bool.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        isRenderedLogue: PropTypes.bool.isRequired,
        selectedTipsIndex: PropTypes.number.isRequired,

        // From parent.
        inMain: PropTypes.bool,
        isPhone: PropTypes.bool
    },

    OverviewPopup = ({
    /* eslint-disable no-unused-vars */
        dispatch,
        /* eslint-enable no-unused-vars */

        inMain,
        isPhone,
        canMainRender,
        selectedOverviewOption,
        isRenderedLogue,
        selectedTipsIndex,

        ...other
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
                selectedOverviewOption !== SHOWN ?
                    false :
                    Boolean(inMain)
        }

        /**
     * Always hide overview section when title is open, or when tip is shown
     * in song. Always hide before ready to render.
     */
        if (!canMainRender || (!isRenderedLogue && !selectedTipsIndex)) {
            isVisible = false
        }

        return (
            <Popup
                bounceAnimate
                hasNarrowPadding
                popupName="Overview"
                className={cx(
                    inMain && 'OverviewPopup__inMain'
                )}
                isVisible={isVisible}
                noFlexCentre={inMain}
                noAbsoluteFull={noAbsoluteFull}
            >
                <Overview {...other} />
            </Popup>
        )
    }

OverviewPopup.propTypes = overviewPopupPropTypes

export default connect(mapStateToProps)(OverviewPopup)
