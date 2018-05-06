// Container for lyric section.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import omit from 'lodash.omit'

import LyricColumnAccess from './LyricColumnAccess'
import LyricToggleExpand from './LyricToggleExpand'
import LyricToggleEar from './LyricToggleEar'
import Lyric from '../Lyric/Lyric'
import VerseBar from './VerseBar'
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
        this.completeHeightTransition = this.completeHeightTransition.bind(this)

        this.state = {
            isTransitioningHeight: false,

            /**
             * When a dot is deselected, don't animate elements that get hidden
             * when transitioning between songs.
             */
            overrideTransitions: false,

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
                overrideTransitions: true
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
        if (e.propertyName === 'height' || e.propertyName === 'opacity') {
            this.setState({
                isTransitioningHeight: true
            })
        }
    }

    completeHeightTransition() {
        this.setState({
            isTransitioningHeight: false,
            overrideTransitions: false
        })
    }

    render() {
        const other = omit(this.props, 'handleScrollAfterLyricRerender')

        return (
            <LyricColumnView {...other}
                overrideTransitions={this.state.overrideTransitions}
                isTransitioningHeight={this.state.isTransitioningHeight}
                handleTransition={this._handleTransition}
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
    // myRef: PropTypes.func.isRequired,
    overrideTransitions: PropTypes.bool.isRequired,
    isTransitioningHeight: PropTypes.bool.isRequired,
    handleTransition: PropTypes.func.isRequired,
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
    overrideTransitions,
    isTransitioningHeight,
    handleTransition,
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
                'position__lyricColumn__desktop',
                'position__lyricColumn__mobile',
                'gradientMask__lyricColumn__desktop',
                isHeavyRenderReady ? 'renderReady' : 'renderUnready',
                { 'overrideTransitions': overrideTransitions }
            )}
            onTransitionEnd={handleTransition}
        >
            <Lyric {...other}
                isTransitioningHeight={isTransitioningHeight}
                completeHeightTransition={completeHeightTransition}
            />

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

            <LyricColumnAccess />
        </div>
    )
}

LyricColumnView.propTypes = lyricColumnViewPropTypes

export default connect(mapStateToProps)(LyricColumn)
