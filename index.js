const express = require('express')
const app = express()
const port = 3001


const employeeList = [{"first_name":"Dominica","last_name":"Kastel","department":"Marketing","job_title":"Speech Pathologist","avatar":"https://robohash.org/vitaeestillum.png?size=50x50&set=set1","display_name":"Dominica Kastel","id":"1bf8ec73-5331-413e-b7b4-af99e9b6da6c"},
{"first_name":"Susy","last_name":"Goulbourne","department":"Business Development","job_title":"Project Manager","avatar":"https://robohash.org/rerumblanditiisfugit.png?size=50x50&set=set1","display_name":"Susy Goulbourne","id":"e35b7652-9fce-406c-9dfc-f2e51553dde0"},
{"first_name":"Pavlov","last_name":"De Fries","department":"Business Development","job_title":"Actuary","avatar":"https://robohash.org/porroidcupiditate.png?size=50x50&set=set1","display_name":"Pavlov De Fries","id":"94f264a4-b69f-448e-8750-b27698e50b2d"},
{"first_name":"Catha","last_name":"Levicount","department":"Human Resources","job_title":"VP Sales","avatar":"https://robohash.org/evenietteneturearum.png?size=50x50&set=set1","display_name":"Catha Levicount","id":"d6a41f3c-ebf8-46f6-821d-e698bf79fb22"},
{"first_name":"Bette","last_name":"Vasnetsov","department":"Sales","job_title":"Staff Accountant I","avatar":"https://robohash.org/quibusdammolestiaeodit.png?size=50x50&set=set1","display_name":"Bette Vasnetsov","id":"2de0f52f-bdc9-4cf7-aeda-eb6b760864ae"},
{"first_name":"Barrett","last_name":"Ales","department":"Services","job_title":"Clinical Specialist","avatar":"https://robohash.org/porrolaudantiumquas.png?size=50x50&set=set1","display_name":"Barrett Ales","id":"7acd809c-fdb0-48d5-98b5-2ece9135b2b0"},
{"first_name":"Minna","last_name":"Oaten","department":"Legal","job_title":"Structural Analysis Engineer","avatar":"https://robohash.org/suscipitvelitnecessitatibus.png?size=50x50&set=set1","display_name":"Minna Oaten","id":"4bb9260b-e236-469d-bdf2-eeb09cb948c7"},
{"first_name":"Harriot","last_name":"Cowdry","department":"Business Development","job_title":"Recruiter","avatar":"https://robohash.org/autpariaturunde.png?size=50x50&set=set1","display_name":"Harriot Cowdry","id":"b8719be2-ed0c-4333-a152-184e5ad074cc"},
{"first_name":"Terrell","last_name":"Nerne","department":"Sales","job_title":"Assistant Media Planner","avatar":"https://robohash.org/velquidelectus.png?size=50x50&set=set1","display_name":"Terrell Nerne","id":"aba07e75-8b51-4b90-a478-b4427b4cd50c"},
{"first_name":"Monte","last_name":"Stain","department":"Human Resources","job_title":"Recruiter","avatar":"https://robohash.org/nisieumaccusantium.png?size=50x50&set=set1","display_name":"Monte Stain","id":"23ad5b9b-e4fe-4635-8ed0-6097938efd10"}]


const router = express.Router();

app.use(router);

router.get('/employees', (req, res) => {
  res.json({
      employees: employeeList
  })
})

router.get('/employees/:id', (req, res) => {
    res.json(employeeList.find(({id}) => req.params.id === id));
})

router.use("/api", router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})