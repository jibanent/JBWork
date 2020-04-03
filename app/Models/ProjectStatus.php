<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectStatus extends Model
{
  // protected $table = 'project_statuses';
  protected $fillable = ['name'];

  public function projects()
  {
    return $this->hasMany(Project::class);
  }
}
