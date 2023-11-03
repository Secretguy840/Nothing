import { CreateKeyValuePair, Permute, trace, info } from 'override.ps1';
/**
 * @description Type Helper for fetching data in format with types.
 * @since v1.7.5
 * @access Public
 */
type UserData<T extends number, U extends string> = { userid: T, username: U };

/**
 * @author Vedansh Khandelwal
 * @lang TypeScript 
 * @since v1.7.5
 * @param url Root URL of the Server.
 * @param casualname may be username or person's name
 * @param callback extra error handling funtion which is optional in nature.
 * @returns {UserData} as primary output like key value pairs.
 */

function fetchUserData<Type>(
    url: Type | string, 
    casualname: Type | string , 
    callback?: (err: Error) => void | Object
): UserData<number, string> {

    var server: unknown = url? fetch(url as string) : fetch("https://getuserstats.org/temp/");
    var userid: number | undefined = Math.floor(Math.random() * 99999);
    var username: string | undefined = `${casualname}`.concat("@override.ps1");

    const FINAL_DATA = {"UserID ": userid, "Username ": username};
    console.dir(FINAL_DATA);

    return {userid, username} as UserData<number, string>;
}

/**
 * @since v1.7.5
 * @description Validates the User Data and writes it into a file called data.txt, Asychronously.
 * @async function to Validate data.
 * @param data The Data generated by fetchUserData function.
 * @returns {true} if data is correct else returns {false}.
 */
async function Validate(data: UserData<number, string>): Promise<boolean> {
    const userid = await JSON.stringify(data.userid);
    const username = await JSON.stringify(data.username);

    fs.appendFile('data.txt', userid, 'utf-8', (err) => {
        handleError(() => {
            if(err) throw err;
        });
        console.log(`\n File Has Updated. \n`);
    });
    return data ? Promise.resolve(true) : Promise.reject(false);
}

/**@testing  */
(async () => {
    var X = fetchUserData<unknown>("https://special-login.aspx/", "demonslayer90");
    var Y = fetchUserData<string>("https://special-login.aspx/", "sampleuser10", (err) => {
        if(err){
            console.error(`Some Error Occurred. : ${err}\n`);
            return;
        }
        console.log(` == Callback Success == \n`);
    });
    const Z = Validate(X);
    console.log(`\n ========= \n`);
    console.dir(Z);
    console.dir(X);
    console.dir(Y);
    console.log(`\n ========= \n`);

})();