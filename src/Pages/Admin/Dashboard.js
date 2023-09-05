import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'

export default function Dashboard() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <Sidebar/>
        </div>
    )
}
