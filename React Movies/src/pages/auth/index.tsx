import { Grid, Header, Form, Segment, Button } from "semantic-ui-react";
import { useMutation } from "@tanstack/react-query";
import { mutationLogin } from "./mutation";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
    const navigate = useNavigate();  // Hook pentru a naviga între rute

    const { mutate } = useMutation({
        mutationKey: ["login"], 
        mutationFn: mutationLogin,
        onSuccess: (data) => {
            // Callback apelat după ce mutația a avut succes
            if (data?.guest_session_id) {
                // Dacă `guest_session_id` este definit, îl stocăm în localStorage
                localStorage.setItem("guest_session_id", data.guest_session_id);
                // Navigăm către pagina principală
                navigate("/");
            } else {
                // Dacă `guest_session_id` este undefined, logăm o eroare
                console.error("Guest session ID is undefined.");
            }
        },
        onError: (error) => {
            // Callback apelat dacă mutația eșuează
            console.error("Error during login:", error);
        },
    });

    const handleLogin = () => {
        // Verificăm dacă există deja un `guest_session_id` în localStorage
        const existingSessionId = localStorage.getItem("guest_session_id");
        if (existingSessionId) {
            // Dacă există, folosim ID-ul existent și navigăm direct la pagina principală
            console.log("Using existing guest session ID:");
            navigate("/");
        } else {
            // Dacă nu există, apelăm mutația pentru a obține un nou `guest_session_id`
            mutate();
        }
    };
    
    return (
        <Grid textAlign="center" verticalAlign="middle" style={{ height: '100vh' }}>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="blue" textAlign="center">
                    Salutare! Momentan te poți conecta doar ca vizitator! 😁
                </Header>
                <Form size="large">
                    <Segment stacked size="large">
                        <Button color="blue" size="large" fluid onClick={handleLogin}>
                            Login
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    );
};
