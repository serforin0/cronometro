import Project from "../models/Project";

export async function getProjects(req, res) {
    try {

        const project = await Project.findAll();
        res.json({
            data: project
        });

    }catch(e){
        console.log(e);
    }
}

export async function getoneProject(req, res) {
    const { id } = req.params;

    const project = await Project.findOne({ 
        where: {
            id: id
        }
    });
    res.json(project);
}
export async function createProject(req, res) {
    const { name, priority, description, deliverydate } = req.body;
    try {

        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        },
            {
                fields: ['name', 'priority', 'description', 'deliverydate']
            });
        if (newProject) {
            res.json({
                message: 'Project created successfully',
                data: newProject
            });
        }

    } catch (e) {
        res.status(500).json({
            message: 'Error creating project',
            data: e
        });

    }
}

export async function deleteProject(req, res) {
    const { id } = req.params;
    const deleteRowCount = await Project.delete({ 
        where: {
            id
        }
    });
    res.json({
        message: 'Project deleted successfully',
        count: deleteRowCount
    });
}