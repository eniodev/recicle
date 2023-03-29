class Transition {
    static id : Number;
    id_saller : Number;
    id_bayer : Number;
    id_post : Number;

    constructor (id_saller : Number, id_bayer : Number, id_post : Number) {
        this.id_saller = id_saller;
        this.id_bayer = id_bayer;
        this.id_post = id_post;
    }
}

export default Transition;