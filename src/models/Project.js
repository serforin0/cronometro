import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Chronometer from './Chronometer';

 const Project = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true 
    },
    name: {
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    deliverydate: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

Project.hasMany(Chronometer, { foreingKey: 'projectid', sourceKey: 'id'});
Chronometer.belongsTo(Project, { foreingKey: 'projectid', sourceKey: 'id'})

export default Project;