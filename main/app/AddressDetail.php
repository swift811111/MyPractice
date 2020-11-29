<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AddressDetail extends Model
{
    protected $table = 'address_details';
    protected $fillable = [
        'name', 'abc','area_id'
    ];

    public function belongarea()
    {
        return $this->belongsTo('App\AddressArea');      //belongsTo表示逆轉一對一或一對多
    }
}
