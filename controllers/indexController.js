const moment = require('moment');

exports.getSlackName = (req, res) => {
    try{

        const { slack_name, track } = req.query;
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const now = new Date();
        const current_day = daysOfWeek[now.getUTCDay()]
        // const utc_time = new Date().toISOString();
        const utc_time = moment().utc().format('YYYY-MM-DDTHH:mm:ss[Z]');

        const jsonResponse = {
            slack_name,
            current_day,
            utc_time,
            track,
            github_file_url: "https://github.com/Jennifer-tech/HNG_Stage_One.git",
            github_repo_url: "https://github.com/Jennifer-tech/HNG_Stage_One",
            status_code: 200,
        }
        return res.json(jsonResponse)
    } catch(err){
        res.status(500).json(err)
    }
}