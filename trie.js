/*
A very simple trie implementation in javascript
Builds a trie data structure given a list of words
Get Word function returns the nearest matching word/s in the trie, given a string
Can be used as auto-correct/auto-complete algorithm for a subset of words
*/

function node(char) {
  return {
    'value' : char,
    'isLeaf' : false,
    'children' : []
  };
}

var trie = {
  'root' : null
};

function insertText(text) {

  var length = text.length;
  var i=0;
  var currentNode = trie['root'];

  while (i < length) {

    var char = text.charAt(i);

    if (currentNode.children.length === 0) {
      var newNode = new node(char);
      currentNode.children.push(newNode);
      currentNode = newNode;
    } else {

      var childNotFound = true;
      var j = 0;

      while(j < currentNode.children.length) {

        var child = currentNode.children[j];
        if (child.value.toLowerCase() === char.toLowerCase() && !child.isLeaf) {
          currentNode = child;
          childNotFound = false;
          break;
        }
        j++;
      }

      if (childNotFound) {
        // The character is not present
        var newNode = new node(char);
        currentNode.children.push(newNode);
        currentNode = newNode;
      }



    }

    i++;
  }

  var leaf = new node(text);
  leaf.children = null;
  leaf.isLeaf = true;

  currentNode.children.push(leaf);

};

function dfs(node) {

  var match = [];

  if (node.isLeaf) {
    match.push(node.value)
    return match;
  }

  for (var i = 0;  i < node.children.length; i++) {
    var child = node.children[i];
    var leafs = dfs(child);
    for (var j=0; j < leafs.length; j++) {
      match.push(leafs[j]);
    }
  }

  return match;

}

module.exports = {

  /**
  * Search for a text in the trie tree.
  *
  * @param  {String} text
  * @return {Array}
  */
  search: function(text) {

    var textLength = text.length;
    var i = 0 ;

    var currentNode = trie['root'];

    if (currentNode.children.length === 0) {
      throw new Error('Trie is empty');
    }

    while ( i < textLength) {

      var char = text.charAt(i);

      if (currentNode.children.length === 0) {
        break;
      }

      var j = 0;
      var childNotFound = true;

      while (j < currentNode.children.length) {
        var child = currentNode.children[j];
        if (child.value.toLowerCase() === char.toLowerCase() && !child.isLeaf) {
          currentNode = child;
          childNotFound = false;
          break;
        }
        j++;
      }

      if (childNotFound) {
        break;
      }

      i++;

    }

    if (currentNode === trie['root']) return [];

    // Do depth first search for words
    return dfs(currentNode);

  },

  /**
  * Build a trie tree with a list of words
  *
  * @param  {Array} words
  * @return void
  */
  build: function(list) {

    trie['root'] = new node('');

    for (var i=0; i < list.length; i++) {
        insertText(list[i]);
    }

  }

};
