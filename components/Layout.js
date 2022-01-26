const Layout = ({children}) => {
    return (
        <div> 
            <p> HEADER </p>
            {children}
            <p> FOOTER </p>
        </div>
    )
}

export default Layout;