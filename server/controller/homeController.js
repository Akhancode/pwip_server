exports.home = (req,res)=>{  
    try {
        res.status(200).json({
        success:true,
        greeting:"This is Home route"
    })
    } catch (error) {
        console.log(error)
        
    }

}