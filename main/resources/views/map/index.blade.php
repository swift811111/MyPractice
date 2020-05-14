<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>疫情統計</title>

    <link href="/storage/extraResource/map/svgMap-master/dist/svgMap.css" rel="stylesheet">
</head>
<body>
    <div id="svgMapPopulation"></div>

    <script src="/storage/extraResource/map/svgMap-master/dist/svgMap.js"></script>
    <script src="/storage/extraResource/map/svgMap-master/data/population.js"></script>
    <script>
        new svgMap({
            targetElementID: 'svgMapPopulation',
            data: svgMapDataPopulation,
            flagType: 'image'
        });
    </script>
</body>
</html>