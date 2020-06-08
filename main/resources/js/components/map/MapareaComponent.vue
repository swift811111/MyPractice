<template>
    <div class="container">
        <div class="people_wrapper">
            <div class="count_all_people_have_covid19">all count : 999</div>
            <div class="realtime_people">
                <div v-for="item in svgMapSetting.values" class="covid19_country_data_list">
                    {{ item.country }} - {{ item.covid19_confirm_num }}
                </div>
            </div>
        </div>
        <div class="map_wrapper">
            <div id="svgMapCovid19"></div>
            <div class="death_confirm_other_wrapper">
                <div class="death_confirm_other_body count_death">death</div>
                <div class="death_confirm_other_body count_confirm">confirm</div>
                <div class="death_confirm_other_body count_other">other</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                svgMapSetting: {
                        data: {
                            area: {
                                name: 'Area',
                                format: '{0} km<sup>2</sup>',
                                thousandSeparator: ','
                            },
                            population: {
                                name: 'Population',
                                thousandSeparator: ',',
                                thresholdMax: 1500000000,
                                thresholdMin: 20
                            },
                            density: {
                                name: 'Density',
                                format: '{0} per km<sup>2</sup>',
                                thousandSeparator: ',',
                                thresholdMax: 280,
                                thresholdMin: 20
                            },
                            country: {
                                name: 'Country',
                                thousandSeparator: ',',
                            },
                            covid19_confirm_num: {
                                name: 'Covid19_confirm_num',
                                thousandSeparator: ',',
                                thresholdMax: 2500000,
                                thresholdMin: 0
                            },
                        },
                        applyData: 'covid19_confirm_num',
                        values: ''  //response.data
                    },
            }
        },
        methods:{
            getLocalMap(){
                let self = this ;
                axios.get('/map/getLocalMap')
                .then(function (response) {
                    (self.svgMapSetting).values = response.data ;
                    self.renderSvgMap();
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            renderSvgMap(){
                new svgMap({
                        targetElementID: 'svgMapCovid19',
                        data: this.svgMapSetting,
                        flagType: 'image',
                        initialZoom: 1.06,
                        colorMax: '#e80931',
                        colorMin: '#e693a2',
                    });
            },
        },
        mounted() {
            this.getLocalMap();
        }
    }
</script>
<style lang="scss">
.container {
    height: calc( 100% - 5rem );
    display: flex ;
    padding: 0 .5rem .5rem .5rem;
    color: #20a720;
    .people_wrapper{
        height: 100%;
        width: 20% ;
        border-radius: .3rem;
        color: red;
        .count_all_people_have_covid19 {
            background-color: #222323;
            height : calc( 10% - .5rem ) ;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: .5rem; 
        }
        .realtime_people {
            background-color: #222323;
            overflow: auto;
            height: 87% ;
        }
    }
    .map_wrapper{        
        width: 100%;
        padding: 0 .5rem 0 .5rem;
        #svgMapCovid19 {
            height: 60%;
            width:100% ;
        }
        .death_confirm_other_wrapper {
            display: flex;
            height:100% ;
            .death_confirm_other_body {
                width: 33.33333%;
                height:40% ;
            }
        }
    }
}
</style>