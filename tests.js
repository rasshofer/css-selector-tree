var fs = require('fs');
var path = require('path');
var tap = require('tap');
var cssSelectorTree = require('./css-selector-tree');

// API

tap.equal(typeof cssSelectorTree, 'object');
tap.equal(typeof cssSelectorTree.tree, 'function');
tap.equal(typeof cssSelectorTree.subject, 'function');
tap.equal(typeof cssSelectorTree.conditions, 'function');

// Tree API

tap.equal(cssSelectorTree.tree(null), false);
tap.equal(cssSelectorTree.tree(), false);
tap.equal(cssSelectorTree.tree(''), false);
tap.equal(cssSelectorTree.tree(new Array(3).join(' ')), false);
tap.deepEqual(cssSelectorTree.tree('.grid-homepage .teaser .article-title .headline'), [{
  type: 'class',
  name: 'headline'
}, {
  type: 'child'
}, {
  type: 'class',
  name: 'article-title'
}, {
  type: 'child'
}, {
  type: 'class',
  name: 'teaser'
}, {
  type: 'child'
}, {
  type: 'class',
  name: 'grid-homepage'
}]);

// Subject API

tap.equal(cssSelectorTree.subject(null), false);
tap.equal(cssSelectorTree.subject(), false);
tap.equal(cssSelectorTree.subject(''), false);
tap.equal(cssSelectorTree.subject(new Array(3).join(' ')), false);
tap.deepEqual(cssSelectorTree.subject('.grid-homepage .teaser .article-title .headline'), {
  type: 'class',
  name: 'headline'
});

// Conditions API

tap.equal(cssSelectorTree.conditions(null), false);
tap.equal(cssSelectorTree.conditions(), false);
tap.equal(cssSelectorTree.conditions(''), false);
tap.equal(cssSelectorTree.conditions(new Array(3).join(' ')), false);
tap.deepEqual(cssSelectorTree.conditions('.grid-homepage .teaser .article-title .headline'), [{
  type: 'child'
}, {
  type: 'class',
  name: 'article-title'
}, {
  type: 'child'
}, {
  type: 'class',
  name: 'teaser'
}, {
  type: 'child'
}, {
  type: 'class',
  name: 'grid-homepage'
}]);
