<!-- If there's a project hero image, load it -->
<?php if($image = $page->images()->find('hero.png')): ?>
  <div class="section__project__hero">
    <img src="<?php echo $image->url() ?>" width="100%" height="auto" alt="<?php echo $page->title()->html() ?>">
  </div>
  <?php else: ?>
    <?php if($image = $page->images()->find('hero.svg')): ?>
    <div class="section__project__hero">
      <img src="<?php echo $image->url() ?>" width="100%" height="auto" alt="<?php echo $page->title()->html() ?>">
    </div>
    <?php else: ?>
      <?php if($image = $page->images()->find('hero.jpg')): ?>
      <div class="section__project__hero">
        <img src="<?php echo $image->url() ?>" width="100%" height="auto" alt="<?php echo $page->title()->html() ?>">
      </div>
    <?php endif ?>
  <?php endif ?>
<?php endif ?>
