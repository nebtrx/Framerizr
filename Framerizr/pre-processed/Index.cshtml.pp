@model Uri
@{
    Layout = null;
}

<!DOCTYPE html>

<html>
<head>
    <title>@ViewBag.Title</title>
    <style type="text/css">
        html {
            height: 100%;
        }

        body {
            margin: 0;
            height: 100%;
            overflow: hidden;
        }
    </style>
</head>
<body>
    <iframe onload="$.framerizr.server.start()" frameborder = 0 scrolling="no" src="@Model" style="width: 100%; height: 100%"></iframe>
	<script src="@Url.Content("~/Scripts/jquery-1.6.2.min.js")">  </script>
    <script src="@Url.Content("~/Scripts/easyXDM-2.4.17.1.min.js")">  </script>
    <script src="@Url.Content("~/Scripts/framerizr.server-1.0.1.js")">  </script>
</body>
</html>
