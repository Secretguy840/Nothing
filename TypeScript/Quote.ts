// Profile Program 

interface Life {
    code: Promise<string | boolean>;
    rest: Promise<string | boolean>;
    learn: Promise<string | boolean>;
}
interface Wasted{
    wasted: Promise<string | boolean>;
    again: Array<Promise<Life>>;
}
const vedansh: Life = {
    async code() {
        return "->< Writing code />";
    },
    async rest() {
        return "->< Resting />";
    },
    async learn(){
        return "->< Learning />";
    }
};

const myLife: Array<Promise<Array<Life> | Array<Wasted>>> = [vedansh.code(), vedansh.rest(), vedansh.learn()];
console.log(...myLife);

// Another - 2
// interface Life {
//     code: Promise<string | boolean>;
//     rest: Promise<string | boolean>;
//     learn: Promise<string | boolean>;
// }

// const vedansh: Life = {
//     async code() {
//         return "< Writing code />";
//     },
//     async rest() {
//         return "< Resting />";
//     },
//     async learn() {
//         return "< Learning new things />";
//     },
// };

// const myLifeLoop = async () => {
//     while (true) {
//         const activities: Array<Promise<string | boolean>> = [
//             vedansh.code(),
//             vedansh.rest(),
//             vedansh.learn(),
//         ];

//         for (const activity of activities) {
//             console.log(await activity);
//         }
//     }
// };

// myLifeLoop();

// // Another - 3
// interface Life {
//     code: Promise<string>;
//     rest: Promise<string>;
//     learn: Promise<string>;
// }

// const vedansh: Life = {
//     async code() {
//         return "< Writing code />";
//     },
//     async rest() {
//         return "< Resting />";
//     },
//     async learn() {
//         return "< Learning new things />";
//     },
// };

// const myLifeLoop = async () => {
//     while (true) {
//         const activities: Array<Promise<Life | boolean>> = [
//             vedansh.code(),
//             vedansh.rest(),
//             vedansh.learn(),
//         ];

//         for (const activityPromise of activities) {
//             const activity = await activityPromise;
            
//             if (typeof activity === 'boolean') {
//                 console.log('Got a boolean:', activity);
//             } else {
//                 console.log('Got a Life activity:', activity);
//             }
//         }
//     }
// };

// myLifeLoop();

