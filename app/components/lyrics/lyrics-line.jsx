import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TextBlock from '../text/text-block'

class LyricsLine extends Component {

    constructor(props) {
        super(props)

        this.state = {
            styleObject: {}
        }
    }

    // componentWillReceiveProps() {
    //     if (this.myChild) {
    //         const parentWidth = ReactDOM.findDOMNode(this.myParent).offsetWidth,
    //             offsetWidth = ReactDOM.findDOMNode(this.myChild).offsetWidth
    //
    //         this.setState({
    //             styleObject: {
    //                 maxWidth: offsetWidth - 18 + 'px'
    //             }
    //         })
    //     }
    // }

    render() {
        const { className,
                ...other } = this.props

        return (
            <div
                ref={(ref) => this.myParent = ref}
                className={className}
                style={this.state.styleObject}
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
