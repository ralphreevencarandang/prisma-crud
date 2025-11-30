import { NextRequest, NextResponse } from "next/server"
import {prisma} from '@/app/lib/prisma'

export const GET = async ()=>{
    try {
        // call the prisma model then the method you want to use
        const user = await prisma.users.findMany({
            where: {
                nationality: {in: ["Filipino", "Japanese"]}
             }
        })

        return NextResponse.json({user: user}, {status: 200})
        
    } catch (error) {
        NextResponse.json({message: 'Fetching user failed'}, {status: 500})
    }

}

export const POST = async ()=> {
    try {
        const user = await prisma.users.createMany  ({      
            data: [
                {
                email: "ralph@email.com",
                name: "ralph",
                password: "ralph",
            },
            {
                email: "reeven@email.com",
                name: "reeven",
                password: "reeven",
            },

            ]        
        })

        if (!user){
            return NextResponse.json({message: "Failed to create user"}, {status: 500})
        }
            return NextResponse.json({message: "User successfully created", user: user}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: 'Internal Server Error', error: error}, {status: 500})
        
    }
}

export const PUT = async ()=>{
    try {
        const user = await prisma.users.update({
            where: {id: 6},
            data: {
                name: "tarub"
            }
        })

            return NextResponse.json({message: "User successfully updated", user: user}, {status: 201})

        
    } catch (error) {
        return NextResponse.json({message: 'Internal Server Error', error: error}, {status: 500})
        
    }
}

export const DELETE = async ()=>{
    try {
        const user = await prisma.users.deleteMany({
           where: {age: {gt: 30}}
        })

            return NextResponse.json({message: "User successfully updated", user: user}, {status: 201})

        
    } catch (error) {
        return NextResponse.json({message: 'Internal Server Error', error: error}, {status: 500})
        
    }
}