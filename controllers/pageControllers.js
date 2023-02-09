const Photo = require('../models/photo');

exports.aboutPage = (req, res) => {
    res.render('about');
};

exports.addPage = (req, res) => {
    res.render('add_photo');
};

exports.editPage = async (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
    const photoObject = await Photo.findOne({ _id: req.params.id });
    res.render('edit', {
        photoObject,
    });
};
