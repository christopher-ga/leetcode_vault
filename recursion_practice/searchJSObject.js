function searchJSObject(obj, search) {

    let x;

    for (const keys in obj) {

        if (obj[keys] === search) {
            console.log('found');
            return true;
        }

        if (typeof obj[keys] === "object" ) {
            let x = searchJSObject(obj[keys], search);

            if (x) return true;

        }


    }



}

let obj = {
    t1: 1,
    t2: {
        t3: 2,
        t4: 3,
    },
    t5: {
        t6:4
    }
};

searchJSObject(obj, 4)