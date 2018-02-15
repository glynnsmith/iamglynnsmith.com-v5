<div class="container section__header container--side-padding clearfix">
  <h2 class="section__header__text">
    <a href="<?php echo page('weblog')->url() ?>">Latest Weblog Posts</a>
  </h2>
  <span class="section__header__subheader">
    <span class="section__header__description"><?php echo page('weblog')->description() ?></span>
    <span class="section__header__dash">-</span>
    <span class="section__header__link__wrapper">
      <a href="<?php echo page('weblog')->url() ?>" class="section__header__link">View all blog posts</a>
    </span>
  </span>
</div>

<div class="container container--side-padding container--top-spacing clearfix">
  <?php $tags = page("weblog")->children()->visible()->pluck('tags', ',', true); ?>

  <div class="container section__weblog-filter">
    <span class="widget widget--weblog-filter">
      <span class="widget__title">Filter by Tag:</span>

      <?php $p = kirby()->request()->params()->tag(); ?>
      <?php foreach($tags as $tag): ?>

      <a class="widget__link <?php ecco($tag == $p, 'widget__link--active') ?>" href="<?php echo url(page("weblog")->url() . '/' . url::paramsToString(['tag' => $tag])) ?>">
        <span class="widget__tag--hash">#</span><?php echo html($tag) ?>
      </a>
      <?php endforeach ?>

    </span>
  </div>

  <div class="container--full-width">

    <?php foreach(page('weblog')->children()->visible()->flip()->limit(3) as $article): ?>

    <div class="weblog__item">
      <h3 class="weblog__title-header"><a href="<?php echo $article->url() ?>" class="weblog__item-title"><?php echo $article->title()->html() ?></a></h3>
      <a href="<?php echo $article->url() ?>" class="weblog__item-date"><strong>Published on:</strong> <?php echo $article->date('D, jS M, Y') ?></a>

      <!-- Grab hero thumbnail image if it exists -->
      <?php if($image = $article->images()->find('hero_thumb.png')): ?>
          <a href="<?php echo $article->url() ?>" class="weblog__thumbnail__link"><img src="<?php echo $image->url() ?>" width="100%" height="auto" alt="<?php echo $page->title()->html() ?>"></a>
        <?php else: ?>
          <?php if($image = $article->images()->find('hero_thumb.svg')): ?>
            <a href="<?php echo $article->url() ?>" class="weblog__thumbnail__link"><img src="<?php echo $image->url() ?>" width="100%" height="auto" alt="<?php echo $page->title()->html() ?>"></a>
          <?php else: ?>
            <?php if($image = $article->images()->find('hero_thumb.jpg')): ?>
              <a href="<?php echo $article->url() ?>" class="weblog__thumbnail__link"><img src="<?php echo $image->url() ?>" width="100%" height="auto" alt="<?php echo $page->title()->html() ?>"></a>
          <?php endif ?>
        <?php endif ?>
      <?php endif ?>

      <div class="container container--top-spacing clearfix">
        <div class="container__sidebar">
        <!-- Tags start -->
          <?php $tags = $article->tags()->split(); ?>
          <span class="widget weblog__item-tags">
            <span class="widget__title">Tagged With:</span>

            <?php foreach($tags as $tag): ?>
            <a href="<?php echo url(page("weblog")->url() . '/' . url::paramsToString(['tag' => $tag])) ?>" class="widget__link">
              <span class="widget__tag--hash">#</span><?php echo html($tag) ?>
            </a>
            <?php endforeach ?>
          </span>
          <!-- Tags end -->
        </div>
        <div class="container__main container__main--left">
          <?php echo str::excerpt($article->text()->kirbytext(), 600, false) ?>
        </div>
      </div>

      <div class="utility--center">
        <a href="<?php echo $article->url() ?>" class="button">Read Full Post...</a>
      </div>

    </div>
    <?php endforeach ?>
  </div>
</div>








