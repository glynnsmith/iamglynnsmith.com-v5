<?php snippet("snippet_head") ?>

<section class="section">
  <?php snippet("snippet_masthead") ?>
  <?php snippet("snippet_subpage_header") ?>

  <!-- Load left and right navigation -->
  <?php snippet("snippet_subnav") ?>

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

  <section class="section__main section__main--project clearfix">

    <!-- Sidebar -->
    <aside class="section__sidebar">
      <div class="widget widget--work-attributes">
        <div class="widget--item">
          <span class="widget__title">Client:&nbsp;</span><span><?php echo html($page->client()) ?></span>
        </div>

        <span class="widget widget--work-tags">
        <!-- <div class="widget--item widget--work-tags"> -->
          <?php $tags = $page->tags()->split(); ?>
          <span class="widget__title">Tags:&nbsp;</span>

          <?php foreach($tags as $tag): ?>
          <a href="<?php echo url(page("work")->url() . '/' . url::paramsToString(['tag' => $tag])) ?>" class="widget__link">
            <span class="widget__tag--hash">#</span><?php echo html($tag) ?>
          </a>
          <?php endforeach ?>

        <!-- </div> -->
        </span>
      </div>
    </aside>

    <!-- Main content -->
    <article class="section__content">
      <?php echo $page->text()->kirbytext() ?>
    </article>
  </section>
</section>

<section class="section--wide section__work-images <?php echo html($page->bgtype()) ?>">
  <?php foreach($page->images()->not('thumb.png', 'thumb600.png', 'thumb500.png', 'thumb400.png', 'thumb300.png', 'thumb200.png', 'thumb100.png', 'hero.png', 'hero.jpg', 'hero.gif', 'hero.svg')->sortBy('name', 'asc') as $image): ?>
  <figure>
    <a href="<?php echo $image->url() ?>">
      <img src="<?php echo $image->url() ?>" alt="<?php echo $page->title()->html() ?>">
    </a>
  </figure>
  <?php endforeach ?>
</section>

<section class="section">
  <?php snippet("snippet_subnav") ?>
  <!-- All projects - Small grid -->
  <div class="section__header">
    <div>
      <h2 class="section__header__text"><?php echo page("work")->title() ?></h2>
    </div>
    <div>
      <span class="section__header__subheader"><?php echo page("work")->description() ?></span>
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
</section>

<?php snippet("snippet_footer") ?>

<?php snippet("snippet_back_to_top") ?>

<?php snippet("snippet_js_totop") ?>
<?php snippet("snippet_scripts_footer") ?>

</body>
