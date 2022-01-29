//Home page - Landing page//
import Layout from '../components/Layout'
import Link from 'next/link'
import {NavLink} from 'reactstrap';

const Index = () => {
   
    return (
        <Layout>
            <h2> Index Page </h2>

            <Link href="/signup">
                <NavLink>Sign-Up</NavLink>
            </Link>
        </Layout>
    )
} 

export default Index;
