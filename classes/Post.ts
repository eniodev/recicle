import { Double } from "react-native/Libraries/Types/CodegenTypes";

class Post {
    static id : Number;
    id_user : Number;
    description : string;
    image_url : string;
    hash_tags : string;
    price_units : string

    constructor (id_user : Number, description : string, image_url : string, hash_Tags : string, price_units : string) {
        this.id_user = id_user;
        this.description = description;
        this.image_url = image_url;
        this.hash_tags = hash_Tags;
        this.price_units = price_units;
    }
}

export default Post;