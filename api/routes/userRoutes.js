const userBuilder = require('../controllers/userController');

module.exports = (app) => {
    app
        .route('/users')
        .get(userBuilder.listAllUsers) // Admin view for dashboard
<<<<<<< HEAD
        .post(userBuilder.createUser); // User sign up
=======
        .post(userBuilder.createUser); // User sign up      
>>>>>>> e86f507df24376b24ecafae556ff0e006a1e7a54
};