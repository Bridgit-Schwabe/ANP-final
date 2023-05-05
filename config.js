var config = {
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    accessToken: 'sk.eyJ1IjoiYnJpZGdpdGxhd3NjaCIsImEiOiJjbGg5aWRtMXQwN2xwM2VzMHkyazRhOGlhIn0.brCAag4upoZbyMrMYj4sqw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true,
    _auto: false,
    get auto() {
        return this._auto;
    },
    set auto(value) {
        this._auto = value;
    },
    title: 'The Lost Expedition of Franklin',
    subtitle: 'Lost in The North',
    byline: 'By Bridgit Schwabe',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'Kent',
            alignment: 'left',
            hidden: false,
            title: 'The Begining',
            image: '',
            description: 'In 1845, British explorer Sir John Franklin set sail with two ships, the HMS Erebus and the HMS Terror, on a mission to find the Northwest Passage through the Arctic. The ships depareted from Greenhithe, England.',
            location: {
                center: [[0.28209, 51.45007]],
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
               opacity: 0,
             duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                  layer: 'intro',
                  opacity: 0
                }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: '',
            description: 'Copy these sections to add to your story.',
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
            title: 'Third Title',
            image: '',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
            image: '',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
