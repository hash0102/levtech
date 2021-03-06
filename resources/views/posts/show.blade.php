@extends('layouts.app')
@section('content')
<!DOCTYPE HTML>
<html lang="{{ str_replace("_", "-", app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Posts</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet"href="/css/app.css">
    </head>
    <body>
        <h1 class="title">
            {{ $post->title }}
        </h1>
        <div class="content">
            <div class="content__post">
                <h3>本文</h3>
                <p>{{ $post->contents }}</p>    
                <p class = "updated_at">{{$post->updated_at}}</p>
                <a href="/categories/{{ $post->category->id }}">{{ $post->category->name }}</a>
            </div>
        </div>
        <div class="footer">
            <p class="edit">[<a href="/posts/{{ $post->id }}/edit">edit</a>]</p>
            <a href="/">戻る</a>
            <form action = "/posts/{{$post->id}}" id= "form_delete" method= "POST">
                @csrf
                @method('DELETE')
                <input type ="submit" style = "display:none">
                <button class = 'delete'><span onclick = "return deletePost(this);">削除</span></button>
            </form>
        </div>
            <script>
             function deletePost(e) {
                 "use strict";
                 if (confirm('削除すると復元できません。\n 本当に削除しますか？')) {
                     document.getElementById('form_delete').submit();
                 }
             }   
            </script>
    </body>
</html>
@endsection