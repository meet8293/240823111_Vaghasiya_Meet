exports.index = (req, res) => {
    res.send("Hello, MCA Students! \n");
};

exports.show = (req, res) => {
    res.send(`Hello Student! \n ID: ${req.params.id}`);
};

exports.store = (req, res) => {
    res.send(`successfully stored record! \n Name: ${req.body.name}, \n City: ${req.body.city}`);
};

exports.update = (req, res) => {
    res.send(`successfully updated record! \n ID: ${req.params.id}, \n Name: ${req.body.name}, \n City: ${req.body.city}`);
};

exports.destroy = (req, res) => {
    res.send(`successfully deleted with ID \n ID: ${req.params.id}`);
};

//exports={index, show, store, update, destroy};