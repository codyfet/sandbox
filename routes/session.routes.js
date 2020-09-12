const {Router} = require("express");
// const Record = require("../models/Record");
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
            const codes = await Code.find({code: req.body.code}).exec();

            if (codes.length > 0) {
                codes[0].isActive = false;
                codes[0].save();
            } else {
                return res.status(400).json({message: "Код неактивный"});
            }

            /**
             * Создаем сессию.
             */
            const session = new Session({
                name: req.body.name,
                started: req.body.started,
                solvedTasks: []
            });
            const result = await session.save();

            const tasks = await Task.find({id: 1}).exec();

            res.status(201).json({
                _id: result._id,
                task: tasks[0]
            });
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

            console.log(req.params.id);

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

// /api/record/:id/update
// router.put(
//     "/:sessionId/update",
//     async (req, res) => {
//         try {
//             // const session = await Session.findByIdAndUpdate(req.params.sessionId, req.body, {new: true}).exec();
//             // Session.findOneAndUpdate({_id:req.params.sessionId}, req.body, function (err, session) {
//             //     res.send(session);
//             //   });

//             // Session.findOneAndUpdate({_id:req.params.sessionId}, req.body, {upsert: true, new: true}, function(err, doc) {
//             //     if (err) return res.send(500, {error: err});
//             //     return res.send('Succesfully saved.');
//             // });

//             // Session.update({_id:req.params.sessionId}, {$set: {email:"newEmail@gmail.com"}}).exec();

//             // res.status(201).json(session);
//         } catch (error) {
//             console.log('Error:', error.message);

//             res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
//         }
//     }
// );

// /api/session/create
// router.post(
//     "/:idSession/solved",
//     async (req, res) => {
//         try {
//             // const session = new Session(req.body);
//             // const result = await session.save();

//             res.status(201).json(result);
//         } catch (error) {
//             console.log('Error:', error.message);

//             res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" })
//         }
//     }
// );

// /api/record/:id/update
// router.put(
//     "/:id/update",
//     async (req, res) => {
//         try {
//             const record = await Record.findByIdAndUpdate(req.params.id, {$set: req.body}, {useFindAndModify: false, new: true}).exec();

//             res.status(201).json(record);
//         } catch (error) {
//             console.log('Error:', error.message);

//             res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
//         }
//     }
// );

// // /api/record/:id/delete
// router.delete(
//     "/:id/delete",
//     async (req, res) => {
//         try {
//             await Record.findOneAndDelete({'_id' : req.params.id}).exec();

//             res.status(201).json({message: "Запись успешно удалена"});
//         } catch (error) {
//             console.log('Error:', error.message);

//             res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
//         }
//     }
// );

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