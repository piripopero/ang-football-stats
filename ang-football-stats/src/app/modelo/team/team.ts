import { Player } from '../player/player'
import { Area } from '../area/area';

export class Team {

    id : number;
    area : Area;
    name : String;
    website : String;
    founded : String;
    clubColors : String;
    venue : String;
    crestUrl: String;
    squad : Player[];
}
