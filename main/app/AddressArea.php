<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AddressArea extends Model
{
    protected $table = 'address_areas';
    protected $fillable = [
        'id', 'filename','zip','address_city_id',
    ];

    public function belongcity()
    {
        return $this->belongsTo('App\AddressCity');      //belongsTo表示逆轉一對一或一對多
    }

    public function hasdetails()
    {
        return $this->hasMany('App\AddressDetail');         //Many表示一對多
    }
}
