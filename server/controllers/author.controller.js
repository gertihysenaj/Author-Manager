const Author = require('../models/author.model');

    module.exports.createAuthor = async (req, res) => {
        const { name } = req.body;
        const authorExists = await Author.exists({ name });
        
        if (authorExists) {
            res.status(400).json({ message: 'Author already exists.' });
        } else {
            Author.create(req.body)
                .then(createdAuthor => res.json(createdAuthor))
                .catch(err => res.status(400).json(err));
        }
    }
    

    module.exports.getAllAuthors = (req, res) => {
        Author.find()
            .then(allAuthors => res.json(allAuthors))
            .catch(err => res.json(err));
    }

    module.exports.getAuthor = (req, res) => {
        Author.findById(req.params.id)
            .then(author => res.json(author))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    }

    module.exports.updateAuthor = async (req, res) => {
        const { name } = req.body;
        const sameNameAuthor = await Author.findOne({ name });
    
        // Make sure that the author with the same name is not the one being updated
        if (sameNameAuthor && sameNameAuthor._id != req.params.id) {
            res.status(400).json({ message: 'Another author with the same name exists.' });
        } else {
            Author.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
                .then(updatedAuthor => res.json(updatedAuthor))
                .catch(err => res.status(400).json(err));
        }
    }

    module.exports.deleteAuthor = (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(result => res.json({ result: result }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    }

