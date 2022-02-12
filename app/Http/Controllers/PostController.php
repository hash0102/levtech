<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(Post $post)
  {
    return view('index')->with(['posts' => $post->getPaginateByLimit()]);
  }
}
?>
    /**
 * Post一覧を表示する
 * 
 * @param Post Postモデル
 * @return array Postモデルリスト
 */
public function index(Post $post)
  {
    return $post->get();
  }

}