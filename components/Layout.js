import Header from './Header'
const Layout = ({children}) => {
    return (
        <div> 
            <Header/>
            {children}
            {/* <p> FOOTER </p> */}
        </div>
    )
}

export default Layout;
