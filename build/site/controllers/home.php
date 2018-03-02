<?php

return function($site, $pages, $page) {

  // fetch the basic set of pages
  $articles = page("weblog")->children()->visible()->sortBy('date', 'desc')->flip()->limit(3);

  // add the tag filter
  if($tag = param('tag')) {
    $articles = page("weblog")->children()->visible()->filterBy('tags', $tag, ',');
  }

  // fetch all tags
  $tags = page("weblog")->children()->visible()->pluck('tags', ',', false);

  return compact('articles', 'tags', 'tag');

};

?>
