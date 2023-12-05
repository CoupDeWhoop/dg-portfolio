export default function Header () {
    return (
        <header className="header">
            <div className="header-card">
                <h1>Dave Greenland</h1>
                <div className="job-title-container">
                    <img
                    className="profile-image"
                    src="/dev-images/web-developer.svg"
                    />
                    <p>software developer</p>
                </div>
            </div>
        </header>
    )
}