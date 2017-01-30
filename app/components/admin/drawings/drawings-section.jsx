import React from 'react'

/*************
 * CONTAINER *
 *************/

const DrawingsSection = (props) => (
    <DrawingsSectionView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const DrawingsSectionView = ({

    // From props.
    drawingCharacters

}) => (
    <div className="section drawings-section">
        <h2>drawings</h2>
        {drawingCharacters.map((drawing, index) => {

            // Last item in array is the character count.
            const isLastItem = index === drawingCharacters.length - 1,
                text = isLastItem ? drawing : `${drawing.character}: ${drawing.quantity}`

            return (
                <div
                    className="drawing-character"
                    key={index}
                >
                    {text}
                </div>
            )
        })}
    </div>
)

export default DrawingsSection
