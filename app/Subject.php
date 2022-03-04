<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    protected $fillable = [
        'subject'
    ];
    public function students()
    {
    //1つの科目を多数の生徒が履修。
    return $this->belongsToMany('App\Student');
    }

}
