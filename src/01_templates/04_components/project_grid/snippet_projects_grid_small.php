<div class="section__header">
  <div>
    <h2 class="section__header-text"><?php echo page("work")->title() ?></h2>
  </div>
  <div>
    <span class="section__header-subheader"><?php echo page("work")->description() ?></span>
  </div>
</div>

<div class="grid grid--small">
  <?php foreach($articles as $article): ?><div class="grid__item">
    <a href="<?php echo $article->url() ?>" class="grid__item-link">
      <div class="grid__item__text-slider">
        <div class="grid__item__text--top">
          <span class="grid__item__text grid__item__text-title"><strong><?php echo $article->title()->html() ?></strong></span>
        </div>
      </div>

      <?php if($image = $article->images()->find('thumb400.png')): ?>
        <img src="<?php echo $image->url() ?>" width="100%" height="auto" alt="<?php echo $article->title()->html() ?>" class="grid__img">
      <?php endif ?>
    </a>
  </div><?php endforeach ?>
</div>
