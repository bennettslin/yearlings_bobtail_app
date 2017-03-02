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
    drawings

}) => (
    <div className="section drawings-section">
        <h2>drawings</h2>
        {false && drawings.map((drawing, index) => {

            // Last item in array is the character count.
            const isLastItem = index === drawings.length - 1,
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
        <h3>actors</h3>
        <table>
            <thead>
                <tr>
                    <th>actor</th>
                    <th>song</th>
                    <th>scene</th>
                    <th>description</th>
                </tr>
            </thead>
            <tbody>
            {/* {
                drawings.actors.map((actor, index) => {
                    return (
                        <tr key={index}>
                            <td>{actor}</td>
                        </tr>
                    )
                })
            } */}
            </tbody>

        </table>
    </div>
)

export default DrawingsSection
