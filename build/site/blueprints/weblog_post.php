<?php if(!defined('KIRBY')) exit ?>

title: Blog Post
pages: false
files:
  sortable: true
fields:
  title:
    label: Title
    type:  text
  date:
    type: date
    default: now
  tags:
    label: Tags
    type:  tags
  description:
    label: Description
    type:  text
    format: dd/mm/YYYY
  text:
    label: Text
    type:  textarea
