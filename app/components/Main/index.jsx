/**
 * Column to show all sections, excluding lyrics and popups. Knows no state, so
 * should not update.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRenderStore } from 'flux/render/action'

import CarouselToggle from './CarouselToggle'
import LeftShelf from './LeftShelf'
import Nav from '../Nav'
import Carousel from '../Carousel'
import DotsSlide from '../DotsSlide'
import LyricToggleExpand from '../Lyric/Toggle/Expand'
import AnnotationPopup from '../Popups/Annotation'
import OverviewPopup from '../Popups/Overview'
import TipsPopup from '../Popups/Tips'
import ScoresTips from '../ScoresTips'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

const mapStateToProps = ({
    renderStore: { canMainRender }
}) => ({
    canMainRender
})

class Main extends Component {

    static propTypes = {
        // Through Redux.
        canMainRender: PropTypes.bool.isRequired,
        updateRenderStore: PropTypes.func.isRequired,

        // From parent.
        handleCarouselNavToggle: PropTypes.func.isRequired,

        annotationPopupHandlers: PropTypes.object.isRequired,
        carouselSectionHandlers: PropTypes.object.isRequired,
        navSectionHandlers: PropTypes.object.isRequired
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
                this._mainDidRender, 0
            )
        }
    }

    _mainDidRender = () => {
        this.props.updateRenderStore({ didMainRender: true })
    }

    render() {
        const {
            handleCarouselNavToggle,
            annotationPopupHandlers,
            carouselSectionHandlers,
            navSectionHandlers
        } = this.props

        /**
         * In phone, flex container's children have absolute position.
         */

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
                <Carousel {...carouselSectionHandlers} />
                <div className={cx(
                    'Main__flexContainer',
                    'absoluteFullContainer'
                )}>
                    <LeftShelf />
                    <OverviewPopup inMain />
                </div>
                <LyricToggleExpand inMain />
                <DotsSlide />
                <ScoresTips inMainRightSide />
                <TipsPopup />
                <CarouselToggle
                    handleCarouselNavToggle={handleCarouselNavToggle}
                />
            </div>
        )
    }
}

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateRenderStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Main)
