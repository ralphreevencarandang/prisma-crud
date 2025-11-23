import { NextRequest, NextResponse } from "next/server"


export const addUser = async ()=>{
    try {
        
    } catch (error) {
        NextResponse.json({message: 'Insert user failed'}, {status: 500})
    }

}