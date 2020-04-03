<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class BaseRepository implements BaseRepositoryInterface
{
  protected $model;

  public function __construct(Model $model)
  {
    $this->model = $model;
  }

  public function getAll()
  {
    return $this->model->all();
  }

  public function find($id)
  {
    $result = $this->model->findOrFail($id);
    return $result;
  }

  public function create($attributes = [])
  {
    return $this->model->create($attributes);
  }

  public function update($id, $attributes = [])
  {
    $result = $this->find($id);
    if ($result) {
      $result->update($attributes);
      return $result;
    }

    return false;
  }


  public function delete($id)
  {
    $result = $this->find($id);

    if ($result !== null) {
      $result->delete();
      return true;
    }

    return false;
  }
}
