/**
 * Column to show all sections, excluding lyrics and popups. Knows no state, so
 * should not update.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Nav from '../Nav/Nav'
import CarouselToggle from '../Carousel/CarouselToggle'
import Carousel from '../Carousel/Carousel'
import DotsSlide from '../DotsSlide/DotsSlide'
import LeftShelf from './LeftShelf'
import LyricToggleExpand from '../Lyric/LyricToggle/LyricToggleExpand'
import AnnotationPopup from '../Popups/Annotation'
import OverviewPopup from '../Popups/Overview'
import TipsPopup from '../Popups/Tips'
import ScoresTips from '../ScoresTips/ScoresTips'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'
import { getIsPhone } from 'helpers/responsiveHelper'

const mapStateToProps = ({
    deviceStore: { deviceIndex },
    renderStore: { canMainRender }
}) => ({
    deviceIndex,
    canMainRender
})

class Main extends Component {

    static propTypes = {
        // Through Redux.
        canMainRender: PropTypes.bool.isRequired,
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
        scoresTipsHandlers: PropTypes.object.isRequired,

        mainDidRender: PropTypes.func.isRequired,
        carouselDidRender: PropTypes.func.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canMainRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.canMainRender && !prevProps.canMainRender) {
            logger.warn('Main rendered.')

            setTimeout(
                this.props.mainDidRender, 0
            )
        }
    }

    render() {
        const {
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
                tipsPopupHandlers,

                carouselDidRender

            } = this.props,

            /**
             * In phone, flex container's children have absolute position.
             */
            isPhone = getIsPhone(deviceIndex)

        return (
            <div className={cx(
                'Main',
                'position__mainColumn',
                'width__mainColumn'
            )}>

                <AnnotationPopup {...annotationPopupHandlers}
                    inMain
                />

                <Nav {...navSectionHandlers} />

                <Carousel {...carouselSectionHandlers}
                    carouselDidRender={carouselDidRender}
                />

                <div className={cx(
                    'Main__flexContainer',
                    'absoluteFullContainer'
                )}>
                    <LeftShelf {...leftShelfToggleSectionHandlers}
                        isPhone={isPhone}
                        scoresTipsHandlers={scoresTipsHandlers}
                    />

                    <OverviewPopup {...overviewPopupHandlers}
                        inMain
                        isPhone={isPhone}
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

                <CarouselToggle
                    handleCarouselNavToggle={handleCarouselNavToggle}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Main)
