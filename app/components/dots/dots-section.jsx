import React, { Component } from 'react'
import DotBlock from '../dot/dot-block'
import { DOTS_SECTION } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

 const DotsSection = ({

     accessedOn,
     accessedSectionKey,
     nextSectionKey,

 ...other }) => {

     const sectionAccessHighlighted = accessedOn && accessedSectionKey === DOTS_SECTION,
         sectionNextHighlighted = accessedOn && nextSectionKey === DOTS_SECTION

     return (
         <DotsSectionView {...other}
             sectionAccessHighlighted={sectionAccessHighlighted}
             sectionNextHighlighted={sectionNextHighlighted}
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
        this.props.onPopupContainerClick(e)

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
                sectionNextHighlighted,
            ...other } = this.props,

            { hasInteractivatedDotText } = this.state

        return (
            <div
                className={`section dots-section${sectionAccessHighlighted ? ' access-highlighted' : ''}${sectionNextHighlighted ? ' next-highlighted' : ''}`}
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
