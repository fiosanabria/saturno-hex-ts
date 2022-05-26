import {IBarrera} from "./interfaces"

class Barrera implements IBarrera {
    elevar(): void {
        console.log("se eleva");
        
    }

}

export default Barrera;