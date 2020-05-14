@extends('layout.mapDefaultLayout')
@section('title', '疫情統計')

@section('content')
    <div id="app">
        <maparea-component></maparea-component>
    </div>
@endsection

@section('jsload')
    <script src="/js/map/manifest.js"></script>
    <script src="/js/map/vendor.js"></script>
    <script src="/js/map/main.js"></script>
@endsection