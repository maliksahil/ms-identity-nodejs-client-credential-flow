# NodeJS daemon secured using Azure AD.

## See other Azure AD + NodeJS code examples

1. Daemon/serverless applications [Client Credential Flow](https://github.com/maliksahil/ms-identity-nodejs-client-credential-flow)
2. Web Applications [OIDCStrategy](https://github.com/maliksahil/ms-identity-nodejs-webapp)
3. Web APIs [BearerStrategy](https://github.com/maliksahil/ms-identity-nodejs-webapi)
4. Forwarding user identity [On Behalf Of Flow](https://github.com/maliksahil/ms-identity-nodejs-on-behalf-of)
5. Key Vault and [Managed Identity](https://github.com/maliksahil/ms-identity-nodejs-managed-identity)

This application uses client credential flow to read `https://graph.microsoft.com/v1.0/users` from Microsoft Graph

## App setup and configuration
1. Register a web app, no redirect URI, add a client credential.
2. Update settings.json with values from step 1.
3. Grant permissions to the app to `user.read.all` under Microsoft Graph, ensure you grant consent.
6. Run `npm start`, and visit `http://localhost:3000` ensure you can see profile information for all users in the console output.