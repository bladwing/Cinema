function videosController(Video){
    function post(req, res){
       
        const video = new Video(req.body);
        if ( !req.body.title ){
            res.status(400);
            return res.send("Title is required");
        }
        video.save();
        res.status(201);
        return res.json(video);
    }

    function get(req, res){
        const query = {}

        if( req.query.genre ){
            query.genre = req.query.genre;
        }

        Video.find(query, (err, videos) => {
            if( err ) {
                return res.send(err);
            }
            const foundVideos = videos.map( video => {
                const newVideo = video.toJSON()
                return newVideo;
            })

            return res.json(foundVideos);
        });
    }

    return { post, get }
}

module.exports = videosController;