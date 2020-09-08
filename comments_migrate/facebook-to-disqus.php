<rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dsq="http://www.disqus.com/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:wp="http://wordpress.org/export/1.0/"
>
	<channel>
	<?php
		error_reporting(0);

		// List of blog post URLs
		$urls = array('https://indhu.me/blog/wonder-woman/');

		$comments = [];

		foreach($urls as $url){
			$json = json_decode(file_get_contents('https://graph.facebook.com/comments/?ids='.$url), true);
			$data = $json[$url]['comments']['data'];

			foreach($data as $comment){
	?>
		<item>
			<title></title>
			<link><?=$url?></link>
			<content:encoded><![CDATA[<?=$comment['message']?>]]></content:encoded>
			<dsq:thread_identifier></dsq:thread_identifier>
			<wp:post_date_gmt></wp:post_date_gmt>
			<wp:comment_status>open</wp:comment_status>
			<wp:comment>
				<!-- sso only; see docs -->
				<dsq:remote>
				  <!-- unique internal identifier; username, user id, etc. -->
				  <dsq:id></dsq:id>
				  <!-- avatar -->
				  <dsq:avatar></dsq:avatar>
				</dsq:remote>
				<!-- internal id of comment -->
				<wp:comment_id><?=$comment['id']?></wp:comment_id>
				<!-- author display name -->
				<wp:comment_author><?=$comment['from']['name']?></wp:comment_author>
				<!-- author email address -->
				<wp:comment_author_email></wp:comment_author_email>
				<!-- author url, optional -->
				<wp:comment_author_url></wp:comment_author_url>
				<!-- author ip address -->
				<wp:comment_author_IP></wp:comment_author_IP>
				<!-- comment datetime, in GMT. Must be YYYY-MM-DD HH:MM:SS 24-hour format. -->
				<wp:comment_date_gmt><?=date('Y-m-d H:i:s', strtotime($comment['created_time']))?></wp:comment_date_gmt>
				<!-- comment body; use cdata; html allowed (though will be formatted to DISQUS specs) -->
				<wp:comment_content><![CDATA[<?=$comment['message']?>]]></wp:comment_content>
				<!-- is this comment approved? 0/1 -->
				<wp:comment_approved>1</wp:comment_approved>
				<!-- parent id (match up with wp:comment_id) -->
				<wp:comment_parent>0</wp:comment_parent>
			</wp:comment>
		</item>
	<?php
			}
		}
	?>
	</channel>
</rss>