# Order.
* Cutouts
* Flats
* Panels
* Cardboards
* Bubbles
* Backdrops
* Furnitures (include shadow)
* Puppets (include shadow)
* Fixtures (include shadow)
* Actors (include shadow)

# Photoshop work.

## File creation.
* Create temporary subfolder in ~todo.
* For each tif, create enough layers for no shape to touch another.
    * Shortcut is Shift-Command-N.
* Create another layer for details that are open paths.

## Tracing.
* For detailed presences, scale image for better resolution.
* Make sure all lines connect!

## File organisation.
* Quick export each isolated layer to PNG in subfolder.
    * Custom shortcut is Command-Option-Alt-N.
* File names don't matter. They're temporary.
* Show all layers and save tif.

# Illustrator work.

## File creation.
* Create new file with instance name and png dimensions.
* Create new layer for each image.
    * Shortcut is Command-L.
* Place each numbered image in its numbered layer.
    * Shortcut is Shift-Command-P.
* Align all at once.

## Vectorisation.
* For each image, Image Trace > Line Art, then Expand.
* Smooth each object by joining corners.
    * Shortcut for Join tool is J.
* Join path for each object.
    * Shortcut is Command-J.
* In Layers settings, Flatten artwork.
* Temporarily colour each object. Aim for final colour, but don't sweat it.
* Send objects backward or forward as needed.
    * Shortcuts are Command-[ or ].

## File organisation.
* Move subfolder with png files to ~completed folder.
* Move Illustrator file to actor or thing folder.

## Svg work

## Create svg.
* Fit artboard to artwork.
    * Shortcut is Shift-Command-F.
* Make sure it's deselected, and Export as SVG.
    * Shortcut is Shift-Command-E.
    * Internal CSS, Layer Names, no minify, yes responsive.

## Convert svg to React component.
* Place in assets folder.
* Change component routing.
    * Import svg instead of component.
    * Delete component.
* Change scene config.
    * Correct x and y positions, if needed.
    * Scale it.
* Move styles to stylesheet in Presence folder.
    * Remove title.
    * Change class names.
    * Change for open paths.
    * Indent using Prettier.

* Log done in illustrator task folder!