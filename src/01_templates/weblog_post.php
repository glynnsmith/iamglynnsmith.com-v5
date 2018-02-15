<?php snippet("snippet_header") ?>

<?php snippet("snippet_subpage_header") ?>

<!-- Load left and right navigation -->
<?php snippet("snippet_subnav") ?>

<!-- If there's a project hero image, load it -->
<?php if($image = $page->images()->find('hero.png')): ?>
  <div class="container container__page-hero-image container--top-spacing container--side-padding align--center">
    <img src="<?php echo $image->url() ?>" width="100%" height="auto" alt="<?php echo $page->title()->html() ?>">
  </div>
  <?php else: ?>
    <?php if($image = $page->images()->find('hero.svg')): ?>
    <div class="container container__page-hero-image container--top-spacing container--side-padding align--center">
      <img src="<?php echo $image->url() ?>" width="100%" height="auto" alt="<?php echo $page->title()->html() ?>">
    </div>
    <?php else: ?>
      <?php if($image = $page->images()->find('hero.jpg')): ?>
      <div class="container container__page-hero-image container--top-spacing container--side-padding align--center">
        <img src="<?php echo $image->url() ?>" width="100%" height="auto" alt="<?php echo $page->title()->html() ?>">
      </div>
    <?php endif ?>
  <?php endif ?>
<?php endif ?>

<div class="container container--top-spacing container--side-padding clearfix">
	<div class="container__sidebar">

    <?php $tags = $page->tags()->split(); ?>
    <span class="widget widget--weblog-tags weblog__item-post-tags">
      <span class="widget__title">Tagged With:</span>

      <?php foreach($tags as $tag): ?>
      <a href="<?php echo url(page("weblog")->url() . '/' . url::paramsToString(['tag' => $tag])) ?>" class="widget__link">
        <span class="widget__tag--hash">#</span><?php echo html($tag) ?>
      </a>
      <?php endforeach ?>
    </span>
  </div>
  <div class="container__main container__main--left">
    <?php echo $page->text()->kirbytext() ?>
  </div>
</div>

<?php snippet("snippet_subnav_bottom") ?>

<?php snippet("snippet_footer") ?>
<button class="to-top-button" id="button-top"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="button-icon"><path d="M0 0h32v8H0zm16 8L.4 23.7 6 29.3l10-10 10 10 5.7-5.6"/></svg></button>
<?php snippet("snippet_js") ?>
<?php snippet("snippet_scripts_footer") ?>

</body>
