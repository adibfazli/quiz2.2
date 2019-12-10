var Hobby = require('../models/hobby')

module.exports = {
    index,
    show,
    add,
    update,
    delete : deleteOne,
}

function index(req , res){
    Hobby.find({},function(err,hobby){
        console.log(hobby)
        res.render('index',{title:'hobby', hobby})
    })
}
function add(req , res){
    var hobby = new Hobby(req.body)
    hobby.save(function(err){
        res.redirect('/')
    })

}
function show(req , res){
    Hobby.findById(req.params.id , function(err , hobby){
        res.render('show' , {hobby})
    })
}
function update(req , res){
    Hobby.findById(req.params.id , function(err , hobby){
        hobby.name = req.body.name
        hobby.detail = req.body.detail
        hobby.save(function(err){
            res.redirect(`/show/${req.params.id}`)
        })
    })
}
function deleteOne(req , res){
    console.log('hi i i i i i i i i ')
    Hobby.findByIdAndDelete(req.params.id , function(err , hobby){
        res.redirect('/')
    })
}