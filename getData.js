fetch(url)
    .then(resp => resp.json())
    .then(function(data) {
      console.log(data.meals[0].strYoutube);
      strYoutube = data.meals[0].strYoutube;
      mealTitle.innerHTML = `${data.meals[0].strMeal}`;
      strYoutube = strYoutube.replace("watch?v=", "embed/");
      document.getElementById("videoElement").src = strYoutube;
      image.src = data.meals[0].strMealThumb;
      category.innerHTML = `<span>Category</span>: ${data.meals[0].strCategory}`;
      tags.innerHTML = `<span>Tags</span>: ${data.meals[0].strTags}`;
      instructions.innerHTML = `${data.meals[0].strInstructions}`;
      const x = data.meals[0];

      ul.innerHTML = "";
      for (i = 0; i < 21; i++) {
        const aux = `strIngredient${  i}`;
        if (data.meals[0][aux]) {
          li = document.createElement("li");
          li.style.color = document.getElementById("instructions").style.color;
          li.appendChild(document.createTextNode(data.meals[0][aux]));
          ul.appendChild(li);
        }
      }
    })
    .catch(function(error) {
      console.log(error);
    });