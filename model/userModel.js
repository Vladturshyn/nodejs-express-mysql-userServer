const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    age: { type: Number, required: true },
    email: {type: String, required: true },
    subjects : [{ type: Schema.Types.ObjectId, ref: 'Subject' }]
});

module.exports = mongoose.model('users', userSchema);