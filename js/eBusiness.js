var products = [
    {"Category": "Men", "Name":"Gray Shoe", "Price": "$20.00", "Image": "prod_2.png"},
    {"Category": "Men", "Name":"Blue Shoe High Heels", "Price": "$28.00", "Image": "hero_1.png"},
    {"Category": "Men", "Name":"Kindao Jacket", "Price": "$158.00", "Image": "model_2.png"},
    {"Category": "Men", "Name":"Donamio Jacket", "Price": "$28.00", "Image": "model_5.png"},
    {"Category": "Men", "Name":"Yellow Jacket", "Price": "$58.00", "Image": "model_7.png"},
    {"Category": "Men", "Name":"Ran-Ban", "Price": "$379.00", "Image": "person_3.jpg"},
    {"Category": "Men", "Name":"Nice Venus", "Price": "$825.00", "Image": "person_4.jpg"},
    {"Category": "Women", "Name":"Smooth Cloth", "Price": "$28.00", "Image": "model_1.png"},
    {"Category": "Women", "Name":"BlueSleeves", "Price": "$25.00", "Image": "model_4.png"},
    {"Category": "Women", "Name":"Flora Beauty", "Price": "$65.00", "Image": "model_6.png"},
    {"Category": "Women", "Name":"Coolvin CV19", "Price": "$482.00", "Image": "person_1.jpg"},
    {"Category": "Women", "Name":"EleWhite Jacket", "Price": "$825.00", "Image": "women.jpg"},
    {"Category": "Women", "Name":"Leather Green Bag", "Price": "$28.00", "Image": "prod_1.png"},
    {"Category": "Children", "Name":"Winter Red", "Price": "$35.00", "Image": "children.jpg"},
    {"Category": "Children", "Name":"Tank-Top", "Price": "$15.00", "Image": "cloth_1.jpg"},
    {"Category": "Children", "Name":"Fish-Bone", "Price": "$49.00", "Image": "cloth_2.jpg"},
    {"Category": "Children", "Name":"Blue Star", "Price": "$20.00", "Image": "cloth_3.jpg"}
]

function search(obj, key, val){
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(search(obj[i], key, val));
        } else if (i == key && (obj[key]).toLowerCase() == val.toLowerCase()) {
            objects.push(obj);
        }
    }
    return objects;
}