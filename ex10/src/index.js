function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: "1973",
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Joe Bill",
            title: "Gipsy Girl",
            release_year: "1975",
            formats: {
                1: "DVD",
                2: "9PT",
                3: "EP"
            }
            
        }
    }; return myMusic;
} 
myFunction()[2];
module.exports = myFunction;