// Component for a single line in a verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import TextBlock from '../text/text-block'
import { TITLE, CENTRE } from '../../constants/lyrics'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

class VerseLine extends Component {

    componentDidMount() {
        /**
         * FIXME: Setting timeout of zero seems to work! Keep debugging code in
         * place for now. Rip it out once confident that this is indeed the
         * final fix for this issue.
         */

        window.setTimeout(this.setDOMWidth.bind(this, true), 0)
        window.setTimeout(this.setDOMWidth.bind(this), 1)
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'deviceIndex',
                    'selectedSongIndex',
                    'selectedLyricColumnIndex',
                    'showOneOfTwoLyricColumns',
                    {
                        onlyIfTrueInNextProps: 'inVerseBar',
                        subUpdatingKey: 'text'
                    }
                ]
            })

        return componentShouldUpdate
    }

    /**
     * Ugly workaround to adjust line width to fit child text when text wraps
     * onto a new line, but it works. (Well, fingers crossed.) Update: Seems
     * this only needs to be done when component is updated, not when it is
     * first mounted?
     */
    componentWillUpdate() {
        this.setDOMWidth(true)
    }

    componentDidUpdate() {
        this.setDOMWidth()
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

                    // if (this.props.text === 'Oh, has Willy the Cocoa come') {
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
                ...other } = this.props

        return (
            <div
                ref={(node) => (this.myParent = node)}
                className={classnames(
                    'line',
                    { [columnKey]: columnKey !== TITLE }
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
    inVerseBar: false
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
    columnKey: PropTypes.string.isRequired
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
