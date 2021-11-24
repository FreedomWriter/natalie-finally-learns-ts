const profile = {
    name: "alex",
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number):void {
        this.age = age
    }
}

// const { age } = profile
// const { coords: { lat, lng } } = profile
// this is sufficient, however if there is a need to annotate
// it would look like this:

const { age }: { age: number } = profile;

const { coords: { lat, lng } }: {coords: { lat: number, lng: number} } = profile