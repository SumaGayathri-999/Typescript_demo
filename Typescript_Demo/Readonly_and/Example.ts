//readonly for arrays,we if use only readonly for id,we can't reassign anything to that Id ,
// but we can push the elements and also change the elements by indexng.So, we have to use readonly for array too

type productDetails = {
    readonly _id :readonly number[];
    name:string,
    category: number;
}
let product_details : productDetails;

product_details = {
    _id: [1,2,3,4],
    name : "Charcoal FaseWash",
    category : 3,
}

product_details.name = "apple cider fasewash";
// product_details._id.push(5);
// it gives the error or squiggy line that says "Property 'push' does not exist on type 'readonly number[]'."

export {};