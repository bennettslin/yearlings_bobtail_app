import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TextBlock from '../text/text-block'
import { TITLE, CENTRE } from 'helpers/constants'

// Making this a React component to attach ref for line width resizing.
class LyricsLine extends Component {

    constructor(props) {
        super(props)
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
        return oldProps.selectedSongIndex !== newProps.selectedSongIndex ||
            oldProps.showSingleLyricColumn !== newProps.showSingleLyricColumn ||
            oldProps.selectedLyricColumnIndex !== newProps.selectedLyricColumnIndex

    }

    setDOMWidth(unset) {
        /**
         * TODO: I'm not sure why this method is buggy with centre columns. So
         * I'm excluding it for now, since the only songs that have them, the
         * doublespeaker ones, don't need them for wide layout, and of course
         * centre columns become left columns in narrow layout.
         */
        if (this.props.columnKey !== TITLE && this.props.columnKey !== CENTRE) {
            const parent = ReactDOM.findDOMNode(this.myParent)
            if (parent) {
                if (unset) {
                    parent.removeAttribute('style')

                } else {
                    // FIXME: The issue seems to be that the offsetWidth is wrong when this method gets called in componentDidMount.

                    const child = ReactDOM.findDOMNode(this.myChild),
                        offsetWidth = child.offsetWidth

                    // Allow for 10px padding on each side.
                    parent.style.maxWidth = offsetWidth - 20 + 'px'
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
