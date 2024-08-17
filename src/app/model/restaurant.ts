import { Address } from "./Address";
import { Rating } from "./Rating";

export class Restaurant {
    name:string;
    address:Address;
    rating:Rating

    constructor(name:string,addres:Address,rating:Rating){
        this.name = name;
        this.address=addres;
        this.rating= rating;
    }

}