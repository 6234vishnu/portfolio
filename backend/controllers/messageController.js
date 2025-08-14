export const startServer=async(req,res)=>{  // for render server to start. usually render takes few seconds to start
    try {
        return res.status(200).json({success:true})
    } catch (error) {
         return res.status(500).json({success:false})
    }
}