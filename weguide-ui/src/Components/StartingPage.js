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
                justifyContent: 'center',
                display: 'block',
                border: '5px red solid',
                paddingTop: '10px',
                marginLeft: '370px',
                marginRight: '390px'
            }}>
                <div className='' style={{

                    marginBottom: '30px'
                }}>
                    <button
                        className='btn btn-secondary'
                        style={{}}
                        onClick={() => navigate('/coachSignup')}
                    >Login as Coach</button>

                    <button
                        className='btn btn-info'
                        style={{ marginLeft: '50px' }}
                        onClick={() => navigate('/registerCoach')}
                    >Register as Coach</button>
                </div>

                <div className='' style={{}}>
                    <button
                        className='btn btn-secondary'
                        style={{ marginRight: '70px' }}
                        onClick={() => navigate('/userSignup')}
                    >Login as User</button>

                    <button
                        className='btn btn-info'
                        onClick={() => navigate('/registerUser')}
                    >Register as User</button>
                </div>
            </div>

            <Footer />
        </div>
    );
}
export default StartingPage;