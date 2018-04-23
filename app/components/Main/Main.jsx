/**
 * Column to show all sections, excluding lyrics and popups. Knows no state, so
 * should not update.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Nav from '../Nav/Nav'
import AnnotationPopup from '../Popups/AnnotationPopup'
import CarouselToggle from '../Carousel/CarouselToggle'
import Carousel from '../Carousel/Carousel'
import DotsSlide from '../DotsSlide/DotsSlide'
import LeftShelf from './LeftShelf'
import LyricToggleExpand from '../LyricColumn/LyricToggleExpand'
import Stage from '../stage/Stage'
import OverviewPopup from '../Popups/OverviewPopup'
import TipsPopup from '../Popups/TipsPopup'
import ScoresTips from '../ScoresTips/ScoresTips'

import { getIsPhone } from '../../helpers/responsiveHelper'

const mainPropTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,

    // From parent.
    handleCarouselNavToggle: PropTypes.func.isRequired,
    handleLyricSectionExpand: PropTypes.func.isRequired,

    annotationPopupHandlers: PropTypes.object.isRequired,
    carouselSectionHandlers: PropTypes.object.isRequired,
    leftShelfToggleSectionHandlers: PropTypes.object.isRequired,
    dotsSectionHandlers: PropTypes.object.isRequired,
    navSectionHandlers: PropTypes.object.isRequired,
    overviewPopupHandlers: PropTypes.object.isRequired,
    tipsPopupHandlers: PropTypes.object.isRequired,
    scoresTipsHandlers: PropTypes.object.isRequired
}

const mapStateToProps = ({
    deviceIndex
}) => ({
    deviceIndex
}),

Main = ({

    deviceIndex,

    handleCarouselNavToggle,
    handleLyricSectionExpand,

    annotationPopupHandlers,
    carouselSectionHandlers,
    leftShelfToggleSectionHandlers,
    dotsSectionHandlers,
    navSectionHandlers,
    overviewPopupHandlers,
    scoresTipsHandlers,
    tipsPopupHandlers

}) => {

    /**
     * In phone, flex container's children have absolute position.
     */
    const isPhone = getIsPhone(deviceIndex)

    return (
        <div className={cx(
            'Main',
            'width__mainColumn'
        )}>

            <Stage />

            <AnnotationPopup {...annotationPopupHandlers}
                inMain
            />

            <Carousel {...carouselSectionHandlers} />

            <div className={cx(
                'Main__flexContainer',
                'absoluteFullContainer'
            )}>
                <LeftShelf {...leftShelfToggleSectionHandlers}
                    className={cx(
                        { 'absoluteFullContainer': isPhone }
                    )}
                    scoresTipsHandlers={scoresTipsHandlers}
                />

                <OverviewPopup {...overviewPopupHandlers}
                    className={cx(
                        { 'absoluteFullContainer': isPhone }
                    )}
                    inMain
                />
            </div>

            <LyricToggleExpand
                inMain
                handleLyricSectionExpand={handleLyricSectionExpand}
            />

            <DotsSlide {...dotsSectionHandlers} />

            <ScoresTips {...scoresTipsHandlers}
                inMainRightSide
            />

            <TipsPopup {...tipsPopupHandlers} />

            <Nav {...navSectionHandlers} />

            <CarouselToggle
                handleCarouselNavToggle={handleCarouselNavToggle}
            />
        </div>
    )
}

Main.propTypes = mainPropTypes

export default connect(mapStateToProps)(Main)
