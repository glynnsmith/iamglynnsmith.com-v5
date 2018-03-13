<?php snippet("snippet_head") ?>

<section class="section">
  <?php snippet("snippet_masthead") ?>
  <?php snippet("snippet_subpage_header") ?>

  <!-- Load left and right navigation -->
  <?php snippet("snippet_subnav") ?>

  <?php snippet("snippet_project_hero_image") ?>

  <section class="section__main section__main--project clearfix">

    <!-- Sidebar -->
    <aside class="section__sidebar">
      <div class="widget widget--work-attributes">
        <div class="widget--item">
          <span class="widget__title">Client:&nbsp;</span><span><?php echo html($page->client()) ?></span>
        </div>

        <span class="widget widget--work-tags">
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

  <?php snippet("snippet_projects_grid_small") ?>
</section>

<?php snippet("snippet_footer") ?>

<?php snippet("snippet_back_to_top") ?>

<?php snippet("snippet_js_totop") ?>
<?php snippet("snippet_scripts_footer") ?>

</body>
