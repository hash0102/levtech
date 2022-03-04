<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    
    protected $fillable = [
        'name',
        'id',
        'grade',
        'age'
    ];
    
    public function subjects()
    {
    //生徒は多数の科目を履修。
    return $this->belongsToMany('App\Subject');
    }
}
