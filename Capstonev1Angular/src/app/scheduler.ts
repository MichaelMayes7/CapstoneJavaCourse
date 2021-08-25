import { Plant } from './plant';

export class Scheduler {
    id: number;
    name: string;
    isWatered: boolean;
    isFertilized: boolean;
    lastWatered: Date;
    nextWatered: Date;
    lastFertilized: Date;
    nextFertilized: Date;
    plants?: Plant[];
}
