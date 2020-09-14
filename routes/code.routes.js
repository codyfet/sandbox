const {Router} = require("express");
const Code = require("../models/Code");

const router = new Router();

/**
 * Генерирует код.
 *
 * @param {number} length Длина кода.
 */
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// /api/code/create
router.post(
    "/create",
    async (req, res) => {
        try {
            const codes = [];

            for (let i = 0; i < 500; i++) {
                codes.push(new Code({code: makeid(5), isActive: true}))
            }

            Code.insertMany(codes, (err, docs) => {

            });

            res.status(201).json("Данные успешно созданы");
        } catch (error) {
            console.log('Error:', error.message);

            res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" })
        }
    }
);

// /api/session
router.get(
    "/",
    async (req, res) => {
        try {
            Session.find({}).sort({started: 'desc'}).exec(function(err, sessions) {
                if (!err) {
                    res.status(201).json(sessions);
                }
            });
        } catch (error) {
            console.log('Error:', error.message);

            res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" })
        }
    }
);

module.exports = router;