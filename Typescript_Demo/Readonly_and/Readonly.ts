//readonly is used when we don't want to reassign the value for a particular variable

type productDetails = {
    readonly _id :string;
    name:string,
    category: number;
}
let product_details : productDetails;

product_details = {
    _id: "1234",
    name : "Charcoal FaseWash",
    category : 3,
}

product_details.name = "apple cider fasewash";
// product_details._id = "7777";
// it gives the error or squiggy line that says "Cannot assign to '_id' because it is a read-only property."