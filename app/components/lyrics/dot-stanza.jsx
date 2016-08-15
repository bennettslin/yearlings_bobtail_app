import React from 'react'
import DotsBlock from '../dots/dots-block'

/*************
 * CONTAINER *
 *************/

const DotStanza = (props) => {

    const { onAnnotationClick,
            dotStanzaObject } = props,

        { annotationIndex,
          dotKeys } = dotStanzaObject,
        onDotClick = () => onAnnotationClick(annotationIndex)

    return (
        <div className="stanza">
            <DotsBlock
                dotKeys={dotKeys}
                onDotClick={onDotClick}
            />
        </div>
    )
}

export default DotStanza
