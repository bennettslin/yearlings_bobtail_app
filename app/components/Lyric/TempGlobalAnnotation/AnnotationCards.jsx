// Component to show all notes and wormholes for each annotation.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AnnotationCard from './AnnotationCard'

class AnnotationCards extends Component {

    static propTypes = {
        // From parent.
        cards: PropTypes.array.isRequired
    }

    render() {
        const {
            cards
        } = this.props

        return (
            <div className="TempGlobalAnnotationCards">
                {cards.map((card, index) => (
                    <AnnotationCard
                        key={index}
                        {...{
                            card
                        }}
                    />
                ))}
            </div>
        )
    }
}

export default AnnotationCards
