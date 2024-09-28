const sma = {
    index:(req, res)=>{ 
        res.render('index', {currentPath:req.path});

    },

    gallery:(req, res)=>{
        res.render('gallery', {currentPath:req.path});

    },
    about:(req, res)=>{
        res.render('about', {currentPath:req.path});
    }

};

module.exports = sma;