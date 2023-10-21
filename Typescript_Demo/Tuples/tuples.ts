// Tuple type is a type of array of known length with different elemenst may have different types.
// It will be more useful that the types we have mentioned in the array should only have a specific order and also only paticular length 
// For ex:Api response has a specific format

let user:[string, number, boolean];
user = ["data", 123 , false ]

export {};


//second example rgb.it should only have 3 values and only nuumber type should be allowed.

let rgb : [number,number,number]
rgb = [227,227,227];