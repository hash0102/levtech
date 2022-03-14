<?php

use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
            $post = new \App\Post([
            'id' => '9',
            'title' => 'seeder2',
            'contents' => 'this is seeder2',
            'category_id' => '1'
            ]);
        $post->save();
    }
}
