<?php snippet("snippet_head") ?>

<section class="section">
	<?php snippet("snippet_masthead") ?>
	<?php snippet("snippet_page_header") ?>

	<span class="widget widget--work-filter">
		<span class="widget__title">Filter by Discipline: </span>

		<a href="<?php echo page("work")->url() ?>" class="widget__link widget__link--reset">&lt; Reset Filter &gt;</a>

		<?php $p = kirby()->request()->params()->tag(); ?>
		<?php $tags = $page->children()->visible()->pluck('tags', ',', true); ?>
		<?php foreach($tags as $tag): ?>

			<a <?php ecco($tag == $p, ' class="widget__link widget__link--active"') ?> href="<?php echo url($page->url() . '/' . url::paramsToString(['tag' => $tag])) ?>" class="widget__link">
				<span class="widget__tag--hash">#</span><?php echo html($tag) ?>
			</a>

		<?php endforeach ?>
	</span>
</section>

<?php snippet('snippet_projects_grid') ?>

<?php snippet("snippet_footer") ?>

<?php snippet("snippet_back_to_top") ?>

<?php snippet("snippet_js_totop") ?>

<?php snippet("snippet_scripts_footer") ?>

</body>
