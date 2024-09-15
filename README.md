# workshop001-auth-express-typescript

## Installation
```bash
cd workshop001-auth-express-typescript
-> npm install
```
## Project Structure Modular

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
    |-- jwt/
        |-- jwt.ts
```