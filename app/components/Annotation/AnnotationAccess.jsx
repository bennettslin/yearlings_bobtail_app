import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// import { ALL_DOT_KEYS } from '../../constants/dots'
// import { convertTrueFalseKeysToBitNumber } from '../../helpers/bitHelper'

import AccessIcons from '../AccessIcon/AccessIcons'

import { NAVIGATION_ENTER_KEY,
         NAVIGATION_UP_KEY,
         NAVIGATION_DOWN_KEY } from '../../constants/access'

const mapStateToProps = () => ({
    // isLyricExpanded,
    // canLyricRender,
    // renderableAnnotationIndex,
    // selectedCarouselNavIndex,
    // selectedDotsIndex,
    // selectedDotKeys,
    // interactivatedVerseIndex
})

class LyricColumnAccess extends Component {

    static propTypes = {

        // From Redux.
        // canLyricRender: PropTypes.bool.isRequired,
        // renderableAnnotationIndex: PropTypes.number.isRequired,
        // selectedCarouselNavIndex: PropTypes.number.isRequired,
        // selectedDotsIndex: PropTypes.number.isRequired,
        // selectedDotKeys: PropTypes.object.isRequired,
        // interactivatedVerseIndex: PropTypes.number.isRequired

        // From parent.
        isSelected: PropTypes.bool.isRequired
    }

    // shouldComponentUpdate(nextProps) {
    //     return nextProps.canLyricRender
    // }

    // componentDidUpdate() {
    //     console.warn('LyricColumnAccess rendered.')
    // }

    render() {

        const {
                isSelected
            } = this.props,

            showEnter = isSelected,
            showUpDown = isSelected

        return (
            <Fragment>
                <AccessIcons
                    accessIconsName="annotationEnter"
                    inAnnotation
                    accessKeys={[
                        {
                            accessKey: NAVIGATION_ENTER_KEY,
                            showIfAccessed: showEnter,
                            beginsCluster: true
                        }
                    ]}
                />
                <AccessIcons
                    accessIconsName="annotationUpDown"
                    inAnnotation
                    accessKeys={[
                        {
                            accessKey: NAVIGATION_UP_KEY,
                            showIfAccessed: showUpDown
                        },
                        {
                            accessKey: NAVIGATION_DOWN_KEY,
                            showIfAccessed: showUpDown
                        }
                    ]}
                />
            </Fragment>
        )
    }
}

export default connect(mapStateToProps)(LyricColumnAccess)
