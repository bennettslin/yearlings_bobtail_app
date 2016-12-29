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
    <div className="section notes-section">
        <h2>scrap notes</h2>
        <ul>
            <li>Get unit tests to work with Mocha</li>
            <li>Webpack tutorial</li>
            <li>Production build</li>
            <li>Deployment to Heroku</li>
            <li>Server side rendering</li>
            <li>React Router (include old website)</li>
            <li>Sinon.js?</li>
            <li>http://stackoverflow.com/questions/6372444/how-to-draw-an-irregular-hand-drawn-line-using-svg-canvas</li>
            <li>http://codepen.io/tmrDevelops/pen/NPXodB</li>
            <li>http://stackoverflow.com/questions/8866736/css-speech-bubble-with-box-shadow</li>
            <li>https://css-tricks.com/snippets/jquery/animate-heightwidth-to-auto/#comment-283996</li>
        </ul>
    </div>
)

export default NotesSection
