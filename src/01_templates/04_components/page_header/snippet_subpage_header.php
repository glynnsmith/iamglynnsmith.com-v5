<header class="section__header">
  <h2 class="section__header-text"><?php echo $page->title() ?></h2>
  <span class="section__header-subheader">
    <span class="section__header-description"><?php echo $page->description() ?></span>
      <span class="section__header-dash"> - </span>
      <a href="<?php echo $page->parent()->url() ?>" class="section__header-link">Back to <?php echo html($page->parent()->title()) ?> index
    </a>
  </span>
</header>
