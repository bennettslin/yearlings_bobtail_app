# Immediate tasks needed
* Have separate candidate environment.
    * https://medium.com/@wolovim/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af
* Revert code to use webpack again.
    * https://github.com/bennettslin/yearlings_bobtail_app/tree/master-before-gatsby
    * fonts.
    * Update webpack config for new way of doing things.
    * Have notes to keep track of changes.
* Update scripts that can deploy candidate, delivery, and production.
* Deploy gatsby to candidate, webpack to delivery for now.

# Bugs
* Figure out why window resizing timeout seems to have regressed.
* PT Sans Italic is small?

# Audit
* Make sure all presences are properly behind or in front as appropriate.

# Brainless JS tasks
* Change all mapStateToProps to grab from selectors
* Ensure all selectors are used.

# Brainless CSS tasks
* Component import own styles.
* Don't import styles in app index.
* Logic styles should live together. (So that they can be removed together if needed.)

# Easy reduction tasks
* Internal stylesheet fixes
* Simplify Anchor for social media anchors
* Listeners and Main components know to render themselves
* Mount, responsive, proscenium, and theatre values can just be aggregate selectors. Basically, get rid of everything in window that's not the window width and height. Replace in map state to props first.
* Also transient store.
* Also, the listeners.
* Also, the dispatchers?
* Move Carousel to top level of Root

# Ongoing Gatsby tasks
* Dynamic routes for song indices
* Pages and routing
    * 404 page
* URL replacement
* Add back admin routes

* Favicon
* Splash page
* Deprecated page
* Take care of weirdness that results from client/server discrepancies.
    * Heightless and zoom show the same thing.
    * Always render Carousel, even in mobile. Show carousel if heightless.
    * Only About, Carousel, and Lyric need to render for SEO.

# Ongoing weirdness
* Switching between songs in local is slow, not as slow in staging