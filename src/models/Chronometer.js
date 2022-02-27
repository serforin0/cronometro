import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

 const Chronometer = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true 
    },
    name: {
        type: Sequelize.TEXT
    },
    hous: {
        type: Sequelize.INTEGER
    },
    mins: {
        type: Sequelize.INTEGER
    },
    secs: {
        type: Sequelize.INTEGER
    },
    projectid: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

export default Chronometer;