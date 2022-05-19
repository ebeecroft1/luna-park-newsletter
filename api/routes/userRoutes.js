const userBuilder = require('../controllers/userController');

module.exports = (app) => {
    app
        .route('/users')
        .get(userBuilder.listAllUsers) // Admin view for dashboard
        .post(userBuilder.createUser); // User sign up      
};