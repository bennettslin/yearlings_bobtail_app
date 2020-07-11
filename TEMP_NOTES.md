# Current Gatsby fixes
* Check that Overview, Carousel, and Lyric are good for all songs
* Make efficient, such as removing extra classes, anchor extra text and underlines
* Why does no songIndex page default to Grasshoppers as source HTML?!
* If home page and stored song is Cremated, doublespeaker lines are weird.

* URL replacement and redirects
    * useHistory doesn't work in Gatsby
* Make sure routing verse and annotation indices work as well
* Storage verse and annotation should work, they currently don't
* Test all routing and storage possibilities
    * Only accept storage values if no routing given? Would make things a lot easier...
* 404 page
    * Just uses home page, but make sure URL is cleared
* Numbered paths
    * Still redirect a numbered path to song, if valid

# Later Gatsby fixes
* Admin routes
* Favicon
* App loading indicator
* Deprecated page for Internet Explorer?
* Why is Gatsby build so much bigger than webpack build?
* Does Gatsby get a fresh version?
* Remove trailing slash?

# Post-Gatsby bugs
* Song banner animation when repeating song is janky. Not sure if pre or post Gatsby.
* Failed to decode downloaded font warning?

# Minor issues, to be investigated while production is on master before Gatsby.
* Is song selection still slower through access after refactor?
* tips hand in garryowen for score

# Easy tasks
* Experiment with removing from reducers and putting back in listeners to improve performance? Is this needed?
* Slider verse select ranges don't really align with hover ranges.
* Some todos to make a selector.
* Have verse store for queued verse select, just like annotation store.
* Make isActivated and isSelected selectors.
* Shorten constants to abbreviations?
