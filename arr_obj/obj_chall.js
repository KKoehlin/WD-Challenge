
let house = {
    rooms:[
        {
            name: "bedroom",
            doors: 3,
            windows: 4,
            flooring: "carpet",
            current_occupants: []
        },
        {
            name: "bathroom",
            doors: 1,
            windows: 0,
            flooring: "tile",
            current_occupants: []
        },
        {
            name: "kitchen",
            doors: 0,
            windows: 2,
            flooring: "hardwood",
            current_occupants: []
        }
    ],
    people: [
        {
            name: "Justin",
            age: 28, 
        },
        {
            name: "Tony",
            age: 8, 
        }
    ]
}

// 1 bathroom 
console.log(house.rooms[1].name)
// 2 [with room names]
console.log(house.rooms.map(room => room.name))

//3 the people in the kitchen 

house.rooms[2].current_occupants = house.people
console.log(house.rooms[2])