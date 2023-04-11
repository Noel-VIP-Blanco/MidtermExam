const books = [
    {
        title: "House of the Dragon: Fire and Blood",
        characters:[
            {
                id:1,
                name:"Rhaenyra Targaryen",
                house:"House Targaryen"
            },
            {
                id:2,
                name:"Laenor Velayron",
                house:"House Velayron"
            }
        ]
    },
    {
        title: "Game of Thrones: A song of Fire and Ice",
        characters:[
            {
                id:3,
                name:"Cersei Lannister",
                house:"House Lannister"
            },
            {
                id:4,
                name:"Arya Stark",
                house:"House Stark"
            }
        ]
    }
];

let result = [];
let aaa = "Noel"
books.map(
    (book, indexX) => {
        let temp = [];
        let char = book.characters;
        let noel = "Noel"
        char.map(
            (character, indexY)=>{
                if(indexX === 0){
                    temp.push({[indexY]: null})
                }
                else{
                    temp.push({[indexY]: character.name + " from house of " + character.house});
                }
            }    
        );
        result.push(temp)
    }
)
console.log(result);

