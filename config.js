System.config({
    baseUrl: '/',
    transpiler: 'typescript',
    typescriptOptions: {
        "emitDecoratorMetadata": true
    },
    packages: {
        "app": {
            "defaultExtension": 'ts',
            "main": "main.ts"
        }
    }
});

/* allows us to use System.import('app') to load content from app/main.ts*/