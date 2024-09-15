# modular-auth-express-typescript

## Installation
```bash
cd modular-auth-express-typescript
-> npm install
```
## Project Modular Structure 

```bash
src/
|-- cli/
    |-- templates/
        |-- controller.ts
        |-- service.ts
        |-- model.ts
        |-- routes.ts
    |-- generate.js
|-- modules/
    |-- user/
        |-- user.controller.ts
        |-- user.service.ts
        |-- user.model.ts
        |-- user.routes.ts
|-- config/
    |-- db.ts
|-- middleware/
    |-- auth.middleware.ts
|-- utils/
    |-- helpers.ts
|-- providers/
    |-- jwt
        |-- jwt.ts
```


## Generate CLI Modules

To generate a new module, follow these steps:

1. Navigate to the project directory:
    ```bash
    cd modular-auth-express-typescript
    ```

2. Run the generate command with the desired module name:
    ```bash
    npm run generate users
    ```
    *(Replace `users` with the name of the module you want to create.)*
