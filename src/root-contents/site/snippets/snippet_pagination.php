<nav class="pagination">
  <?php if($pagination->hasPrevPage()): ?><span class="pagination__item"><a href="<?php echo $pagination->prevPageURL() ?>"><span class="subnav__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 32"><path d="M16 24l-8-8 8-8V0L0 16l16 16"/></svg></span></a></span><?php else: ?><span class="pagination__item pagination__item--greyed"><span class="subnav__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 32"><path d="M16 24l-8-8 8-8V0L0 16l16 16"/></svg></span></span><?php endif ?><?php foreach($pagination->range(5) as $r): ?><span class="pagination__item<?php if($pagination->page() == $r) echo ' pagination__item--active' ?>"><a href="<?php echo $pagination->pageURL($r) ?>"><?php echo $r ?></a></span><?php endforeach ?><?php if($pagination->hasNextPage()): ?><span class="pagination__item"><a href="<?php echo $pagination->nextPageURL() ?>"><span class="subnav__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 32"><path d="M0 8l8 8-8 8v8l16-16L0 0"/></svg></span></a></span><?php else: ?><span class="pagination__item pagination__item--greyed"><span class="subnav__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 32"><path d="M0 8l8 8-8 8v8l16-16L0 0"/></svg></span></span><?php endif ?>
</nav>
