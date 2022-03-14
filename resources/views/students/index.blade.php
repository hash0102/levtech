@extends('layouts.app')
@section('content')
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <title>Student</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    </head>
    <body>
        <button><a href='/students/create'>create</a></button>
        <div class='students'>
        
            @foreach($students as $student)
            
                名前:
                <h3 class='name'>{{ $student->name }}</h3>
                学籍番号:
                <h5 class='id'>{{$student->id }}</h5>
                学年:
                <h5 class='grade'>{{ $student->grade }}</h5>
                年齢:
                <h5 class='age'>{{ $student->age }}</h5>
                
                好きな教科:
                <h5 class='subject'>
                @foreach($student->subjects as $subject)   
                    {{ $subject->subject_name }}
                @endforeach
                </h5>
                        
            @endforeach
            <button><a href = '/' >POSTに戻る</a></button>
        </div>
    </body>
</html>
@endsection