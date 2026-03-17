function addRecipe() {

  let title = document.getElementById("title").value;
  let ingredients = document.getElementById("ingredients").value;
  let instructions = document.getElementById("instructions").value;

  let recipe = `
    <h3>${title}</h3>
    <p><b>Ingredients:</b> ${ingredients}</p>
    <p><b>Instructions:</b> ${instructions}</p>
    <hr>
  `;

  document.getElementById("recipes").innerHTML += recipe;

}
