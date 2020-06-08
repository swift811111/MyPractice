<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Http\Controllers\MapController ;

class updateLocalMap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:localmap';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command updateLocalMap';

    protected $map ;
    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(MapController $map)
    {
        parent::__construct();
        $this->map = $map ;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->map->updateLocalMap();
    }
}
