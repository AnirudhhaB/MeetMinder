function Nav(){
    return (
        <nav>
            <a href="/" className="logo">CodeKaro Meetings</a>
            <div className="links">
                <a href="/about">Upcoming Meetings</a>
                <a href="/contact">Past Meetings</a>
                <a href="/add-meeting">Add Meetings</a>
            </div>
        </nav>
    )
}

export default Nav;