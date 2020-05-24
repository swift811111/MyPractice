<template>
    <div class="container">
        <div id="svgMapCovid9"></div>
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
                            covid9_confirm_num: {
                                name: 'Covid9_confirm_num',
                                thousandSeparator: ',',
                                thresholdMax: 2500000,
                                thresholdMin: 0
                            },
                        },
                        applyData: 'covid9_confirm_num',
                        values: ''  //response.data
                    },
            }
        },
        methods:{
            getLocalMap(){
                let self = this ;
                axios.get('/map/getLocalMap')
                .then(function (response) {
                    let svgMapSetting = self.svgMapSetting ;
                    svgMapSetting.values = response.data ;
                    self.renderSvgMap();
                    
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            renderSvgMap(){
                new svgMap({
                        targetElementID: 'svgMapCovid9',
                        data: this.svgMapSetting,
                        flagType: 'image',
                        initialZoom: 1.06,
                        colorMax: '#e80931',
                        colorMin: '#e693a2',
                    });
            },
            test(){
                console.log(this.getLocalMap());
            },
        },
        mounted() {
            this.getLocalMap();
        }
    }
</script>
