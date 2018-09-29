// Component to show individual annotation note or all wormholes.

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Texts from 'components/Text/Texts'

import { ALL_DOT_KEYS } from 'constants/dots'

class AnnotationCard extends Component {

    static propTypes = {
        card: PropTypes.any.isRequired
    }

    render() {
        const {
                card: {
                    description,
                    dotKeys = {}
                }
            } = this.props

        return (
            <div className="TempGlobalAnnotationCard">
                <div className="TempGlobalAnnotationCard__dotKeys">
                    {ALL_DOT_KEYS.filter(dotKey => (
                        dotKeys[dotKey]
                    )).join(', ')}
                </div>
                <Texts
                    {...{
                        text: description
                    }}
                />
            </div>
        )
    }
}

export default AnnotationCard
