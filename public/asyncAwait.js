

function resolveAfter1second(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("resolved");
        }, 1000);
    });
}

async function asyncCall() {
    console.log(`calling`);
    const result = await resolveAfter1second();
    console.log(result);
    
}

asyncCall();