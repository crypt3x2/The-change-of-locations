import alt from 'alt-client';
import * as natives from 'natives';
import { addTemporaryText } from '../../freecam/text';

let data = [
    { // Casino
        name: 'The Diamond Casino and Resort',
        array: [
            {
                name: 'Casino Penthouse',
                coords: [976.6364, 70.29476, 115.1641]
            },
            {
                name: 'Casino Windows',
                coords: [976.6364, 70.29476, 115.1641]
            },
            {
                name: 'Casino Parkhouse',
                coords: [1380.0000, 200.0000, -50.0000]
            },
            {
                name: 'Casino Garage',
                coords: [1295.0000, 230.0000, -50.0000]
            },
            {
                name: 'Casino Main',
                coords: [1100.0000, 220.0000, -50.0000]
            },
        ]
    },
    { // Bunker
        name: 'Online Bunkers',
        array: [
            {
                name: 'ZancudoBunker',
                coords: [-3058.714, 3329.19, 12.5844]
            },
            {
                name: 'Route68Bunker',
                coords: [24.43542, 2959.705, 58.35517]
            },
            {
                name: 'OilfieldsBunker',
                coords: [481.0465, 2995.135, 43.96672]
            },
            {
                name: 'DesertBunker',
                coords: [848.6175, 2996.567, 45.81612]
            },
            {
                name: 'SmokeTreeBunker',
                coords: [2126.785, 3335.04, 48.21422]
            },
            {
                name: 'ScrapyardBunker',
                coords: [2493.654, 3140.399, 51.28789]
            },
            {
                name: 'GrapeseedBunker',
                coords: [1823.961, 4708.14, 42.4991]
            },
            {
                name: 'PalletoBunker',
                coords: [-783.0755, 5934.686, 24.31475]
            },
            {
                name: 'Route1Bunker',
                coords: [-3180.466, 1374.192, 19.9597]
            },
            {
                name: 'FarmhouseBunker',
                coords: [1570.372, 2254.549, 78.89397]
            },
            {
                name: 'RatonCanyonBunker',
                coords: [-391.3216, 4363.728, 58.65862]
            },
        ]
    },
//     { // Online Apartments
//         name: 'Online Apartments',
//         array: [
//             {
//                 name: 'Modern 1 Apartment',
//                 coords: [-786.8663, 315.7642, 217.6385]
//             },
//             {
//                 name: 'Modern 2 Apartment',
//                 coords: [-786.9563, 315.6229, 187.9136
// ]
//             },
//             {
//                 name: 'Modern 3 Apartment',
//                 coords: [-774.0126, 342.0428, 196.6864
// ]
//             },
//             {
//                 name: 'Mody 1 Apartment',
//                 coords: [-787.0749, 315.8198, 217.6386
// ]
//             },
//             {
//                 name: 'Mody 2 Apartment',
//                 coords: [-786.8195, 315.5634, 187.9137
// ]
//             },
//             {
//                 name: 'Mody 3 Apartment',
//                 coords: [-774.1382, 342.0316, 196.6864
// ]
//             },
//             {
//                 name: 'Vibrant 1 Apartment',
//                 coords: [-786.6245, 315.6175, 217.6385
// ]
//             },
//             {
//                 name: 'Vibrant 2 Apartment',
//                 coords: [-786.9584, 315.7974, 187.9135
// ]
//             },
//             {
//                 name: 'Vibrant 3 Apartment',
//                 coords: [-774.0223, 342.1718, 196.6863
// ]
//             },
//             {
//                 name: 'Sharp 1 Apartment',
//                 coords: [-787.0902, 315.7039, 217.6384
// ]
//             },
//             {
//                 name: 'Sharp 2 Apartment',
//                 coords: [-787.0155, 315.7071, 187.9135
// ]
//             },
//             {
//                 name: 'Sharp 3 Apartment',
//                 coords: [-773.8976, 342.1525, 196.6863]
//             },
//             {
//                 name: 'Monochrome 1 Apartment',
//                 coords: [-786.9887, 315.7393, 217.6386]
//             },
//             {
//                 name: 'Monochrome 2 Apartment',
//                 coords: [-786.8809, 315.6634, 187.9136
// ]
//             },
//             {
//                 name: 'Monochrome 3 Apartment',
//                 coords: [-774.0675, 342.0773, 196.6864
// ]
//             },
//             {
//                 name: 'Seductive 1 Apartment',
//                 coords: [-787.1423, 315.6943, 217.6384
// ]
//             },
//             {
//                 name: 'Seductive 2 Apartment',
//                 coords: [-787.0961, 315.815, 187.9135
// ]
//             },
//             {
//                 name: 'Seductive 3 Apartment',
//                 coords: [-773.9552, 341.9892, 196.6862
// ]
//             },
//             {
//                 name: 'Regal 1 Apartment',
//                 coords: [-787.029, 315.7113, 217.6385
// ]
//             },
//             {
//                 name: 'Regal 2 Apartment',
//                 coords: [-787.0574, 315.6567, 187.9135
// ]
//             },
//             {
//                 name: 'Regal 3 Apartment',
//                 coords: [-774.0109, 342.0965, 196.6863
// ]
//             },
//             {
//                 name: 'Aqua 1 Apartment',
//                 coords: [-786.9469, 315.5655, 217.6383
// ]
//             },
//             {
//                 name: 'Aqua 2 Apartment',
//                 coords: [-786.9756, 315.723, 187.9134
// ]
//             },
//             {
//                 name: 'Aqua 3 Apartment',
//                 coords: [-774.0349, 342.0296, 196.6862
// ]
//             },
//         ]
//     },
    { // Arcadius Business Centre
        name: 'Arcadius Business Centre',
        array: [
            {
                name: 'Executive Rich',
                coords: [-141.1987, -620.913, 168.8205]
            },
            {
                name: 'Executive Cool',
                coords: [-141.5429, -620.9524, 168.8204]
            },
            {
                name: 'Executive Contrast',
                coords: [-141.2896, -620.9618, 168.8204]
            },
            {
                name: 'Old Spice Warm',
                coords: [-141.4966, -620.8292, 168.8204]
            },
            {
                name: 'Old Spice Classical',
                coords: [-141.3997, -620.9006, 168.8204]
            },
            {
                name: 'Old Spice Vintage',
                coords: [-141.5361, -620.9186, 168.8204]
            },
            {
                name: 'Power Broker Ice',
                coords: [-141.392, -621.0451, 168.8204]
            },
            {
                name: 'Power Broker Conservative',
                coords: [-141.1945, -620.8729, 168.8204]
            },
            {
                name: 'Power Broker Polished',
                coords: [-141.4924, -621.0035, 168.8205]
            },
        ]
    },
    // { // Maze Bank Building

    //     name: 'Maze Bank Building',
    //     array: [
    //         {
    //             name: 'Executive Rich	',
    //             coords: [-75.8466, -826.9893, 243.3859	]
    //         },
    //         {
    //             name: 'Executive Cool',
    //             coords: [-75.49945, -827.05, 243.386	]
    //         },
    //         {
    //             name: 'Executive Contrast',
    //             coords: [-75.49827, -827.1889, 243.386	]
    //         },
    //         {
    //             name: 'Old Spice Warm',
    //             coords: [-75.44054, -827.1487, 243.3859	]
    //         },
    //         {
    //             name: 'Old Spice Classical',
    //             coords: [-75.63942, -827.1022, 243.3859	]
    //         },
    //         {
    //             name: 'Old Spice Vintage',
    //             coords: [-75.47446, -827.2621, 243.386	]
    //         },
    //         {
    //             name: 'Power Broker Ice	',
    //             coords: [-75.56978, -827.1152, 243.3859	]
    //         },
    //         {
    //             name: 'Power Broker Conservative',
    //             coords: [-75.51953, -827.0786, 243.3859	]
    //         },
    //         {
    //             name: 'Power Broker Polished	',
    //             coords: [-75.41915, -827.1118, 243.3858	]
    //         },
    //     ]
    // },
    // { // Lom Bank
    //     name: 'Lom Bank',
    //     array: [
    //         {
    //             name: 'Executive Rich',
    //             coords: [-1579.756, -565.0661, 108.523	]
    //         },
    //         {
    //             name: 'Executive Cool',
    //             coords: [-1579.678, -565.0034, 108.5229	]
    //         },
    //         {
    //             name: 'Executive Contrast',
    //             coords: [-1579.583, -565.0399, 108.5229	]
    //         },
    //         {
    //             name: 'Old Spice Warm',
    //             coords: [-1579.702, -565.0366, 108.5229	]
    //         },
    //         {
    //             name: 'Old Spice Classical',
    //             coords: [-1579.643, -564.9685, 108.5229	]
    //         },
    //         {
    //             name: 'Old Spice Vintage',
    //             coords: [-1579.681, -565.0003, 108.523	]
    //         },
    //         {
    //             name: 'Power Broker Ice',
    //             coords: [-1579.677, -565.0689, 108.5229	]
    //         },
    //         {
    //             name: 'Power Broker Conservative',
    //             coords: [-1579.708, -564.9634, 108.5229	]
    //         },
    //         {
    //             name: 'Power Broker Polished',
    //             coords: [-1579.693, -564.8981, 108.5229	]
    //         }
    //     ]
    // },
    // { // Maze Bank West
    //     name: 'Maze Bank West',
    //     array: [
    //         {
    //             name: 'Executive Rich',
    //             coords: [-1392.667, -480.4736, 72.04217	]
    //         },
    //         {
    //             name: 'Executive Cool',
    //             coords: [-1392.542, -480.4011, 72.04211	]
    //         },
    //         {
    //             name: 'Executive Contrast',
    //             coords: [-1392.626, -480.4856, 72.04212	]
    //         },
    //         {
    //             name: 'Old Spice Warm',
    //             coords: [-1392.617, -480.6363, 72.04208	]
    //         },
    //         {
    //             name: 'Old Spice Classical',
    //             coords: [-1392.532, -480.7649, 72.04207	]
    //         },
    //         {
    //             name: 'Old Spice Vintage',
    //             coords: [-1392.611, -480.5562, 72.04214	]
    //         },
    //         {
    //             name: 'Power Broker Ice',
    //             coords: [-1392.563, -480.549, 72.0421	]
    //         },
    //         {
    //             name: 'Power Broker Convservative',
    //             coords: [-1392.528, -480.475, 72.04206	]
    //         },
    //         {
    //             name: 'Power Broker Polished',
    //             coords: [-1392.416, -480.7485, 72.04207	]
    //         },
    //     ]
    // },
    { // Clubhouse & Warehouses
        name: 'Clubhouse & Warehouses',
        array: [
            {
                name: 'Clubhouse 1',
                coords: [1107.04, -3157.399, -37.51859	]
            },
            {
                name: 'Clubhouse 2',
                coords: [998.4809, -3164.711, -38.90733	]
            },
            {
                name: 'Warehouse 1',
                coords: [1009.5, -3196.6, -38.99682	]
            },
            {
                name: 'Warehouse 2',
                coords: [1051.491, -3196.536, -39.14842	]
            },
            {
                name: 'Warehouse 3',
                coords: [1093.6, -3196.6, -38.99841	]
            },
            {
                name: 'Warehouse 4',
                coords: [1121.897, -3195.338, -40.4025	]
            },
            {
                name: 'Warehouse 5',
                coords: [1165, -3196.6, -39.01306	]
            },
            {
                name: 'Warehouse Small',
                coords: [1094.988, -3101.776, -39.00363	]
            },
            {
                name: 'Warehouse Medium',
                coords: [1056.486, -3105.724, -39.00439	]
            },
            {
                name: 'Warehouse Large',
                coords: [1006.967, -3102.079, -39.0035	]
            },
            {
                name: 'Cargarage',
                coords: [994.5925, -3002.594, -39.64699	]
            },
        ]
    },
    { // GTA World
        name: 'GTA World',
        array: [
            {
                name: 'Carwash',
                coords: [55.7, -1391.3, 30.5]
            },
            {
                name: 'Stadium',
                coords: [-248.491, -2010.509, 34.574]
            },
            {
                name: 'Garage in La Mesa',
                coords: [970.27453, -1826.56982, 31.11477]
            },
            {
                name: 'Red Hill Valley church - Grave',
                coords: [-282.4638, 2835.84, 55.914]
            },
            {
                name: 'Losts trailer park',
                coords: [49.49379, 3744.472, 46.38629]
            },
            {
                name: 'Lost Clubhouse',
                coords: [984.1552, -95.3662, 74.50]
            },
            {
                name: 'Pillbox hospital',
                coords: [307.1680, -590.807, 43.280]
            },
            {
                name: 'PDM (Simons Car Dealer)',
                coords: [-54.30, -1109.3767, 26.4358]
            },
            {
                name: 'Remove Zancudoe Gates',
                coords: [-1599.95, 2807.05, 17.204]
            },
            {
                name: 'Ferris Wheel',
                coords: [-1645.55, -1113.04, 12.65]
            },
            {
                name: 'Casino Penthouse Glassfront',
                coords: [968.156, 0.3060, 111.2922]
            },
            {
                name: 'Golfflags',
                coords: [-1032, -84, 44]
            },
            {
                name: 'Racetrack',
                coords: [1978, 3111, 46]
            },
        ]
    },
    { // Car Garages 
        name: 'Car Garages',
        array: [
            {
                name: '2 Car Garage',
                coords: [173.2903, -1003.6, -99.65707]
            },
            {
                name: '6 Car Garage',
                coords: [197.8153, -1002.293, -99.65749]
            },
            {
                name: '10 Car Garage',
                coords: [229.9559, -981.7928, -99.66071
]
            },
        ]
    },
    { // Apartments 
        name: 'Apartments',
        array: [
            {
                name: 'Low End Apartment',
                coords: [261.4586, -998.8196, -99.00863]
            },
            {
                name: '4 Integrity Way, Apt 28',
                coords: [-18.07856, -583.6725, 79.46569]
            },
            {
                name: '4 Integrity Way, Apt 30',
                coords: [-35.31277, -580.4199, 88.71221]
            },
            {
                name: 'Dell Perro Heights, Apt 4',
                coords: [-1468.14, -541.815, 73.4442]
            },
            {
                name: 'Dell Perro Heights, Apt 7',
                coords: [-1477.14, -538.7499, 55.5264]
            },
            {
                name: 'Richard Majestic, Apt 2',
                coords: [-915.811, -379.432, 113.6748]
            },
            {
                name: 'Tinsel Towers, Apt 42',
                coords: [-614.86, 40.6783, 97.60007]
            },
            {
                name: 'EclipseTowers, Apt 3',
                coords: [-773.407, 341.766, 211.397]
            },
            {
                name: '3655 Wild Oats Drive',
                coords: [-169.286, 486.4938, 137.4436]
            },
            {
                name: '2044 North Conker Avenue',
                coords: [340.9412, 437.1798, 149.3925]
            },
            {
                name: '2045 North Conker Avenue',
                coords: [373.023, 416.105, 145.7006]
            },
            {
                name: '2862 Hillcrest Avenue',
                coords: [-676.127, 588.612, 145.1698]
            },
            {
                name: '2868 Hillcrest Avenue',
                coords: [-763.107, 615.906, 144.1401]
            },
            {
                name: '2874 Hillcrest Avenue',
                coords: [-857.798, 682.563, 152.6529]
            },
            {
                name: '2677 Whispymound Drive',
                coords: [120.5, 549.952, 184.097]
            },
            {
                name: '2133 Mad Wayne Thunder',
                coords: [-1288, 440.748, 97.69459]
            },
        ]
    },
    { // Misc 
        name: 'Misc',
        array: [
            {
                name: 'Bunker Interior',
                coords: [899.5518, -3246.038, -98.04907]
            },
            {
                name: 'CharCreator',
                coords: [402.5164, -1002.847, -99.2587]
            },
            {
                name: 'Mission Carpark',
                coords: [405.9228, -954.1149, -99.6627]
            },
            {
                name: 'Torture Room',
                coords: [136.5146, -2203.149, 7.30914]
            },
            {
                name: 'Solomons Office',
                coords: [-1005.84, -478.92, 50.02733]
            },
            {
                name: 'Psychiatrists Office',
                coords: [-1908.024, -573.4244, 19.09722]
            },
            {
                name: 'Omegas Garage',
                coords: [2331.344, 2574.073, 46.68137]
            },
            {
                name: 'Movie Theatre',
                coords: [-1427.299, -245.1012, 16.8039]
            },
            {
                name: 'Motel',
                coords: [152.2605, -1004.471, -98.99999]
            },
            {
                name: 'Madrazos Ranch',
                coords: [1399.9958, 1147.2348, 115.32130]
            },
            {
                name: 'Life Invader Office',
                coords: [-1044.193, -236.9535, 37.96496]
            },
            {
                name: 'Lesters House',
                coords: [1273.9, -1719.305, 54.77141]
            },
            {
                name: 'FBI Top Floor',
                coords: [134.5835, -749.339, 258.152]
            },
            {
                name: 'FBI Floor 47',
                coords: [134.5835, -766.486, 234.152]
            },
            {
                name: 'FBI Floor 49',
                coords: [134.635, -765.831, 242.152]
            },
            {
                name: 'IAA Office',
                coords: [117.22, -620.938, 206.1398]
            },
        ]
    },
]

let player = alt.Player.local

let wv = undefined;

alt.onServer('LS:Toggle', toogle)

function toogle() {
    if (wv == undefined){
        wv = new alt.WebView('http://resource/client/systems/location_switch/html/index.html');
        addTemporaryText(`freecamStatus`, `Switch Location: ON`, 0.95, 0.2, 0.4, 255, 255, 255, 255, 2000);
        wv.focus();
        wv.on('ready', () => {
            wv.emit('data', data)
        })
        wv.on('lc:update', (data) => {update_pos(data)})
    }
    else {
        addTemporaryText(`freecamStatus`, `Switch Location: OFF`, 0.95, 0.2, 0.4, 255, 255, 255, 255, 2000);
        wv.destroy();
        wv = undefined;
    }
};


alt.on('keyup', handleKeyup);

function handleKeyup(key) {

    if (wv == undefined) return;

    switch (key) {
        case 38:
            wv.emit('switch_up')
            break;
        case 40:
            wv.emit('switch_down')
            break;
        case 37:
            wv.emit('switch_left')
            break;
        case 39:
            wv.emit('switch_right')
            break;
    }
}



function update_pos(_data) {
    try{
    if (_data.count == undefined) addTemporaryText(`freecamStatus`, `${data[_data.page].name}`, 0.95, 0.2, 0.4, 255, 255, 255, 255, 2000);
    addTemporaryText(`freecamStatus`, `${data[_data.page].array[_data.count].name}`, 0.95, 0.2, 0.4, 255, 255, 255, 255, 2000);
    } catch(err){}
    let _coords = data[_data.page].array[_data.count].coords
    natives.setEntityCoords(player.scriptID, _coords[0], _coords[1], _coords[2], false, false, false, false)
}