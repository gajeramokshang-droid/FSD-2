/* create react compo that contains array of fruit obj with item ID,ITEM NAME AND Availability perform 
      using filter and map 
      1.   display only available fruits 
      2.   display fruit name in h1 tag */
    

function Comp6() {
    const fruits = [
        { name: "Guava", id: 1, price: 1 },
        { name: "Dragon", id: 2, price: 10 },
        { name: "Apple", id: 3, price: 4 }
    ];

    return (
        <>
            {fruits
                .filter((fruit) => fruit.price > 0) 
                .map((fruit) => (
                    <h1 key={fruit.id}>{fruit.name},{fruit.price+10}</h1> 
                ))
            }
        </>
    );
}

export default Comp6;