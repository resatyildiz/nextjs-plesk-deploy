/**
 * This function is nextjs user api. this function only return mock data with js promise inside next js api.
 */
import { NextResponse } from 'next/server'

// this array is mock data. include 10 user data
const users = [
    { id: 1, name: 'John Doe', email: "" },
    { id: 2, name: ' Doe', email: "" },
    { id: 3, name: 'John ', email: "" },
    { id: 4, name: 'Jane Doe', email: "" },
    { id: 5, name: ' Doe', email: "" },
    { id: 6, name: 'Jane Doe', email: "" },
    { id: 7, name: 'John Doe', email: "" },
    { id: 8, name: 'Jane ', email: "" },
    { id: 9, name: 'John Doe', email: "" },
    { id: 10, name: 'Jane Doe', email: "" },
]

/**
 * 
 * @returns 
 */
export async function GET() {
    const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(users)
        }, 1000)
    })

    return NextResponse.json({ data })
}