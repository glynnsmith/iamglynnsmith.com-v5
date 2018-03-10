<div class="widget--item">
  <span class="widget__title">Skills: </span>
  <?php $skills = page('information')->skills()->split(); ?>
  <?php foreach($skills as $tag): ?><span class=" widget__text"><?php echo html($tag) ?></span><?php endforeach ?>
</div>

<div class="widget--item">
  <span class="widget__title">Project Types: </span>
  <?php $proj = page('information')->projecttype()->split(); ?>
  <?php foreach($proj as $tag): ?><span class=" widget__text"><?php echo html($tag) ?></span><?php endforeach ?>
</div>

<div class="widget--item">
  <span class="widget__title">Language-Related: </span>
  <?php $lang = page('information')->languages()->split(); ?>
  <?php foreach($lang as $tag): ?><span class=" widget__text"><?php echo html($tag) ?></span><?php endforeach ?>
</div>

<div class="widget--item">
  <span class="widget__title">Software: </span>
  <?php $software = page('information')->software()->split(); ?>
  <?php foreach($software as $tag): ?><span class=" widget__text"><?php echo html($tag) ?></span><?php endforeach ?>
</div>
