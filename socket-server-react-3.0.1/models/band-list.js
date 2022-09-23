const Band = require("./band");

class BandList{

    constructor(){

        this.bands = [
            new Band('Pandilla'),
            new Band('Pintura'),
            new Band('Dibujo'),
            new Band('Tokyo'),
            new Band('pop'),
        ];
    }
    addband(name){
        const newBand = newBand(name);
        this.bands.push(newBand);
        return this.bands
    }
    removeBand(id){
        this.bands = this.bands.filter(band => band.id !== id);
    }

    increaseVotes(id){
        this.bands =this.bands.map(band =>{

            if (band.id == id) {
                band.votes += 1;
                
            }
            return band;
        })
    }

    
    changeName(id,newName){
        this.bands =this.bands.map(band =>{

            if (band.id == id) {
                band.name += newName;
                
            }
            return band;
        })
    }
    
    
}
module.exports=BandList