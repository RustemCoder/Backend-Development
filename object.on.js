//object.on
//It defines an event handler that the framework calls when an event occurs

http.request( options, function(response) {
 let buffer = ‘’;
 ...
 response.on('data', function(chunk) {
   buffer += chunk;
 });
 response.on('end', function() {
   console.log(buffer);
 });
}).end();

//Callback Hell/The Pyramid of Doom

//Nested callbacks stacked below one another and waiting for the previous callback. 
//This creates a pyramid structure that affects the readability and maintainability of the code.

const makeCake = nextStep => {
  buyIngredients(function(shoppingList) {
    combineIngredients(bowl, mixer, function(ingredients){
      bakeCake(oven, pan, function(batter) {
        decorate(icing, function(cake) {
          nextStep(cake);
        });
      });
    });
  });
};
