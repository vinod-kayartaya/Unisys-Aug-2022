function main() {
    var myName = 'Vinod';

    {
        let myName = 'Kumar';
        let myCity = 'Bangalore';

        console.log('Inside the block, myName is', myName);
        console.log('Inside the block, myCity is', myCity);
    }

    console.log('Outside the block, myName is', myName);
    console.log('Outside the block, myCity is', myCity);
}

main();
