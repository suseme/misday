<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title>{{ page.title }}</title>
</head>
<body>
	<p><a href="http://susemm.github.io/misday/index.html">Home</a>
	<h1>{{ page.title }}</h1>
	<p>{{ page.date | date_to_string }}</p>
	{{ content }}
</body>
</html>
