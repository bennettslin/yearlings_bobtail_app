// Component to show all notes and wormholes for each annotation.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AnnotationCard from './AnnotationCard'

import { getArrayOfLength } from '../../helpers/generalHelper'

class AnnotationCards extends Component {

    static propTypes = {
        // From parent.
        cardsLength: PropTypes.number.isRequired
    }

    render() {
        const {
                cardsLength,
                ...other
            } = this.props,

            cardsIndices = getArrayOfLength({
                length: cardsLength
            })

        return (
            <div
                className={cx(
                    'AnnotationCards'
                )}
            >
                {cardsIndices.map(cardIndex => (
                    <AnnotationCard {...other}
                        key={cardIndex}
                        cardIndex={cardIndex}
                    />
                ))}
            </div>
        )
    }
}

export default AnnotationCards
