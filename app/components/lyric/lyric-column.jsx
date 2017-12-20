// Container for lyric section.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import LyricToggle from '../lyric/lyric-toggle'
import LyricEarToggle from '../lyric/lyric-ear-toggle'
import LyricSection from '../lyric/lyric-section'
import VerseBar from '../verse/verse-bar'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

const mapStateToProps = ({
    isHeavyRenderReady,
    selectedVerseIndex,
    sliderVerseIndex
}) => ({
    isHeavyRenderReady,
    selectedVerseIndex,
    sliderVerseIndex
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

        this._handleTransition = this._handleTransition.bind(this)
        this._handleAnimatableTransition = this._handleAnimatableTransition.bind(this)
        this.completeHeightTransition = this.completeHeightTransition.bind(this)

        this.state = {
            isTransitioningHeight: false,

            /**
             * When a dot is deselected, don't animate elements that get hidden
             * when transitioning between songs.
             */
            shouldOverrideAnimate: false
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { props, state } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'isHeavyRenderReady',
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
            this.props.handleScrollAfterLyricRerender()
        }
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
    selectedVerseIndex: PropTypes.number.isRequired,
    sliderVerseIndex: PropTypes.number.isRequired,

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
    selectedVerseIndex,
    sliderVerseIndex,

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

    return null && (
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
            </div>
        </div>
    )
}

LyricColumnView.propTypes = lyricColumnViewPropTypes

export default connect(mapStateToProps)(LyricColumn)
