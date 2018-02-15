<?php if(!defined('KIRBY')) exit ?>

title: Project
pages: false
files:
  sortable: true
fields:
  title:
    label: Title
    type:  text
  description:
    label: Description
    type:  text
  client:
    label: Client Name
    type:  text
  date:
    label: Date
    type:  date
  tags:
    label: Tags
    type:  tags
  bgtype:
    label: Work Image BG
    type: radio
    options:
      section__work-images--light: Light
      section__work-images--dark: Dark
  text:
    label: Text
    type:  textarea
