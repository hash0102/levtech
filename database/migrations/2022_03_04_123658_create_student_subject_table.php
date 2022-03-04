<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentSubjectTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student_subject', function (Blueprint $table) {
         //student_idとsubject_idを外部キーに設定
            $table->integer('student_id')->unsigned();    //students,subjectsテーブルのidが
            $table->integer('subject_id')->unsigned();    //bigIncrementであった場合はbigIntegerにする
            $table->primary(['student_id', 'subject_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('student_subject');
    }
}
