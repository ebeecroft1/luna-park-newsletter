const { boolean } = require('joi');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        firstName: {
            type: String,
            validate: {
                validator: function(name) {
                    return /[a-zA-Z]/.test(name);
                },
                message: 'Name can only contain letters'
            },
            minLength: [2, 'First name must be more than two letters'],
            required: 'First name cannot be blank'
        },
        lastName: {
            type: String,
            validate: {
                validator: function(name) {
                    return /[a-zA-Z]/.test(name);
                },
                message: 'Name can only contain letters'
            },
            minLength: [2, 'Last name must be more than two letters'],
            required: 'Last name cannot be blank'
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: 'Email address is required',
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        interests: {
            deals: { type: Boolean },
            events: { type: Boolean },
            update: { type: Boolean },
            promos: { type: Boolean }
        },
        frequency: {
            type: String
        }
    },
    {timestamps: true},
    { collection: 'user' }
);

module.exports = mongoose.model('User', UserSchema);