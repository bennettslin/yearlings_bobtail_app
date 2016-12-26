import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TextBlock from '../text/text-block'
import { TITLE, CENTRE } from 'helpers/constants'

// Making this a React component to attach ref for line width resizing.
class LyricsLine extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        /**
         * FIXME: Setting timeout of zero seems to work! Keep debugging code in
         * place for now. Rip it out once confident that this is indeed the
         * final fix for this issue.
         */
        // this.setDOMWidth(false, true) // Debug statement
        this.setDOMWidth(true)
        window.setTimeout(this.setDOMWidth.bind(this), 0)
    }

    /**
     * Ugly workaround to adjust line width to fit child text when text wraps
     * onto a new line, but it works. (Well, fingers crossed.) Update: Seems
     * this only needs to be done when component is updated, not when it is
     * first mounted?
     */
    componentWillUpdate(nextProps, nextState) {
        if (this._shouldResetWidthBasedOnProps(this.props, nextProps)) {
            this.setDOMWidth(true)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this._shouldResetWidthBasedOnProps(prevProps, this.props)) {
            this.setDOMWidth()
        }
    }

    _shouldResetWidthBasedOnProps(oldProps, newProps) {
        const shouldResetWidthBasedOnProps =
            oldProps.selectedSongIndex !== newProps.selectedSongIndex ||
            oldProps.showSingleLyricColumn !== newProps.showSingleLyricColumn ||
            oldProps.selectedLyricColumnIndex !== newProps.selectedLyricColumnIndex

        // if (this.props.verseIndexForDebugging === 1) {
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
            const parent = ReactDOM.findDOMNode(this.myParent)
            if (parent) {
                if (unset) {
                    // parent.removeAttribute('style')

                    // Just an arbitrarily large number.
                    parent.style.maxWidth = '5000px'

                } else {
                    // FIXME: The issue seems to be that the offsetWidth is wrong when this method gets called in componentDidMount.

                    const child = ReactDOM.findDOMNode(this.myChild),
                        offsetWidth = child.offsetWidth

                    // if (this.props.verseIndexForDebugging === 1) {
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
                ref={(ref) => this.myParent = ref}
                className={`line ${columnKey}`}
            >
                <TextBlock {...other}
                    ref={(ref) => this.myChild = ref}
                    isLyric={true}
                />
            </div>
        )
    }
}

export default LyricsLine
