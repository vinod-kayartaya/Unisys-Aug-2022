const myPromiseObject = new Promise(function (resolve, reject) {
    // if the job is successful, then call the resolve function
    resolve({ data: 100 }); // this will take precedence over the following reject() call

    // if the job is unsuccessful, then call the reject function
    reject({ code: 1234, message: 'Something went wrong!' });

    console.log("end of Promise constructor's callback");
});

console.log('start of script');

myPromiseObject
    .then((data) => console.log('resolved data is ', data)) // callback is executed in the future
    .catch((err) => console.log('rejected err is', err)); // callback is executed in the future

console.log('end of script');
