<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
  protected $table = 'projects';
  protected $fillable = ['department_id', 'manager_id', 'name', 'description', 'start_date', 'finish_date', 'status_id', 'joined_to', 'active'];

  /**
   *  Get the department that owns the project
   *
   * @return mixed
   */
  public function department()
  {
    return $this->belongsTo(Department::class);
  }

  public function tasks()
  {
    return $this->hasMany(Task::class);
  }

  public function projectStatus()
  {
    return $this->belongsTo(ProjectStatus::class, 'status_id');
  }
}
