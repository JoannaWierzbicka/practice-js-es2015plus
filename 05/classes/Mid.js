import Programmer from './Programmer.js';

export default class Mid extends Programmer{
    getMinMaxSkills() {
        return [20, 60];
    }

    getMinMaxExperience() {
        return [30, 60];
    }

    getMinMaxWilligness() {
        return [50, 90];
    }

}

const mid = new Mid()


