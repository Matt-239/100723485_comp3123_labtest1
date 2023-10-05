const resolvedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = { message: 'delayed success!' };
      resolve(success);
    }, 500);
  });
};

const rejectedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = { message: 'delayed exception!' };
      reject(error);
    }, 500);
  });
};

resolvedPromise()
  .then(result => console.log(result))
  .catch(error => console.error(error));

rejectedPromise()
  .then(result => console.log(result))
  .catch(error => console.error(error));