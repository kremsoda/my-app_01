
function NavList({children}) {
    return(
        <nav style={{display: 'flex', alignItems: 'center'}}>
            {children}
        </nav>
    );
}

export default NavList;