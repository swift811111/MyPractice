<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AddressCity extends Model
{
    protected $table = 'address_cities';
    protected $fillable = [
        'id', 'city_name',
    ];

    public function hasareas()
    {
        return $this->hasMany('App\AddressArea');         //Many表示一對多
    }
}
