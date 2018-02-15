<header class="section__header">
  <h2 class="section__header__text"><?php echo $page->title() ?></h2>
  <span class="section__header__subheader">
    <span class="section__header__description"><?php echo $page->description() ?></span>
      <span class="section__header__dash"> - </span>
      <a href="<?php echo $page->parent()->url() ?>" class="section__header__link">Back to <?php echo html($page->parent()->title()) ?> index
    </a>
  </span>
</header>
