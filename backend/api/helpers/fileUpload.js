

fileUpload = async(req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: 403,
                message: 'No file uploaded'
            });
        } else {
            let itemImage = req.files.itemImage;
            await itemImage.mv('./uploads/' + itemImage.name);
                res.send({
                    status: 200,
                    message: 'File is uploaded',
                    data: {
                        name: itemImage.name,
                        mimetype: itemImage.mimetype,
                        size: itemImage.size,
                        url:'uploads/' + itemImage.name
                    }
                });
          
            //send response
           
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = { fileUpload };
