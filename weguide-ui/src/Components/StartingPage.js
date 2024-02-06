import '../Styles/startingPageStyle.css';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function StartingPage() {
    const navigate = useNavigate();

    return (
        <div className="layoutColor">
            <h1 style={{ textAlign: 'center', color: 'white', paddingTop: '50px' }}>Welcome New User!</h1>
            <br />

            <h2 style={{ textAlign: 'center', color: 'white' }}>Please select one of the options</h2>

            <div style={{
                backgroundColor: 'white',
                height: '135px',
                width: '400px',
                display: 'block',
                border: '5px red solid',
                paddingTop: '10px',
                marginLeft: '370px'
            }}>
                <div className='' style={{
                    textAlign: 'center',
                    marginBottom: '30px'
                }}>
                    <button
                        className='btn btn-secondary'
                        style={{ marginRight: '15px' }}
                        onClick={() => { navigate('/coachLoggingIn') }}>Login as Coach
                    </button>

                    <button
                        className='btn btn-info'
                        onClick={() => navigate('registerCoach')}>Register as Coach
                    </button>
                </div>

                <div className='' style={{ textAlign: 'center' }}>
                    <button
                        className='btn btn-secondary'
                        style={{ marginRight: '15px' }}
                        onClick={() => navigate('userLoggingIn')}>Login as User
                    </button>

                    <button
                        className='btn btn-info'
                        onClick={() => navigate('registerUser')}
                    >Register as User</button>
                </div>
            </div>

            <Footer />
        </div>
    );
}
export default StartingPage;