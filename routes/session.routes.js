const {Router} = require("express");

const Session = require("../models/Session");
const Code = require("../models/Code");
const Task = require("../models/Task");

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

// /api/session/create
router.post(
    "/create",
    async (req, res) => {
        try {
            /**
             * Активируем одноразовый код.
             */
            // const codes = await Code.find({code: req.body.code}).exec();

            // if (codes.length > 0) {
            //     codes[0].isActive = false;
            //     codes[0].save();
            // } else {
            //     return res.status(400).json({message: "Код неактивный"});
            // }

            const user = await Session.findOne({'email': req.body.email});

            if (user && user.email === req.body.email || user.ip === req.body.ip) {
                res.status(401).send("Вы можете поучаствовать в игре только один раз.")
            } else {
                /**
                 * Создаем сессию.
                 */
                const session = new Session({
                    name: req.body.name,
                    email: req.body.email,
                    ip: req.ip,
                    started: req.body.started,
                    solvedTasks: []
                });
                const result = await session.save();

                const tasks = await Task.find({id: 1}).exec();

                res.status(201).json({
                    _id: result._id,
                    task: tasks[0]
                });
            }
        } catch (error) {
            console.log('Error:', error.message);

            res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" })
        }
    }
);

router.put(
    "/:id/update",
    async (req, res) => {
        try {
            const sessions = await Session.find({_id: req.params.id}).exec();
            const sessionItem = sessions[0];

            if (req.body.solvedNumber) {
                const index = sessionItem.solvedTasks.findIndex((task) => req.body.solvedNumber === task.solvedNumber);

                if (index === -1) {
                    sessionItem.solvedTasks.push(req.body);
                } else {
                    sessionItem.solvedTasks[index] = req.body;
                }
            } else if (req.body.finished) {
                sessionItem.finished = req.body.finished;
            }

            sessionItem.save();

            res.status(201).json(sessions);
        } catch (error) {
            console.log('Error:', error.message);

            res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
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