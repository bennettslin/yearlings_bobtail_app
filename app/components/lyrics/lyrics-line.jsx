import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TextBlock from '../text/text-block'
import { TITLE } from 'helpers/constants'

class LyricsLine extends Component {

    constructor(props) {
        super(props)
    }

    /**
     * Ugly workaround to adjust line width to fit child text when text wraps
     * onto a new line, but it works. (Well, fingers crossed.)
     */
    componentWillMount() { this.setDOMWidth(true) }
    componentDidMount() { this.setDOMWidth() }
    componentWillUpdate(nextProps, nextState) { this.setDOMWidth(true) }
    componentDidUpdate(prevProps, prevState) { this.setDOMWidth() }
    setDOMWidth(unset) {
        if (this.props.columnKey !== TITLE) {
            const parent = ReactDOM.findDOMNode(this.myParent)
            if (parent) {
                if (unset) {
                    parent.removeAttribute('style')

                } else {
                    const offsetWidth = ReactDOM.findDOMNode(this.myChild).offsetWidth

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
