import mongoose from 'mongoose';
import moviesSchema from './movies-schema.js';
const moviesModel = mongoose.model(
    'MoivesModel',
    moviesSchema
)
export default moviesModel;