(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/map/main"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/map/MapareaComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/map/MapareaComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    // var svgMapDataPopulation = {
    //     data: {
    //         area: {
    //         name: 'Area',
    //         format: '{0} km<sup>2</sup>',
    //         thousandSeparator: ','
    //         },
    //         population: {
    //         name: 'Population',
    //         thousandSeparator: ',',
    //         thresholdMax: 1500000000,
    //         thresholdMin: 20
    //         },
    //         density: {
    //         name: 'Density',
    //         format: '{0} per km<sup>2</sup>',
    //         thousandSeparator: ',',
    //         thresholdMax: 280,
    //         thresholdMin: 20
    //         },
    //     },
    //     applyData: 'population',
    //     values: {
    //         AF: {area: 645807, population: 29724323, density: 46},
    //         AX: {area: 1552, population: 28502, density: 18},
    //         AL: {area: 28703, population: 2870324, density: 100},
    //         DZ: {area: 2381741, population: 42545964, density: 18},
    //         AS: {area: 197, population: 56700, density: 288},
    //         AD: {area: 464, population: 80209, density: 173},
    //         AO: {area: 1246700, population: 29250009, density: 23},
    //         AI: {area: 96, population: 13452, density: 140},
    //         AQ: {area: 14000000, population: 1106, density: 0.00008},
    //         AG: {area: 442, population: 86295, density: 195},
    //         AR: {area: 2780400, population: 44494502, density: 16},
    //         AM: {area: 29743, population: 2969800, density: 100},
    //         AW: {area: 180, population: 105668, density: 587},
    //         AU: {area: 7692024, population: 25119327, density: 3},
    //         AT: {area: 83879, population: 8857960, density: 106},
    //         AZ: {area: 86600, population: 9943226, density: 115},
    //         BS: {area: 13940, population: 386870, density: 28},
    //         BH: {area: 778, population: 1566993, density: 2013},
    //         BD: {area: 143998, population: 165508286, density: 1149},
    //         BB: {area: 430, population: 286388, density: 666},
    //         BY: {area: 207600, population: 9477100, density: 46},
    //         BE: {area: 30528, population: 11428164, density: 374},
    //         BZ: {area: 22965, population: 398050, density: 17},
    //         BJ: {area: 112622, population: 11362269, density: 101},
    //         BM: {area: 52, population: 63779, density: 1227},
    //         BT: {area: 38394, population: 806364, density: 21},
    //         BO: {area: 1098581, population: 11307314, density: 10},
    //         BA: {area: 51209, population: 3511372, density: 69},
    //         BW: {area: 581730, population: 2024904, density: 3.5},
    //         BR: {area: 8515767, population: 209828546, density: 25},
    //         IO: {area: 60, population: 2500, density: 41},
    //         VG: {area: 151, population: 29537, density: 196},
    //         BN: {area: 5765, population: 421300, density: 73},
    //         BG: {area: 111002, population: 7050034, density: 64},
    //         BF: {area: 270764, population: 20244080, density: 75},
    //         BI: {area: 27816, population: 10681186, density: 384},
    //         KH: {area: 181035, population: 16316136, density: 90},
    //         CM: {area: 466050, population: 23794164, density: 51},
    //         CA: {area: 9984670, population: 37279841, density: 4},
    //         CV: {area: 4033, population: 544081, density: 133},
    //         BQ: {area: 322, population: 24593, density: 76},
    //         KY: {area: 259, population: 55456, density: 214},
    //         CF: {area: 622436, population: 4737423, density: 8},
    //         TD: {area: 1284000, population: 14900000, density: 12},
    //         CL: {area: 756096, population: 17373831, density: 23},
    //         CN: {area: 9640821, population: 1395098219, density: 145},
    //         CX: {area: 137, population: 2072, density: 15},
    //         CC: {area: 14, population: 544, density: 39},
    //         CO: {area: 1141748, population: 50030989, density: 44},
    //         KM: {area: 1861, population: 850688, density: 457},
    //         CG: {area: 342000, population: 5399895, density: 16},
    //         CK: {area: 237, population: 15200, density: 64},
    //         CR: {area: 51100, population: 5003393, density: 98},
    //         HR: {area: 56542, population: 4105493, density: 73},
    //         CU: {area: 109884, population: 11221060, density: 102},
    //         CW: {area: 363.91, population: 161573, density: 444},
    //         CY: {area: 5896, population: 854800, density: 145},
    //         CZ: {area: 78867, population: 10625449, density: 135},
    //         CD: {area: 2345095, population: 84004989, density: 36},
    //         DK: {area: 43098, population: 5806015, density: 135},
    //         DJ: {area: 23000, population: 1049001, density: 46},
    //         DM: {area: 739, population: 71293, density: 96},
    //         DO: {area: 47875, population: 10266149, density: 214},
    //         EC: {area: 276841, population: 17111861, density: 62},
    //         EG: {area: 1002450, population: 97869192, density: 98},
    //         SV: {area: 21040, population: 6643359, density: 316},
    //         GQ: {area: 28051, population: 1222442, density: 44},
    //         ER: {area: 121100, population: 5187948, density: 43},
    //         EE: {area: 45339, population: 1315635, density: 29},
    //         ET: {area: 1063652, population: 107534882, density: 101},
    //         FK: {area: 12173, population: 2563, density: 0.2},
    //         FO: {area: 1399, population: 50844, density: 34},
    //         FM: {area: 701, population: 105300, density: 150},
    //         FJ: {area: 18333, population: 884887, density: 48},
    //         FI: {area: 338424, population: 5520535, density: 16},
    //         FR: {area: 543965, population: 67348000, density: 124},
    //         GF: {area: 86504, population: 244118, density: 2.8},
    //         PF: {area: 3521, population: 277100, density: 79},
    //         TF: {area: 7829, population: 310, density: 0.04},
    //         GA: {area: 267667, population: 2067561, density: 8},
    //         GM: {area: 10690, population: 2163765, density: 202},
    //         GE: {area: 69700, population: 3729600, density: 54},
    //         DE: {area: 357168, population: 82793800, density: 232},
    //         GH: {area: 238533, population: 29614337, density: 124},
    //         GI: {area: 6.8, population: 33140, density: 4874},
    //         GR: {area: 131957, population: 10768193, density: 82},
    //         GL: {area: 2166000, population: 55877, density: 0.03},
    //         GD: {area: 344, population: 103328, density: 300},
    //         GP: {area: 1628.4, population: 395725, density: 243},
    //         GU: {area: 541, population: 172400, density: 319},
    //         GT: {area: 108889, population: 17302084, density: 159},
    //         GN: {area: 245857, population: 11883516, density: 48},
    //         GW: {area: 36125, population: 1553822, density: 43},
    //         GY: {area: 214999, population: 782225, density: 4},
    //         HT: {area: 27065, population: 11112945, density: 411},
    //         HN: {area: 112492, population: 9012229, density: 80},
    //         HK: {area: 1106.4, population: 7448900, density: 6732},
    //         HU: {area: 93029, population: 9771000, density: 105},
    //         IS: {area: 102775, population: 353070, density: 3.4},
    //         IN: {area: 3287240, population: 1339374357, density: 407},
    //         ID: {area: 1904569, population: 265015300, density: 139},
    //         IR: {area: 1648195, population: 81942410, density: 50},
    //         IQ: {area: 387267, population: 34255250, density: 88},
    //         IE: {area: 70273, population: 4792500, density: 68},
    //         IM: {area: 572, population: 83314, density: 146},
    //         IL: {area: 22072, population: 8944395, density: 405},
    //         IT: {area: 301308, population: 60404843, density: 200},
    //         CI: {area: 322921, population: 24295000, density: 75},
    //         JM: {area: 10991, population: 2730894, density: 248},
    //         JP: {area: 377944, population: 126440000, density: 335},
    //         JE: {area: 116, population: 104200, density: 898},
    //         JO: {area: 89342, population: 10280040, density: 115},
    //         KZ: {area: 2724900, population: 18311700, density: 7},
    //         KE: {area: 581834, population: 50950879, density: 88},
    //         KI: {area: 811, population: 120100, density: 148},
    //         KW: {area: 17818, population: 4007000, density: 225},
    //         KG: {area: 199945, population: 6309300, density: 32},
    //         LA: {area: 236800, population: 6492400, density: 27},
    //         LV: {area: 64562, population: 1922600, density: 30},
    //         LB: {area: 10452, population: 6093509, density: 597},
    //         LS: {area: 30355, population: 2263010, density: 75},
    //         LR: {area: 97036, population: 4382387, density: 45},
    //         LY: {area: 1770060, population: 6470956, density: 4},
    //         LI: {area: 160, population: 38111, density: 238},
    //         LT: {area: 65300, population: 2797184, density: 43},
    //         LU: {area: 2586, population: 602005, density: 233},
    //         MO: {area: 32.9, population: 658900, density: 20027},
    //         MK: {area: 25713, population: 2075301, density: 81},
    //         MG: {area: 587041, population: 26262810, density: 45},
    //         MW: {area: 118484, population: 19164728, density: 162},
    //         MY: {area: 330803, population: 32529280, density: 98},
    //         MV: {area: 298, population: 378114, density: 1269},
    //         ML: {area: 1248574, population: 19107706, density: 15},
    //         MT: {area: 315, population: 475701, density: 1510},
    //         MH: {area: 181, population: 55500, density: 307},
    //         MQ: {area: 1128, population: 376847, density: 334},
    //         MR: {area: 1030700, population: 3461041, density: 3.4},
    //         MU: {area: 2040, population: 1265577, density: 620},
    //         YT: {area: 374, population: 256518, density: 686},
    //         MX: {area: 1967138, population: 124737789, density: 63},
    //         MD: {area: 33843, population: 3547539, density: 105},
    //         MC: {area: 2.02, population: 38300, density: 18960},
    //         MN: {area: 1564100, population: 3000000, density: 1.9},
    //         ME: {area: 13812, population: 622387, density: 45},
    //         MS: {area: 102, population: 4922, density: 48},
    //         MA: {area: 446550, population: 34840130, density: 78},
    //         MZ: {area: 799380, population: 28861863, density: 36},
    //         MM: {area: 676577, population: 53862731, density: 80},
    //         NA: {area: 825118, population: 2413643, density: 2.9},
    //         NR: {area: 21, population: 11000, density: 524},
    //         NP: {area: 147181, population: 29218867, density: 199},
    //         NL: {area: 41526, population: 17269908, density: 416},
    //         NC: {area: 18575, population: 258958, density: 14},
    //         NZ: {area: 270467, population: 4917617, density: 18},
    //         NI: {area: 121428, population: 6262703, density: 52},
    //         NE: {area: 1186408, population: 21466863, density: 18},
    //         NG: {area: 923768, population: 195875237, density: 212},
    //         NU: {area: 261, population: 1613, density: 6},
    //         NF: {area: 34.6, population: 1748, density: 50},
    //         KP: {area: 120540, population: 25610672, density: 212},
    //         MP: {area: 457, population: 53883, density: 118},
    //         NO: {area: 323782, population: 5312343, density: 16},
    //         OM: {area: 309500, population: 4183841, density: 14},
    //         PK: {area: 803940, population: 202620217, density: 252},
    //         PW: {area: 488, population: 20901, density: 43},
    //         PS: {area: 6020, population: 4816503, density: 800},
    //         PA: {area: 74177, population: 4158783, density: 56},
    //         PG: {area: 462840, population: 8558800, density: 18},
    //         PY: {area: 406752, population: 7052983, density: 17},
    //         PE: {area: 1285216, population: 32162184, density: 25},
    //         PH: {area: 300000, population: 106738440, density: 356},
    //         PN: {area: 47.3, population: 56, density: 1.2},
    //         PL: {area: 312685, population: 38433600, density: 123},
    //         PT: {area: 92090, population: 10291027, density: 112},
    //         PR: {area: 8868, population: 3337177, density: 376},
    //         QA: {area: 11571, population: 2700390, density: 233},
    //         RE: {area: 2503.7, population: 850996, density: 340},
    //         RO: {area: 238391, population: 19524000, density: 82},
    //         RU: {area: 17125242, population: 146877088, density: 9},
    //         RW: {area: 26338, population: 12001136, density: 456},
    //         SH: {area: 122, population: 4534, density: 37},
    //         KN: {area: 270, population: 51970, density: 192},
    //         LC: {area: 617, population: 179667, density: 291},
    //         PM: {area: 242, population: 6081, density: 25},
    //         VC: {area: 389, population: 109557, density: 282},
    //         WS: {area: 2831, population: 199052, density: 70},
    //         SM: {area: 61, population: 33326, density: 546},
    //         ST: {area: 1001, population: 187356, density: 187},
    //         SA: {area: 2149690, population: 33413660, density: 16},
    //         SN: {area: 196722, population: 15726037, density: 80},
    //         RS: {area: 77474, population: 6925188, density: 89},
    //         SC: {area: 455, population: 95821, density: 211},
    //         SL: {area: 71740, population: 7075641, density: 99},
    //         SG: {area: 719.9, population: 5612300, density: 7796},
    //         SX: {area: 34, population: 40535, density: 1192},
    //         SK: {area: 49036, population: 5443120, density: 111},
    //         SI: {area: 20273, population: 2066880, density: 102},
    //         SB: {area: 28370, population: 682500, density: 24},
    //         SO: {area: 461537, population: 11234820, density: 24},
    //         ZA: {area: 1220813, population: 57725600, density: 47},
    //         GS: {area: 3903, population: 35, density: 0.009},
    //         KR: {area: 100210, population: 51635256, density: 515},
    //         SS: {area: 644329, population: 12575714, density: 20},
    //         ES: {area: 505990, population: 46659302, density: 92},
    //         LK: {area: 65610, population: 21670000, density: 330},
    //         SD: {area: 1839542, population: 40782742, density: 22},
    //         SR: {area: 163820, population: 568301, density: 3.5},
    //         SJ: {area: 61399, population: 2655, density: 0.04},
    //         SZ: {area: 17364, population: 1159250, density: 67},
    //         SE: {area: 450295, population: 10211424, density: 23},
    //         CH: {area: 41285, population: 8508904, density: 206},
    //         SY: {area: 185180, population: 18284407, density: 99},
    //         TW: {area: 36197, population: 23577271, density: 651},
    //         TJ: {area: 143100, population: 8931000, density: 62},
    //         TZ: {area: 881288, population: 54199163, density: 61},
    //         TH: {area: 513120, population: 69183173, density: 135},
    //         TL: {area: 14919, population: 1167242, density: 78},
    //         TG: {area: 56600, population: 7352000, density: 130},
    //         TK: {area: 10, population: 1499, density: 150},
    //         TO: {area: 720, population: 100651, density: 140},
    //         TT: {area: 5155, population: 1359193, density: 264},
    //         TN: {area: 163610, population: 11446300, density: 70},
    //         TR: {area: 783562, population: 80810525, density: 103},
    //         TM: {area: 491210, population: 5758000, density: 12},
    //         TC: {area: 497, population: 37910, density: 76},
    //         TV: {area: 26, population: 10200, density: 392},
    //         UG: {area: 241551, population: 38823100, density: 161},
    //         UA: {area: 603000, population: 42234014, density: 70},
    //         AE: {area: 83600, population: 9541615, density: 114},
    //         GB: {area: 242910, population: 66040229, density: 272},
    //         US: {area: 9833517, population: 328150370, density: 33},
    //         UM: {area: 34.2, population: 300, density: 8.8},
    //         VI: {area: 352, population: 106405, density: 302},
    //         UY: {area: 176215, population: 2990452, density: 17},
    //         UZ: {area: 447400, population: 32653900, density: 73},
    //         VU: {area: 12281, population: 304500, density: 25},
    //         VA: {area: 0.44, population: 1000, density: 2273},
    //         VE: {area: 916445, population: 31828110, density: 35},
    //         VN: {area: 331212, population: 94660000, density: 286},
    //         WF: {area: 274, population: 13135, density: 48},
    //         EH: {area: 252120, population: 567421, density: 2.3},
    //         YE: {area: 455000, population: 28915284, density: 64},
    //         ZM: {area: 752612, population: 16405229, density: 22},
    //         ZW: {area: 390757, population: 14848905, density: 38}
    //     }
    // }
    // new svgMap({
    //     targetElementID: 'svgMapPopulation',
    //     data: svgMapDataPopulation,
    //     flagType: 'image',
    //     initialZoom: 1.06,
    //     colorMax: '#e80931',
    //     colorMin: '#e693a2',
    // });
    var self = this;
    axios.get('/map/getLocalMap').then(function (response) {
      var svgMapDataPopulation = {
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
            thousandSeparator: ','
          },
          covid9_confirm_num: {
            name: 'Covid9_confirm_num',
            thousandSeparator: ',',
            thresholdMax: 2500000,
            thresholdMin: 0
          }
        },
        applyData: 'covid9_confirm_num',
        values: response.data
      };
      new svgMap({
        targetElementID: 'svgMapPopulation',
        data: svgMapDataPopulation,
        flagType: 'image',
        initialZoom: 1.06,
        colorMax: '#e80931',
        colorMin: '#e693a2'
      });
      console.log(response);
    })["catch"](function (error) {
      console.log(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/map/MapareaComponent.vue?vue&type=template&id=718dbe5c&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/map/MapareaComponent.vue?vue&type=template&id=718dbe5c& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { attrs: { id: "svgMapPopulation" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/map sync recursive \\.vue$/":
/*!**************************************************!*\
  !*** ./resources/js/components/map sync \.vue$/ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./MapareaComponent.vue": "./resources/js/components/map/MapareaComponent.vue"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/components/map sync recursive \\.vue$/";

/***/ }),

/***/ "./resources/js/components/map/MapareaComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/map/MapareaComponent.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MapareaComponent_vue_vue_type_template_id_718dbe5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapareaComponent.vue?vue&type=template&id=718dbe5c& */ "./resources/js/components/map/MapareaComponent.vue?vue&type=template&id=718dbe5c&");
/* harmony import */ var _MapareaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapareaComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/map/MapareaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MapareaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MapareaComponent_vue_vue_type_template_id_718dbe5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MapareaComponent_vue_vue_type_template_id_718dbe5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/map/MapareaComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/map/MapareaComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/map/MapareaComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapareaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MapareaComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/map/MapareaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapareaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/map/MapareaComponent.vue?vue&type=template&id=718dbe5c&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/map/MapareaComponent.vue?vue&type=template&id=718dbe5c& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MapareaComponent_vue_vue_type_template_id_718dbe5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MapareaComponent.vue?vue&type=template&id=718dbe5c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/map/MapareaComponent.vue?vue&type=template&id=718dbe5c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MapareaComponent_vue_vue_type_template_id_718dbe5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MapareaComponent_vue_vue_type_template_id_718dbe5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/map/main.js":
/*!**********************************!*\
  !*** ./resources/js/map/main.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Vue.component('maparea-component', require('./../components/map/MapareaComponent.vue').default);
var files = __webpack_require__("./resources/js/components/map sync recursive \\.vue$/");

files.keys().map(function (key) {
  return Vue.component(key.split('/').pop().split('.')[0], files(key)["default"]);
});
var app = new Vue({
  el: '#app'
});

/***/ }),

/***/ 1:
/*!****************************************!*\
  !*** multi ./resources/js/map/main.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/myPractice/main/resources/js/map/main.js */"./resources/js/map/main.js");


/***/ })

},[[1,"/js/map/manifest"]]]);