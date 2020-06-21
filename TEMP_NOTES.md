# Entrance refactor
* Make scrolling smooth.
* Scene change is different between song and scene change.
* Does not allow for rapid song change?

# Post entrance refactor
* Audit all handlers and listeners.
    * Have all handlers be dispatcher/listener pair.
    * VerseBar handler is really dispatcher and listener.
* Try to get rid of listeners directory. Either remove or move to managers.
    * Move scrollRender listener dispatches to songChange listener.
    * Move lyric listener dispatches to where those are dispatched.
    * Scroll lyric listener has scene change dispatch that can be removed?
* What is mapIsSelectPlayReady?
* Is song selection still slower through access after refactor?

# Pre-Gatsby bugs
* Verse scroll key doesn't always work.

# Post-Gatsby bugs
* Song banner animation when repeating song is janky. Not sure if pre or post Gatsby.
* Side card in slider should have white text.
* Failed to decode downloaded font warning?

# Minor issues, to be investigated while production is on master before Gatsby.
* tips hand in garryowen for score
* Do I really want scene activation to work as it does, where you need to go next, then previous, before hitting selected verse that is not the start of scene?

# Easy reduction tasks
* Some todos to make a selector.
* Have verse store for queued verse select, just like annotation store.
* Make isActivated and isSelected selectors.
* Shorten constants to abbreviations?

# Ongoing Gatsby tasks
* Add back admin routes
* Dynamic routes for song indices
* Pages and routing
    * 404 page
* URL replacement

* Favicon
* Splash page
* Deprecated page
* Take care of weirdness that results from client/server discrepancies.
    * Heightless and zoom show the same thing.
    * Always render Carousel, even in mobile. Show carousel if heightless.
    * Only About, Carousel, and Lyric need to render for SEO.
