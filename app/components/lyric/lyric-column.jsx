// Container for lyric section.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import LyricToggle from './lyric-toggle'
import LyricEarToggle from './lyric-ear-toggle'
import LyricSection from './lyric-section'
import AccessIconsBlock from '../access/access-icons-block'
import VerseBar from '../verse/verse-bar'
import { NAVIGATION_ENTER_KEY,
         NAVIGATION_LEFT_KEY,
         NAVIGATION_RIGHT_KEY,
         NAVIGATION_UP_KEY,
         NAVIGATION_DOWN_KEY } from '../../constants/access'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

const mapStateToProps = ({
    isHeavyRenderReady,
    selectedAnnotationIndex,
    selectedCarouselNavIndex,
    selectedVerseIndex,
    sliderVerseIndex,
    interactivatedVerseIndex
}) => ({
    isHeavyRenderReady,
    selectedAnnotationIndex,
    selectedCarouselNavIndex,
    selectedVerseIndex,
    sliderVerseIndex,
    interactivatedVerseIndex
})

/*************
 * CONTAINER *
 *************/

class LyricColumn extends Component {

    static propTypes = {
        // Through Redux.

        // From parent.
        handleScrollAfterLyricRerender: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleScrollAfterLyricRerender = this._handleScrollAfterLyricRerender.bind(this)
        this._handleTransition = this._handleTransition.bind(this)
        this._handleAnimatableTransition = this._handleAnimatableTransition.bind(this)
        this.completeHeightTransition = this.completeHeightTransition.bind(this)

        this.state = {
            isTransitioningHeight: false,

            /**
             * When a dot is deselected, don't animate elements that get hidden
             * when transitioning between songs.
             */
            shouldOverrideAnimate: false,

            scrollTimeoutId: null
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { props, state } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'isHeavyRenderReady',
                    'selectedAnnotationIndex',
                    'selectedCarouselNavIndex',
                    'selectedVerseIndex',
                    'sliderVerseIndex'
                ]
            }) || getComponentShouldUpdate({
                props: state,
                nextProps: nextState,
                updatingPropsArray: [
                    'isTransitioningHeight'
                ]
            })

        return componentShouldUpdate
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.isHeavyRenderReady && !nextProps.isHeavyRenderReady) {
            this.setState({
                shouldOverrideAnimate: true
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.isHeavyRenderReady && this.props.isHeavyRenderReady) {
            const scrollTimeoutId = setTimeout(
                this._handleScrollAfterLyricRerender, 200
            )

            clearTimeout(this.state.scrollTimeoutId)

            this.setState({
                scrollTimeoutId
            })
        }
    }

    _handleScrollAfterLyricRerender() {
        this.props.handleScrollAfterLyricRerender()
    }

    _handleTransition(e) {
        if (e.propertyName === 'height') {
            this.setState({
                isTransitioningHeight: true
            })
        }
    }

    _handleAnimatableTransition(e) {
        if (e.propertyName === 'opacity') {
            this.setState({
                isTransitioningHeight: true
            })
        }
    }

    completeHeightTransition() {
        this.setState({
            isTransitioningHeight: false,
            shouldOverrideAnimate: false
        })
    }

    render() {

        /* eslint-disable no-unused-vars */
        const { handleScrollAfterLyricRerender,
        /* eslint-enable no-unused-vars */

                ...other } = this.props

        return (
            <LyricColumnView {...other}
                myRef={(node) => (this.myLyricColumn = node)}
                shouldOverrideAnimate={this.state.shouldOverrideAnimate}
                isTransitioningHeight={this.state.isTransitioningHeight}
                handleTransition={this._handleTransition}
                handleAnimatableTransition={this._handleAnimatableTransition}
                completeHeightTransition={this.completeHeightTransition}
            />
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const lyricColumnViewPropTypes = {
    // Through Redux.
    isHeavyRenderReady: PropTypes.bool.isRequired,
    selectedAnnotationIndex: PropTypes.number.isRequired,
    selectedCarouselNavIndex: PropTypes.number.isRequired,
    selectedVerseIndex: PropTypes.number.isRequired,
    sliderVerseIndex: PropTypes.number.isRequired,
    interactivatedVerseIndex: PropTypes.number.isRequired,

    // From parent.
    myRef: PropTypes.func.isRequired,
    shouldOverrideAnimate: PropTypes.bool.isRequired,
    isTransitioningHeight: PropTypes.bool.isRequired,
    handleTransition: PropTypes.func.isRequired,
    handleAnimatableTransition: PropTypes.func.isRequired,
    completeHeightTransition: PropTypes.func.isRequired,

    handleLyricColumnSelect: PropTypes.func.isRequired,
    handleLyricSectionExpand: PropTypes.func.isRequired,
    handleVerseBarSelect: PropTypes.func.isRequired,
    handleVerseBarWheel: PropTypes.func.isRequired
},

LyricColumnView = ({

    // From props.
    isHeavyRenderReady,
    selectedAnnotationIndex,
    selectedCarouselNavIndex,
    selectedVerseIndex,
    sliderVerseIndex,
    interactivatedVerseIndex,

    handleLyricColumnSelect,
    handleLyricSectionExpand,
    handleVerseBarSelect,
    handleVerseBarWheel,

    // From controller.
    myRef,
    shouldOverrideAnimate,
    isTransitioningHeight,
    handleTransition,
    handleAnimatableTransition,
    completeHeightTransition,

...other }) => {

    // If there is a slider verse, override selected verse.
    const verseIndex = sliderVerseIndex > -1 ?
            sliderVerseIndex : selectedVerseIndex,
        verseBarProps = {
            verseIndex,
            handleVerseBarSelect,
            handleVerseBarWheel
        }

    return (
        <div
            className={classnames(
                'column',
                'lyric-column',
                isHeavyRenderReady ? 'render-ready' : 'render-unready'
            )}
            ref={myRef}
            onTransitionEnd={handleTransition}
        >
            <div className="lyric-column-gradient" />
            <div className={classnames(
                    'lyric-column-animatable',
                    { 'override-animate': shouldOverrideAnimate }
                )}
                onTransitionEnd={handleAnimatableTransition}
            >
                <div className="lyric-collapsed-fade-top" />

                <VerseBar {...verseBarProps}
                    isAbove={true}
                />
                <VerseBar {...verseBarProps} />

                <LyricEarToggle
                    handleLyricColumnSelect={handleLyricColumnSelect}
                />

                <LyricToggle
                    handleLyricSectionExpand={handleLyricSectionExpand}
                />

                <LyricSection {...other}
                    isTransitioningHeight={isTransitioningHeight}
                    completeHeightTransition={completeHeightTransition}
                />

                <div className="left-right-enter">
                    <AccessIconsBlock
                        className="left-right"
                        accessIconKeys={[
                            NAVIGATION_LEFT_KEY,
                            NAVIGATION_RIGHT_KEY
                        ]}
                        accessKeysShown={Boolean(
                            selectedCarouselNavIndex &&
                            !selectedAnnotationIndex
                        )}
                    />

                    <AccessIconsBlock
                        className="enter"
                        accessIconKeys={[
                            NAVIGATION_ENTER_KEY
                        ]}
                        accessKeysShown={Boolean(
                            selectedCarouselNavIndex &&
                            !selectedAnnotationIndex &&
                            interactivatedVerseIndex < 0
                        )}
                    />
                </div>

                <AccessIconsBlock
                    className="up-down"
                    accessIconKeys={[
                        NAVIGATION_UP_KEY,
                        NAVIGATION_DOWN_KEY
                    ]}
                    accessKeysShown={Boolean(
                        !selectedAnnotationIndex
                    )}
                />
            </div>
        </div>
    )
}

LyricColumnView.propTypes = lyricColumnViewPropTypes

export default connect(mapStateToProps)(LyricColumn)
