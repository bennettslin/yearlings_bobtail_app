import React, { Component } from 'react'
import DotBlock from '../dot/dot-block'
import { DOTS_SECTION } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

 const DotsSection = ({

     accessedOn,
     accessedSectionKey,

 ...other }) => {

     const sectionAccessHighlighted = accessedOn && accessedSectionKey === DOTS_SECTION

     return (
         <DotsSectionView {...other}
             sectionAccessHighlighted={sectionAccessHighlighted}
         />
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
        const { sectionAccessHighlighted,
            ...other } = this.props,

            { hasInteractivatedDotText } = this.state

        return (
            <div
                className={`section dots-section${sectionAccessHighlighted ? ' access-highlighted' : ''}`}
                onClick={this._onContainerClick}
            >
                <DotBlock {...other}
                    inDotsSection={true}
                    hasInteractivatedDotText={hasInteractivatedDotText}
                    sectionAccessHighlighted={sectionAccessHighlighted}
                    setHasInteractivatedDotText={e => this._setHasInteractivatedDotText(e)}
                />
            </div>
        )
    }
}

export default DotsSection
