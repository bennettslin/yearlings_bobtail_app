module.exports = {

    hasParentWithTagName: function(child, parentTagName) {
         var node = child.parentNode;

         while (node !== null) {

             if (node.tagName && node.tagName.toLowerCase() === parentTagName) {
                 return true;
             }

             node = node.parentNode;
         }

         return false;
    }
}