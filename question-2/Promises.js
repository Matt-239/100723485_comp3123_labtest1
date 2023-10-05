const resolvedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = { 'message': 'delayed success!' };
        resolve(success);
    }, 500);
});

const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw new Error('error: delayed exception!');
        } catch (e) {
            reject(e);
        }
    }, 500);
});

resolvedPromise.then(result => console.log(result));
rejectedPromise.catch(error => console.log(error));