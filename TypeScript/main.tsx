/**
 * Logs a customized message to the console that looks like a info.
 * @param args - An array of arguments that will be logged to the console.
 */
export function info(...args: any[]): void{
    console.log(`[info] >> [ ${args} ] << [info]`);
}
export function generatePlayerId(): Promise<string | void> | string | null {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    let numCount = 0;
    let charCount = 0;
    for (let i = 0; i < 10; i++) {
        if (numCount < 7 || (numCount >= 7 && charCount < 3 && Math.random() < 0.5)) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
            if (/[0-9]/.test(result.charAt(result.length - 1))) {
                numCount++;
            } else {
                charCount++;
            }
        } else {
            result += characters.charAt(Math.floor(Math.random() * 26) + 26);
            charCount++;
        }
    }
    return result ? result : null;
}
/**
 * Executes a callback function and handles any errors that occur during its execution.
 * @param test - The callback function that contains the code to be tested.
 * @param args - Additional arguments that can be passed to the callback function.
 * @returns void
 */
function handleError(test: () => void, ...args: any[]): void {
    try {
        info('Begin Testing');
        test();
        info('End Testing');
    } catch (error: any) {
        console.log(`Some Error Occurred : ${error.message}`);
    } finally {
        console.log(`[ Function Has Successfully Executed and All the Errors are Handled. ]`);
    }
    return void(0);
}     
