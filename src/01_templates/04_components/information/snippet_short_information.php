<section class="section">

  <!-- Section Title -->
  <header class="section__header">
    <h2 class="section__header__text"><a href="<?php echo page('information')->url() ?>"><?php echo page('information')->title() ?></a></h2>
    <span class="section__header__subheader">
      <span class="section__header__description"><?php echo page('information')->description()->html() ?></span>
      <span class="section__header__dash"> - </span>
      <span class="section__header__link__wrapper">
        <a href="<?php echo page('information')->url() ?>" class="section__header__link">Read full information</a>
      </span>
    </span>
  </header>

  <!-- Section Main -->
  <main class="section__main clearfix">

    <!-- Section Sidebar -->
    <aside class="section__sidebar clearfix">
      <div class="mugshot"></div>
      <?php snippet("snippet_network_side") ?>
      <?php snippet('snippet_short_skills_sidebar') ?>
    </aside>

    <!-- Section Content -->
    <article class="section__content clearfix">
      <?php echo page('information')->summarystart()->kirbytext() ?>
    <!-- </article> -->

    <?php snippet('snippet_short_skills_main') ?>

    <!-- <article class="section__content clearfix"> -->
      <?php echo page('information')->summaryend()->kirbytext() ?>
    </article>


  </main>

  <!-- Section CTA Button -->
  <div class="section__cta clearfix">
    <a href="<?php echo page('information')->url() ?>" class="button">Read full information</a>
  </div>

</section>
