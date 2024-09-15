import fs from 'fs-extra';
import path from 'path';

const TEMPLATES_DIR = path.join(__dirname, 'templates');
const DESTINATION_DIR = path.join(__dirname, '..', 'modules');

function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

async function replaceInFile(filePath: string, replacements: Record<string, string>) {
    let content = await fs.readFile(filePath, 'utf8');
    for (const [key, value] of Object.entries(replacements)) {
        content = content.replace(new RegExp(key, 'g'), value);
    }
    await fs.writeFile(filePath, content, 'utf8');
}

async function generateModule(moduleName: string) {
    const capitalizedModuleName = capitalizeFirstLetter(moduleName);
    const modulePath = path.join(DESTINATION_DIR, capitalizedModuleName);

    try {
        if (fs.existsSync(modulePath)) {
            console.log(`Module ${moduleName} already exists.`);
            return;
        }

        fs.mkdirSync(modulePath);

        // const files = ['controller.ts', 'service.ts', 'model.ts', 'route.ts'];
        const files = ['controller.ts','route.ts'];

        for (const file of files) {
            const capitalizedFileName = capitalizeFirstLetter(file);
            const srcPath = path.join(TEMPLATES_DIR, file);
            const destPath = path.join(modulePath, `${capitalizedModuleName}${capitalizedFileName}`);
            
            // Copy file
            fs.copyFileSync(srcPath, destPath);
            // Replace placeholders with moduleName
            await replaceInFile(destPath, {
                'MyController': `${capitalizedModuleName}Controller`,
                './PathController': `./${capitalizedModuleName}Controller`,
                // 'DemoService': `${moduleName}Service`,
                // 'DemoModel': `${moduleName}Model`,
                'PathRoute': `${moduleName}`,
            });
        }

        console.log(`Module ${moduleName} has been created.`);
    } catch (error) {
        console.error(`Error creating module ${moduleName}:`, error);
    }
}

const args = process.argv.slice(2);
if (args.length !== 1) {
    console.log('Usage: generate <module-name>');
    process.exit(1);
}

const moduleName: string = args[0]; // กำหนดประเภทของ moduleName เป็น string
generateModule(moduleName);
