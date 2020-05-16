<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MapController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    // 取得疫情資料 (來源:https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv)
    public function grabCovid9Data(){

        $csv_url="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv";
        $csv_data = file_get_contents($csv_url);
        $csv_data_array = array_map("str_getcsv", explode("\n", $csv_data));

        $key_array = array() ;
        foreach ($csv_data_array as $key => $value) {
            if($key == 0 || !array_key_exists(1, $value))continue ;
            if(array_key_exists($value['1'], $key_array)){
                $key_array[$value['1']] += $value[count($value)-1] ;
            }else $key_array[$value['1']] = $value[count($value)-1] ;
        }

        return $key_array ;
    }
    // 取得本地端圖相關資訊
    public function getLocalMap(){

        $json_data_url = "/var/www/myPractice/main/public/storage/extraResource/map/results.json" ;
        $json_data = json_decode(file_get_contents($json_data_url), true);

        return $json_data ;
    }
    // 更新本地端地圖疫情資料
    public function updateLocalMap(){

        $json_data = $this->getLocalMap() ;
        $csv_array = $this->grabCovid9Data();
        
        foreach ($json_data as $data_key => $data_value) {
            if(array_key_exists($data_value['country'], $csv_array)){
                $json_data[$data_key]['covid9_confirm_num'] = $csv_array[$data_value['country']] ;
            }
        }
        file_put_contents('/var/www/myPractice/main/public/storage/extraResource/map/results.json', json_encode($json_data) );
        dd($json_data);
    }
}
