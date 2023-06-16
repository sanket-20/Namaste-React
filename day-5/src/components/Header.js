export const Title = () => (
    <h1 id="title" key="/h2">
        <a href="/">
            <img 
            className="logo" 
            src="https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT" 
            alt="" 
            />
        </a>
    </h1>
);

// Composing components
const Header = () => {
    return (
        <div className="header">
            <Title />

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;