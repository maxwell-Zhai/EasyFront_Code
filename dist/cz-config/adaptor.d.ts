export declare const prompter: (cz: {
    prompt: (e: any) => Promise<{
        answers: any;
    }>;
}, commit: (c: string) => void) => void;
