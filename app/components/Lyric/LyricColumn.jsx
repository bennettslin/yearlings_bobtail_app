// Container for lyric section.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import LyricAccess from './LyricAccess'
import LyricToggleExpand from './LyricToggleExpand'
import LyricToggleEar from './LyricToggleEar'
import Lyric from './Lyric'
import VerseBar from '../verse/VerseBar'
import { getComponentShouldUpdate } from '../../helpers/generalHelper'

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

    return (
        <div
            className={cx(
                'LyricColumn',
                'position__lyricColumn',
                isHeavyRenderReady ? 'renderReady' : 'renderUnready'
            )}
            ref={myRef}
            onTransitionEnd={handleTransition}
        >
            <div className={cx(
                    'LyricColumn-animatable',
                    { 'overrideAnimate': shouldOverrideAnimate }
                )}
                onTransitionEnd={handleAnimatableTransition}
            >
                <VerseBar {...verseBarProps}
                    isAbove
                />
                <VerseBar {...verseBarProps} />

                <LyricToggleEar
                    handleLyricColumnSelect={handleLyricColumnSelect}
                />

                <LyricToggleExpand
                    handleLyricSectionExpand={handleLyricSectionExpand}
                />

                <Lyric {...other}
                    isTransitioningHeight={isTransitioningHeight}
                    completeHeightTransition={completeHeightTransition}
                />

                <LyricAccess />
            </div>
        </div>
    )
}

LyricColumnView.propTypes = lyricColumnViewPropTypes

export default connect(mapStateToProps)(LyricColumn)
