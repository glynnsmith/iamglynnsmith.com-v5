<?php snippet("snippet_head") ?>

<section class="section">
  <?php snippet("snippet_masthead") ?>
  <?php snippet('snippet_page_header') ?>

  <?php $tags = $page->children()->visible()->pluck('tags', ',', true); ?>
  <div class="container section__weblog-filter container--side-padding">
    <span class="widget widget--weblog-filter">
      <span class="widget__title">Filter by Tag:</span>

      <a href="<?php echo page("weblog")->url() ?>" class="widget__link widget__link--reset">&lt; Reset &gt;</a>

      <?php $p = kirby()->request()->params()->tag(); ?>
      <?php foreach($tags as $tag): ?>
        <a <?php ecco($tag == $p, ' class="widget__link widget__link--active"') ?> href="<?php echo url($page->url() . '/' . url::paramsToString(['tag' => $tag])) ?>" class="widget__link">
          <span class="widget__tag--hash">#</span><?php echo html($tag) ?>
        </a>
      <?php endforeach ?>
    </span>
  </div>

  <div class="container container--side-padding container--top-spacing clearfix">

    <div class="container--full-width">

      <?php foreach($articles as $article): ?>
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

    <div class="container section__pagination section__pagination--bottom">
      <div class="container container--side-padding">
        <?php snippet('snippet_pagination_bottom') ?>
      </div>
    </div>
  </div>
</section>

<?php snippet("snippet_footer") ?>
<button class="to-top-button" id="button-top"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="button-icon"><path d="M0 0h32v8H0zm16 8L.4 23.7 6 29.3l10-10 10 10 5.7-5.6"/></svg></button>

<?php snippet("snippet_js_totop") ?>
<?php snippet("snippet_scripts_footer") ?>

</body>
