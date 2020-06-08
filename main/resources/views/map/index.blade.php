@extends('layout.mapDefaultLayout')
@section('title', '疫情統計')
@section('cssload')
    <link rel="stylesheet" href="/css/map/main.css">
@endsection
@section('content')
    <div id="app">
        <mapnav-component></mapnav-component>
        <maparea-component></maparea-component>
    </div>
@endsection

@section('jsload')
    <script src="/js/map/manifest.js"></script>
    <script src="/js/map/vendor.js"></script>
    <script src="/js/map/main.js"></script>
@endsection