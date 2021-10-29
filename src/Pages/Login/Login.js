import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { googleSignIn } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                history.push(redirect_uri);
            })
    }
    return (
        <div>
            <Col>
                <Card className="w-25 mx-auto mt-5">
                    <Card.Body>
                        <Card.Title>Please Login</Card.Title>
                        <Button onClick={handleGoogleSignIn} className="btn color11 my-5">Google Sign In</Button>
                        <Card.Text>
                            New User? Aonther login option will be coming soon.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Login;