<div class="widget--item">
  <span class="widget__title">Skills Roundup: </span>
  <?php $skills = page('information')->shortskills()->split(); ?>
  <?php foreach($skills as $tag): ?><span class=" widget__text"><?php echo html($tag) ?></span><?php endforeach ?>
</div>
<div class="widget--item">
  <span class="widget__title">Language-Related: </span>
  <?php $lang = page('information')->languages()->split(); ?>
  <?php foreach($lang as $tag): ?><span class=" widget__text"><?php echo html($tag) ?></span><?php endforeach ?>
</div>