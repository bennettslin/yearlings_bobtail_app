// Component for a single line in a verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import TextBlock from '../text/text-block'
import { TITLE, CENTRE } from '../../constants/lyrics'

// FIXME: This whole thing is a mess...
class VerseLine extends Component {

    componentDidMount() {
        /**
         * FIXME: Setting timeout of zero seems to work! Keep debugging code in
         * place for now. Rip it out once confident that this is indeed the
         * final fix for this issue.
         */

        // this.setDOMWidth(false, true) // Debug statement

        window.setTimeout(this.setDOMWidth.bind(this, true), 0)
        window.setTimeout(this.setDOMWidth.bind(this), 1)
    }

    /**
     * Ugly workaround to adjust line width to fit child text when text wraps
     * onto a new line, but it works. (Well, fingers crossed.) Update: Seems
     * this only needs to be done when component is updated, not when it is
     * first mounted?
     */
    componentWillUpdate(nextProps) {
        if (this._shouldResetWidthBasedOnProps(this.props, nextProps)) {
            this.setDOMWidth(true)
        }
    }

    componentDidUpdate(prevProps) {
        if (this._shouldResetWidthBasedOnProps(prevProps, this.props)) {
            this.setDOMWidth()
        }
    }

    _shouldResetWidthBasedOnProps(oldProps, newProps) {
        const shouldResetWidthBasedOnProps =
            /**
             * If performance were not an issue, we would reset based on any
             * screen width change. Since it is, we will do so strategically.
             * We will reset for large width changes such as between device
             * types, or when switching from portait to landscape.
             */
            oldProps.deviceIndex !== newProps.deviceIndex ||
            // oldProps.isPortrait !== newProps.isPortrait ||

            /**
             * Resetting is mandatory when selecting a new song or column, or
             * when switching number of columns.
             */
            oldProps.selectedSongIndex !== newProps.selectedSongIndex ||

            // TEMP NOTE: This used to check for the hidden lyric column key.
            oldProps.selectedLyricColumnIndex !== newProps.selectedLyricColumnIndex ||
            oldProps.showOneOfTwoLyricColumns !== newProps.showOneOfTwoLyricColumns ||

            // In verse bar.
            (!!oldProps.inVerseBar && oldProps.text !== newProps.text)

        // if (oldProps.inVerseBar) {
        //     console.error('shouldResetWidthBasedOnProps', shouldResetWidthBasedOnProps);
        // }

        return shouldResetWidthBasedOnProps
    }

    setDOMWidth(unset, debugLogOnly) {
        /**
         * TODO: I'm not sure why this method is buggy with centre columns. So
         * I'm excluding it for now, since the only songs that have them, the
         * doublespeaker ones, don't need them for wide layout, and of course
         * centre columns become left columns in narrow layout.
         */

        /**
         * TODO: Now that the issue seems resolved, can we not exclude centre
         * columns?
         */
        if (this.props.columnKey !== TITLE && this.props.columnKey !== CENTRE) {
            const parent = this.myParent
            if (parent) {
                if (unset) {
                    // parent.removeAttribute('style')

                    // Just an arbitrarily large number.
                    parent.style.maxWidth = '5000px'

                } else {
                    // FIXME: The issue seems to be that the offsetWidth is wrong when this method gets called in componentDidMount.

                    const child = this.myChild,
                        offsetWidth = child.offsetWidth

                    // if (this.props.verseSelected) {
                    //     console.error('offsetWidth', offsetWidth);
                    // }

                    if (!debugLogOnly) {
                        // Allow for 10px padding on each side.
                        parent.style.maxWidth = offsetWidth - 20 + 'px'
                    }
                }
            }
        }
    }

    render() {
        const { columnKey,
                isHidden,
                ...other } = this.props

        return (
            <div
                ref={(node) => (this.myParent = node)}
                className={classnames(
                    'line',
                    { 'hidden': isHidden,
                      [columnKey]: columnKey !== TITLE }
                )}
            >
                <span ref={(node) => (this.myChild = node)}>
                    <TextBlock {...other}
                        ref={(node) => (this.myReactChild = node)}
                        isLyric={true}
                    />
                </span>
            </div>
        )
    }
}

VerseLine.defaultProps = {
    inVerseBar: false,
    isHidden: false
}

VerseLine.propTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,
    selectedLyricColumnIndex: PropTypes.number.isRequired,
    showOneOfTwoLyricColumns: PropTypes.bool.isRequired,

    // From parent.
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object
    ]).isRequired,

    inVerseBar: PropTypes.bool.isRequired,
    isHidden: PropTypes.bool.isRequired,
    columnKey: PropTypes.string.isRequired,
}

export default connect(({
    deviceIndex,
    selectedSongIndex,
    selectedLyricColumnIndex,
    showOneOfTwoLyricColumns
}) => ({
    deviceIndex,
    selectedSongIndex,
    selectedLyricColumnIndex,
    showOneOfTwoLyricColumns
}))(VerseLine)
