
  <div class="section__subnav clearfix">
    <?php if($page->hasPrevVisible()): ?>
    <div class="wrapper__subnav subnav__left">
      <a href="<?php echo $page->prevVisible()->url() ?>" class="subnav__link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 32" class="subnav__icon"><path d="M16 24l-8-8 8-8V0L0 16l16 16"/></svg>
        <span class="subnav__text-wrapper">
          <div class="subnav__title"><?php echo $page->prevVisible()->title() ?></div>
          <div class="subnav__description"><?php echo $page->prevVisible()->description() ?></div>
        </span>
      </a>
    </div>
    <?php endif ?>

    <?php if($page->hasNextVisible()): ?>
    <div class="wrapper__subnav subnav__right">
      <a href="<?php echo $page->nextVisible()->url() ?>" class="subnav__link">
        <span class="subnav__text-wrapper">
          <div class="subnav__title"><?php echo $page->nextVisible()->title() ?></div>
          <div class="subnav__description"><?php echo $page->nextVisible()->description() ?></div>
        </span>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 32" class="subnav__icon"><path d="M0 8l8 8-8 8v8l16-16L0 0"/></svg>
      </a>
    </div>
    <?php endif ?>
  </div>
