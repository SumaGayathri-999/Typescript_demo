// If we want to make a component( a function or class or a chunck) to be reusable for multiple types 
// of data.then we can use generics.For example:- if we want to return same type as the type of data that function takes as parameter,
// then we can use "any" type, but it is not that efficient because if we pass a number type, it can return string type that we don't want.

// In Generics, we use angular brackets which denotes the generic type.

const score: number[] = [];
const scores: Array<number> = [];   //we can  also infer the type of an array using generic angular brackets.

function identity<T>(val :T): T {
    return val
}

identity("suma");
identity(true);
identity(445);

//all are possible


//We can use the interface to pass as a generic type.
interface identity_type{
    brand: string;
    price:number;
}

identity<identity_type>({brand: "Misc", price:550});