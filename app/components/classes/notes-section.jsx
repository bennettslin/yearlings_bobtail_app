import React from 'react';

/*************
 * CONTAINER *
 *************/

const NotesSection = () => (
    <NotesSectionView />
);

/****************
 * PRESENTATION *
 ****************/

const NotesSectionView = () => (

    <div className="section notes-section">
        <h2>scrap notes</h2>
        <div className="text-cell-wrapper">
            <span className="text-cell text">
                Scrolling annotations
            </span>
        </div>
        <div className="text-cell-wrapper">
            <span className="text-cell text">
                http://stackoverflow.com/questions/6372444/how-to-draw-an-irregular-hand-drawn-line-using-svg-canvas
                http://codepen.io/tmrDevelops/pen/NPXodB
            </span>
        </div>
    </div>

);

export default NotesSection;