import React from 'react'

/*************
 * CONTAINER *
 *************/

const NotesSection = () => (
    <NotesSectionView />
)

/****************
 * PRESENTATION *
 ****************/

const NotesSectionView = () => (
    <div className="admin section notes-section">
        <h2>scrap notes</h2>
        <ul>
            <li>Get unit tests to work with Mocha</li>
            <li>Webpack tutorial</li>
            <li>Production build</li>
            <li>Deployment to Heroku</li>
            <li>Server side rendering</li>
            <li>React Router (include old website)</li>
            <li>Soundcloud integration</li>
            <li>Sinon.js?</li>
            <li>http://stackoverflow.com/questions/6372444/how-to-draw-an-irregular-hand-drawn-line-using-svg-canvas</li>
            <li>http://codepen.io/tmrDevelops/pen/NPXodB</li>
        </ul>
    </div>
)

export default NotesSection
