<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrateAddressAreasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('address_areas', function (Blueprint $table) {
            $table->string('filename', 5)->unique();
            $table->string('zip', 5);
            $table->string('name', 32);
            $table->integer('address_city_id');
            $table->timestamps();

            $table->foreign('address_city_id')->references('id')->on('address_cities');
            $table->primary('filename');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('address_areas');
    }
}
