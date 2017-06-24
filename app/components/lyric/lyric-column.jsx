// Container for lyric section.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import LyricToggle from '../lyric/lyric-toggle'
import LyricEarToggle from '../lyric/lyric-ear-toggle'
import LyricSection from '../lyric/lyric-section'
import VerseBar from '../verse/verse-bar'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

/*************
 * CONTAINER *
 *************/

class LyricColumn extends Component {

    constructor(props) {
        super(props)

        this._handleTransition = this._handleTransition.bind(this)
        this._handleAnimatableTransition = this._handleAnimatableTransition.bind(this)
        this.completeHeightTransition = this.completeHeightTransition.bind(this)

        this.state = {
            isTransitioningHeight: false
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { props, state } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'selectedSongIndex'
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

    componentDidUpdate(prevProps) {
        if (prevProps.selectedSongIndex !== this.props.selectedSongIndex) {
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
            isTransitioningHeight: false
        })
    }

    render() {

        /* eslint-disable no-unused-vars */
        const { selectedSongIndex,
                handleScrollAfterLyricRerender,
        /* eslint-enable no-unused-vars */

                ...other } = this.props

        return (
            <LyricColumnView {...other}
                myRef={(node) => (this.myLyricColumn = node)}
                isTransitioningHeight={this.state.isTransitioningHeight}
                handleTransition={this._handleTransition}
                handleAnimatableTransition={this._handleAnimatableTransition}
                completeHeightTransition={this.completeHeightTransition}
            />
        )
    }
}

LyricColumn.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,

    // From parent.
    handleScrollAfterLyricRerender: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const LyricColumnView = ({

    // From props.
    selectedVerseIndex,
    sliderVerseIndex,

    handleLyricColumnSelect,
    handleLyricSectionExpand,
    handleVerseBarSelect,
    handleVerseBarWheel,

    // From controller.
    myRef,
    isTransitioningHeight,
    handleTransition,
    handleAnimatableTransition,
    completeHeightTransition,

...other }) => {

    // If there is a slider verse, override selected verse.
    const verseIndex = sliderVerseIndex > -1 ? sliderVerseIndex : selectedVerseIndex,
        verseBarProps = {
            verseIndex,
            handleVerseBarSelect,
            handleVerseBarWheel
        }

    return (
        <div
            className="column lyric-column"
            ref={myRef}
            onTransitionEnd={handleTransition}
        >
            <div className="lyric-column-animatable"
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

LyricColumnView.propTypes = {
    // Through Redux.
    selectedVerseIndex: PropTypes.number.isRequired,
    sliderVerseIndex: PropTypes.number.isRequired,

    // From parent.
    myRef: PropTypes.func.isRequired,
    isTransitioningHeight: PropTypes.bool.isRequired,
    handleTransition: PropTypes.func.isRequired,
    handleAnimatableTransition: PropTypes.func.isRequired,
    completeHeightTransition: PropTypes.func.isRequired,

    handleLyricColumnSelect: PropTypes.func.isRequired,
    handleLyricSectionExpand: PropTypes.func.isRequired,
    handleVerseBarSelect: PropTypes.func.isRequired,
    handleVerseBarWheel: PropTypes.func.isRequired
}

export default connect(({
    selectedSongIndex,
    selectedVerseIndex,
    sliderVerseIndex
}) => ({
    selectedSongIndex,
    selectedVerseIndex,
    sliderVerseIndex
}))(LyricColumn)
