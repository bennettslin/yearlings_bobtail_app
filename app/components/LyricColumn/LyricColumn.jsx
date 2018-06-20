// Container for lyric section.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import omit from 'lodash.omit'

import LyricColumnAccess from './LyricColumnAccess'
import LyricToggleEar from './LyricToggleEar'
import LyricToggleExpand from './LyricToggleExpand'
import LyricToggleScroll from './LyricToggleScroll'
import Lyric from '../Lyric/Lyric'
import VerseBar from './VerseBar'
import { getComponentShouldUpdate } from '../../helpers/generalHelper'

const mapStateToProps = ({
    appMounted,
    isHeavyRenderReady
}) => ({
    appMounted,
    isHeavyRenderReady
})

/*************
 * CONTAINER *
 *************/

class LyricColumn extends Component {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired,
        isHeavyRenderReady: PropTypes.bool.isRequired,

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
            scrollTimeoutId: null
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { props, state } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'isHeavyRenderReady'
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
        // Previously under componentWillReceiveProps.
        if (!prevProps.appMounted && this.props.appMounted) {
            this.props.handleScrollAfterLyricRerender()
        }

        if (!prevProps.isHeavyRenderReady && this.props.isHeavyRenderReady) {
            const scrollTimeoutId = setTimeout(
                this._handleScrollAfterLyricRerender, 0
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

    completeHeightTransition() {
        this.setState({
            isTransitioningHeight: false
        })
    }

    render() {
        const other = omit(this.props, 'handleScrollAfterLyricRerender')

        return (
            <LyricColumnView {...other}
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
    // From parent.
    isTransitioningHeight: PropTypes.bool.isRequired,
    handleTransition: PropTypes.func.isRequired,
    completeHeightTransition: PropTypes.func.isRequired,

    handleLyricColumnSelect: PropTypes.func.isRequired,
    handleLyricSectionExpand: PropTypes.func.isRequired,
    handleLyricAutoScroll: PropTypes.func.isRequired,
    handleVerseBarSelect: PropTypes.func.isRequired,
    handleVerseBarWheel: PropTypes.func.isRequired
},

LyricColumnView = ({

    // From props.
    handleLyricColumnSelect,
    handleLyricSectionExpand,
    handleLyricAutoScroll,
    handleVerseBarSelect,
    handleVerseBarWheel,

    // From controller.
    isTransitioningHeight,
    handleTransition,
    completeHeightTransition,

...other }) => {

    const verseBarProps = {
        handleVerseBarSelect,
        handleVerseBarWheel
    }

    return (
        <div
            className={cx(
                'LyricColumn',
                'position__lyricColumn__desktop',
                'position__lyricColumn__mobile',
                'gradientMask__lyricColumn__desktop'
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

            <LyricToggleScroll
                handleLyricAutoScroll={handleLyricAutoScroll}
            />

            <LyricColumnAccess />
        </div>
    )
}

LyricColumnView.propTypes = lyricColumnViewPropTypes

export default connect(mapStateToProps)(LyricColumn)
