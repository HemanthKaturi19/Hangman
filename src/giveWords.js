export function giveWords(){
    const arrayName={
        0:"Animals",
        1:"Birds",
        2:"Vegetables",
        3:"Fruits"
    };
    const wordsArray=[["elephant","leopord","boar","goat"],["parrot","sparrow","kingfisher","hen"],
                    ["spinach","onions","brinjal","capsicum"],["guava","papaya","mango","pitaya"]];
     
     const key=Math.floor(Math.random() * wordsArray.length);
     
     return {arrayName:arrayName[key],wordArray:wordsArray[key]};
}