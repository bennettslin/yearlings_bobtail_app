// Container to show single annotation in carousel.

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Annotation from '../../Annotation'
import { getDotKeysForAnnotation } from '../../../album/api/annotations'
import { CAROUSEL_SCROLL } from '../../../constants/scroll'
import { getPrefixedDotLetterClassNames } from '../../../helpers/dot'
import { getCarouselAnnotationData } from './helper'
import { LYRIC_SONG_INDEX_SELECTOR } from '../../../redux/lyric/selectors'
import './logic'
import './style'

const mapStateToProps = state => {
    const lyricSongIndex = LYRIC_SONG_INDEX_SELECTOR(state)

    return {
        lyricSongIndex
    }
}

class CarouselAnnotation extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired,

        // From parent.
        annotationIndex: PropTypes.number.isRequired,
        isAccessed: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
        setCarouselAnnotationElement: PropTypes.func.isRequired
    }

    setCarouselAnnotationElement = node => {
        this.props.setCarouselAnnotationElement({
            node,
            index: this.props.annotationIndex
        })
    }

    render() {
        const {
                lyricSongIndex,
                isAccessed,
                isSelected,
                annotationIndex
            } = this.props,
            annotationDotKeys = getDotKeysForAnnotation(
                lyricSongIndex,
                annotationIndex
            ),
            columnKey = getCarouselAnnotationData({
                songIndex: lyricSongIndex,
                annotationIndex
            })

        return (
            <div
                {...{
                    key: annotationIndex,
                    ref: this.setCarouselAnnotationElement,
                    className: cx(
                        'CarouselAnnotation',

                        `${CAROUSEL_SCROLL}__${annotationIndex}`,

                        columnKey &&
                            `CarouselAnnotation__inEarColumn__${columnKey}`,

                        getPrefixedDotLetterClassNames(
                            annotationDotKeys,
                            // "Child carousel annotation letter."
                            'CcA'
                        ),
                        'ovH'
                    )
                }}
            >
                <Annotation
                    inCarousel
                    {...{
                        isAccessed,
                        isSelected,
                        annotationIndex
                    }}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(CarouselAnnotation)
