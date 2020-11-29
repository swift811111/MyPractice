<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\AddressCity;
use App\AddressArea;
use App\AddressDetail;
use DB;

class AddressController extends Controller
{
    public function GetAddress($path){
        $key = env('GOOGLE_KEY') ;
        $json_data_url = "https://maps.googleapis.com/maps/api/geocode/json?address=".trim($path)."&key=".$key."&language=zh-TW" ;
        $json_data = json_decode(file_get_contents($json_data_url), true);
        
        $address_detail = [] ;
        foreach ($json_data['results'][0]['address_components'] as $key => $value) {
            if($value['types'][0]== 'administrative_area_level_1'){
                $address_detail['city'] = $value['long_name']; // 城市
            }else if($value['types'][0]== 'administrative_area_level_3'){
                $address_detail['area'] = $value['long_name']; //區/鄉/鎮
            }else if($value['types'][0]== 'route'){
                $address_detail['road'] = $value['long_name']; //路/街/段
            }else if($value['types'][0]== 'postal_code'){
                $address_detail['zip'] = $value['long_name']; //郵遞區號
            }else if($value['types'][0]== 'street_number'){
                $address_detail['no'] = $value['long_name']; //號
            }
        }
        $city_id = AddressCity::select('id')->where('city_name', $address_detail['city'])->get() ;
        $area_info = AddressCity::find($city_id[0]['id'])->hasareas()->where('name',$address_detail['area'])->get() ;
        
        $address_detail['lane'] = '';
        $address_detail['alley'] = '';
        $address_detail['floor'] = '';
        $address_detail['address'] = '';
        $address_detail['filename'] = $area_info[0]['filename'];
        $address_detail['latitude'] = $json_data['results'][0]['geometry']['location']['lat'];
        $address_detail['lontitue'] = $json_data['results'][0]['geometry']['location']['lng'];
        $address_detail['full_address'] = $json_data['results'][0]['formatted_address'];
        return $address_detail ;
    }
}
