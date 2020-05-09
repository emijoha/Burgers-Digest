// Import `orm.js`
const orm = require("../config/orm");

const bobsBurger = {
    selectRandom: function(cb) {
        orm.selectRandom("bobs_burgers", "burger_pun", function(res) {
            cb(res);
        });
    }
};


module.exports = bobsBurger;