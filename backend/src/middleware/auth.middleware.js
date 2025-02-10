import {clerkClient} from "@clerk/express";

export const protectRoute = (req,res,next) => {
    if(!req.user.id){
        req.status(401).json({message: "Unauthorized: You must be logged in to perfrom this action"})
    }

    next();
};

export const requireAdmin = async (req,res,next) => {
    try{
        const currentUser = await clerkClient.users.getUser(req.auth.userId);
        const isAdmin = process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;

        if(!isAdmin){
            return res.status(403).json({message: "Unauthorized: You must be an Admin in to perfrom this action"})
        }
        next();
    }
    catch(error){
        return res.status(500).json({message: "Internal Server Error",error})
    }
}