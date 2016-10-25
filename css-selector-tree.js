var tokenizer = require('css-selector-tokenizer');

function generateSelectorTree (selector) {

  if (!selector) {
    return false;
  }

  selector = selector.split(/,/)[0];

  var parsed = tokenizer.parse(selector);

  var filtered = parsed.nodes.filter(function (node) {
    return node.type === 'selector' && node.nodes && node.nodes.length;
  });

  if (filtered.length === 0) {
    return false;
  }

  var conditions = filtered.shift().nodes.filter(function (subnode) {
    if (subnode.type === 'spacing') {
      subnode.type = 'child';
      delete subnode.value;
    }
    return subnode;
  });

  return conditions.reverse();

}

function extractSelectorSubject (selector) {

  var tree = generateSelectorTree(selector);

  if (tree === false) {
    return false;
  }

  return tree[0];

}

function extractSelectorConditions (selector) {

  var tree = generateSelectorTree(selector);

  if (tree === false) {
    return false;
  }

  return tree.slice(1);

}

module.exports = {
  tree: generateSelectorTree,
  subject: extractSelectorSubject,
  conditions: extractSelectorConditions
};
