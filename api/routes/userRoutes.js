const userBuilder = require('../controllers/userController');

module.exports = (app) => {
    app
        .route('/signup')
        .post(userBuilder.createUser); // User sign up
    
    app
        .route('/users')
        .get(userBuilder.listAllUsers); // Admin view for dashboard
};