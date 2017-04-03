import React, { Component } from 'react'
import DotBlock from '../dot/dots-block'

/*************
 * CONTAINER *
 *************/

 const DotsSection = (props) => {

     return (
         <DotsSectionView {...props} />
     )
 }

/****************
 * PRESENTATION *
 ****************/

class DotsSectionView extends Component {

    constructor(props) {
        super(props)

        this._onContainerClick = this._onContainerClick.bind(this)
        this._setHasInteractivatedDotText = this._setHasInteractivatedDotText.bind(this)

        this.state = {
            hasInteractivatedDotText: 0
        }
    }

    _onContainerClick(e) {
        this.props.handlePopupContainerClick(e)

        this.setState({
            hasInteractivatedDotText: 0
        })
    }

    _setHasInteractivatedDotText(isInteractivated) {

        const hasInteractivatedDotText = this.state.hasInteractivatedDotText + (isInteractivated ? 1 : -1)

        this.setState({
            hasInteractivatedDotText
        })
    }

    render() {
        const { hasInteractivatedDotText } = this.state

        return (
            <div
                className="section dots-section"
                onClick={this._onContainerClick}
            >
                <DotBlock {...this.props}
                    hasInteractivatedDotText={hasInteractivatedDotText}
                    setHasInteractivatedDotText={e => this._setHasInteractivatedDotText(e)}
                />
            </div>
        )
    }
}

export default DotsSection
