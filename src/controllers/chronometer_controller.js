import Chronometer from "../models/Chronometer";

export async function getChronometer(req, res) {
    try {

        const chronometers = await Chronometer.findAll({
            attributes: ['id', 'name', 'hous', 'mins', 'secs', 'projectid'] ,
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            data: chronometers
        });

    }catch(e){
        console.log(e);
    }
}

export async function getOneChronometer(req, res) {
    const { id } = req.params;

    const chronometer = await Chronometer.findOne({ 
        where: {
            id: id
        }
    });
    res.json(chronometer);
}
export async function createChronometer(req, res) {
    const { name, hous, mins, secs, projectid } = req.body;
    const createdAt = Date.now();
    const updatedAt = Date.now();
    console.log(req.body);
     try {

        let newChronometer = await Chronometer.create({
            name,
            hous,
            mins,
            secs,
            projectid,
            createdAt,
            updatedAt
            
        },
            {
                fields: ['name', 'hous', 'mins', 'secs', 'projectid', 'createdAt' ,  'updatedAt']
            });
        if (newChronometer) {
            res.json({
                message: 'Chronometer created successfully',
                data: newChronometer
            });
         }

    } catch (e) {
        res.status(500).json({
            message: 'Error creating Chronometer',
            data: e
        });

    }
}

export async function deleteChronometer(req, res) {
    const { id } = req.params;
    await Chronometer.destroy({ 
        where: {
            id
        }
    });
    res.json({
        message: 'Chronometer deleted successfully',
       
    });
}