<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class User extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request)
  {
    return [
      'id'         => $this->id,
      'name'       => $this->name,
      'email'      => $this->email,
      'phone'      => $this->phone,
      'position'   => $this->position,
      'avatar'     => avatar($this->avatar),
      'active'     => $this->active,
      'created_at' => $this->created_at,
      'updated_at' => $this->updated_at
    ];
  }

}
