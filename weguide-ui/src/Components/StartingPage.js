import '../Styles/startingPageStyle.css';
import Footer from './Footer';

function StartingPage() {
    return (
        <div className="layoutColor">
            <h1 style={{ textAlign: 'center', color: 'white', paddingTop: '50px' }}>Welcome New User!</h1>

            <div className='' style={{ textAlign: 'center', marginBottom: '15px' }}>
                <button className=''>Login as Coach</button>
                <button>Register as Coach</button>
            </div>

            <div className='' style={{ textAlign: 'center' }}>
                <button>Login as User</button>
                <button>Register as User</button>
            </div>

            <Footer />
        </div>
    );
}
export default StartingPage;