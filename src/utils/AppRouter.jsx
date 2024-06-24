import Create from '../components/Create'
import Dashboard from '../components/Dashboard'
import Sidebar from '../components/Sidebar'
import View from '../components/View'
import StatusReport from '../components/StatusReport'
import { Navigate } from 'react-router-dom'
const AppRouter = [
    {
        path:'/',
        element:<><Sidebar/><Dashboard/></>
    },
    {
        path:'/create',
        element:<><Sidebar/><Create/></>
    },
    {
        path:'/status',
        element:<><Sidebar/><StatusReport/></>
    },
    {
        path:'/profile/:id',
        element:<><Sidebar/><View/></>
    },
    {
        path:'/*',
        element:<Navigate to='/'/>
    }
]

export default AppRouter