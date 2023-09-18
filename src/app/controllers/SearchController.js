const Course = require('../models/Course');

class SearchController {
    async search ( req, res, next) {
        const {keyword} = req.query;
        if(!keyword){
            res.redirect('/');
        }
        const courseSearch = await Course.find({name_content:{$regex: keyword, $options: 'i'}}).lean();
        // console.log('courseSearch',courseSearch);
        return res.render('search',{data:courseSearch});
    }

    async voiceSearch (req, res, next) {
        

        return res.render('voiceSearch');
    }
}

module.exports = new SearchController;