//Home page - Landing page//
import Layout from '../components/Layout'
import SignupComponent from '../components/auth/SignupComponent';
import Link from 'next/link'
import {NavLink} from 'reactstrap';


const Signup = () => {

    return (
        <Layout>
            <h2> Sign-Up Page </h2>
            {/* <Link href="/">
            <NavLink>Home</NavLink>
            </Link> */}
            <SignupComponent/>
        </Layout>
    )
}

export default Signup;
