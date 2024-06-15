//
//
// This file is a copy of the escape room hosted server.
// It is provided here so you can understand returned errors.
// Good luck! 
//
//

/*

...  

    if (request.method === 'POST' || request.method === 'GET') {
        const projectId = request.headers['x-project-id'];
        if (!projectId) {
            response.status(200).json({
                body: "Error ERR001"
            });
            return
        } 
        const descopeClient = DescopeClient({projectId: projectId});

        const header = request.headers['authorization'];
        if (!header) {
            response.status(200).json({
                body: "Error ERR002"
            });
            return;
        }
        
        const session_token = header?.split(" ")[1] ?? "";          
        if (!session_token) {
            response.status(200).json({
                body: "Error ERR003"
            });
            return;
        }

        let jwt = "";
        try {    
            jwt = await descopeClient.validateJwt(session_token);
        }
        catch (ex) {
            response.status(200).json({
                body: "Error ERR004"
            });
        }
        
        if (jwt.token.escape !== "room") {
            response.status(200).json({
                body: "Error ERR005"
            });
            return;
        }

        if (!jwt.token.permissions || jwt.token.permissions.indexOf('player') === -1) {
            response.status(200).json({
                body: "Error ERR006"
            });
            return;
        }

        response.status(200).json({
            body: process.env.REACT_APP_GLORIOUS_LOCATION
        });

...

*/