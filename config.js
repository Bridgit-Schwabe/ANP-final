var config = {
    style: 'mapbox://styles/mapbox/light-v11',
    accessToken: 'pk.eyJ1IjoiYnJpZGdpdGxhd3NjaCIsImEiOiJjbGg4aXZzZWkwOTE3M2Zuc3M0d2pzdThtIn0.euAvv3RGfkDauyGM6w7LLg',
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true,
    _auto: true,
    get auto() {
        return this._auto;
    },
    set auto(value) {
        this._auto = value;
    },
    title: 'The Lost Expedition of Franklin',
    subtitle: 'Lost in The North',
    byline: 'By Bridgit Schwabe',
    footer: 'Info sources from <a href="https://www.coolantarctica.com/Antarctica%20fact%20file/History/antarctic_ships/Franklin-north-west-passage-map.php" target="_blank">Here</a> and the Victory Point Note. Map is coded in... Does not want to work for me.',
    chapters: [
        {
            id: 'Kent',
            alignment: 'left',
            hidden: false,
            title: 'The Begining',
            image: '',
            description: 'In 1845, British explorer Sir John Franklin set sail with two ships, the HMS Erebus and the HMS Terror, on a mission to find the Northwest Passage through the Arctic. The ships depareted from Greenhithe, England.',
            location: {
                center: [[ 0.28209, 51.45007]],
                zoom: 5.2,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
         {
               layer: 'intro',
               opacity: 1,
             duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                  layer: 'intro',
                  opacity: 0,
                }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Disko Bay',
            image: '',
            description: 'Traveling with a supply ship, the HMS Terror and Erebus landed in Greenland. This would be the last time any contact would be had with the two ships on their journey.',
            location: {
                center: [-52.07837, 69.16904],
                zoom: 5.99,
                pitch: 45,
                bearing: -38.39,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Beechy Island',
            image: 'https://www.coolantarctica.com/gallery/arctic/0015.jpg',
            description: 'Wintered on Beechy Island in 1845/46. The area is now a memorial for the lives lost on the journey.',
            location: {
                center: [-91.43711, 74.80684],
                zoom: 6.10,
                pitch: 45.00,
                bearing: -56.57
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Victory Point',
            image: '',
            description: 'Both ships became trapped in the ice, stranding the crew. The two ships were deserted on April 22nd, 1848. And at that time there had been 9 officers dead and 15 crewmen dead. This included John Franklin.',
            location: {
                center: [-97.90532, 69.88665],
                zoom: 5.64,
                pitch: 1.99,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'fully',
            hidden: false,
            title: 'Aftermath',
            image: 'https://www.coolantarctica.com/Antarctica%20fact%20file/History/antarctic_ships/franklin-map.jpg',
            description: 'Those who joined the Franklin expedition were met with intense winters that they could not handle and in turn lost their lives. After various failed rescue attempts, the HMS Erebus would not be found until 2014 and the HMS Terror in 2016. The UK after this discovery gave Canada and the Inuit people the rights to the two ships and any artifacts on them.',
            location: {
                center: [-97.90532, 69.88665],
                zoom: 6.10,
                pitch: 45.00,
                bearing: -56.57
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
