//Home page - Landing page//
import Layout from '../components/Layout'
import Link from 'next/link'
import {NavLink} from 'reactstrap';

const Signin = () => {

    return (
        <Layout>
            <h2> Sign-In Page </h2>
            <Link href="/signup">
            <NavLink>Not a member? Sign-up!</NavLink>
            </Link>
        </Layout>
    )
}

export default Signin;
