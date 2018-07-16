// Container for lyric audio button and all lines of a single verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import VerseLines from './VerseLines'

import { getPropsAreShallowEqual } from '../../helpers/generalHelper'

import { VERSE_SCROLL } from '../../constants/dom'

const mapStateToProps = ({
    canLyricRender,
    renderableStore
}) => ({
    canLyricRender,
    renderableSongIndex: renderableStore.renderableSongIndex
})

/*************
 * CONTAINER *
 *************/

class Verse extends Component {

    static defaultProps = {
        inMain: true,
        inVerseBar: false
    }

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,

        // From parent.
        verseObject: PropTypes.object.isRequired,
        verseIndex: PropTypes.number,
        isInteractable: PropTypes.bool,

        inMain: PropTypes.bool.isRequired,
        inVerseBar: PropTypes.bool.isRequired,
        handleLyricAnnotationSelect: PropTypes.func,
        handleVerseInteractivate: PropTypes.func,

        setVerseRef: PropTypes.func
    }

    constructor(props) {
        super(props)

        this._handleInteractivatableClick = this._handleInteractivatableClick.bind(this)
        this.setVerseRef = this.setVerseRef.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps,
            alwaysBypassCheck: {
                inMain: true,
                isTruncatable: true,
                inVerseBar: true
            }
        })
    }

    _handleInteractivatableClick(e) {
        // Allow clicks on interactable verses.
        const {
            verseIndex,
            isInteractable,
            handleVerseInteractivate
            } = this.props

        if (isInteractable) {
            handleVerseInteractivate(e, verseIndex)
        }
    }

    getIsInteractable() {
        const {
            inVerseBar,
            verseIndex
        } = this.props

        return !isNaN(verseIndex) && !inVerseBar
    }

    setVerseRef(node) {
        if (this.getIsInteractable()) {
            this.props.setVerseRef({
                node,
                index: this.props.verseIndex
            })
        }
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                renderableSongIndex,
                canLyricRender,
                handleVerseInteractivate,
                setVerseRef,
                dispatch,
                /* eslint-enable no-unused-vars */

                handleLyricAnnotationSelect,

                ...other
            } = this.props,

            {
                inVerseBar,
                isInteractable,
                verseObject
            } = other,

            {
                lyric,
                centre,
                isTitle
            } = verseObject

        return (
            <VerseView {...other}
                setRef={this.setVerseRef}
                isTitle={isTitle}
                isDoubleSpeaker={!lyric && !centre}
                isInteractable={isInteractable}
                handleInteractivatableClick={this._handleInteractivatableClick}
                {
                    ...!inVerseBar && {
                        handleAnchorClick: handleLyricAnnotationSelect
                    }
                }
            />
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const verseViewDefaultProps = {
    isInteractivated: false
},

verseViewPropTypes = {
    // From parent.
    inVerseBar: PropTypes.bool.isRequired,
    verseIndex: PropTypes.number,
    isInteractable: PropTypes.bool,

    handleInteractivatableClick: PropTypes.func,
    setRef: PropTypes.func,

    children: PropTypes.any
},

VerseView = ({

    // From controller.
    verseClassName,
    isInteractable,
    inMain,

    handleInteractivatableClick,
    setRef,

    children,

...other }) => {

    const {
        inVerseBar,
        verseIndex,
        isTitle
    } = other

    return (
        <div
            key={isInteractable ? verseIndex : undefined}
            ref={setRef}
            className={cx(
                'Verse',
                isTitle && 'Verse__title',
                !inMain && 'Verse__side',
                inVerseBar ? 'Verse__inBar' : 'Verse__inLyric',

                !isNaN(verseIndex) &&
                    `${VERSE_SCROLL}__${verseIndex}`,

                // title, even, odd, inSide.
                verseClassName && `verse__${verseClassName}`,
                isInteractable && 'Verse__interactable'
            )}
            onClick={handleInteractivatableClick}
            onTouchStart={handleInteractivatableClick}
        >
            {children}

            <VerseLines {...other} />
        </div>
    )
}

VerseView.defaultProps = verseViewDefaultProps
VerseView.propTypes = verseViewPropTypes

export default connect(mapStateToProps)(Verse)
