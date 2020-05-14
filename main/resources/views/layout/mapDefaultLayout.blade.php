<!-- Stored in resources/views/layouts/mapDefalutLayout.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    <link href="/storage/extraResource/map/svgMap-master/dist/svgMap.css" rel="stylesheet">
    <script src="/storage/extraResource/map/svgMap-master/dist/svgMap.js"></script>
</head>
<body>
    @yield('content')

    <script src="/js/manifest.js"></script>
    <script src="/js/vendor.js"></script>
    <script src="/js/app.js"></script>
    @yield('jsload')
</body>
</html>