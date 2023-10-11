const app = require("express")
const router = app.Router()
const user = [
    {
    Name:"faiz",
    id:1
},
{
    Name:"Junaid",
    id:2
},
{
    Name:"Atta",
    id:3
},
{
    Name:"Bilal",
    id:4
},
]
router.get('/',(req, res)=>{
res.status(200).send({
    status:200,
    massage:"All users",
    Users:user
})

})
router.get('/:id',(req, res)=>{
    let user1 = user.find(e=>e.id==req.params.id)
    if(user1){
        res.status(200).send({
            user:user1,
            Meassage :"User Fonuded"

        })
    }
    else{
        res.status(500).send(
            {
                status:500,
                Error:true,
                massage:"User Not Found"
                
        }
        )
    }
})
router.post('/', (req, res) => {
    console.log(req.body)
    user.push({Name :req.body.Name , id : user.length  })
    res.status(200).send({ status: 200, user : {Name :req.body.Name , id : user.length + 1 } })

})
router.delete('/:id', (req, res) => {
    console.log(req.body)
    user.splice(req.params.id-1 ,1)
    res.status(200).send({ status: 200, user : user })
})
router.put('/:id', (req, res) => {
    
    if(user[req.params.id-1]){
        user[req.params.id-1].Name= 'faizu'
        res.status(200).send({ status: 200, user : user[req.params.id-1].Name })
    }
else{
    res.status(400).send({ status: 400, Massage : "user not found"})
}
})
module.exports= router
