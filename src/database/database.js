import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'postgres',
    'postgres',
    '12345678',
    {
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers:false,
        underscored:true,
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)