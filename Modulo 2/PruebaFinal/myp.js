class Movie {
    constructor(title, releaseYear, nationality, genre, photo)
    {
      this.title = title;
      this.releaseYear = releaseYear;
      this.nationality = nationality;
      this.genre = genre;
      this.photo = photo;
    }
  }
  
  class Professional {
    constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession, photo)
    {
      this.name = name;
      this.age = age;
      this.weight = weight;
      this.height = height;
      this.isRetired = isRetired;
      this.nationality = nationality;
      this.oscarsNumber = oscarsNumber;
      this.profession = profession;
      this.photo = photo;
    }
  }
  
  const movies = [
    new Movie("Volver", 2006, "España", "Drama", "volver.jpg"),];
  
  const professionals = [
    new Professional("Pedro Almodóvar", 75, 70, 170, false, "Español", 2, "Director","Pedro.jpg")];
  
  function showSection(id) {
    document.querySelectorAll("section").forEach(section => section.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    if (id === "movies") renderMovies();
    if (id === "professionals") renderProfessionals();
  }
  
  function renderMovies() {
    const container = document.getElementById("movie-list");
    container.innerHTML = "";
    movies.forEach(movie => {
      container.innerHTML += `
        <div class="card">
          <img src="${movie.photo}" alt="${movie.title}">
          <h3>${movie.title}</h3>
          <p><strong>Año:</strong> ${movie.releaseYear}</p>
          <p><strong>Nacionalidad:</strong> ${movie.nationality}</p>
          <p><strong>Género:</strong> ${movie.genre}</p>
        </div>
      `;
    });
  }
  
  function renderProfessionals() {
    const container = document.getElementById("professional-list");
    container.innerHTML = "";
    professionals.forEach(pro => {
      container.innerHTML += `
        <div class="card">
          <img src="${pro.photo}" alt="${pro.name}">
          <h3>${pro.name}</h3>
          <p><strong>Edad:</strong> ${pro.age}</p>
          <p><strong>Peso:</strong> ${pro.weight}kg</p>
          <p><strong>Altura:</strong> ${pro.height}cm</p>
          <p><strong>Retirado:</strong> ${pro.isRetired ? "Sí" : "No"}</p>
          <p><strong>Nacionalidad:</strong> ${pro.nationality}</p>
          <p><strong>Oscars:</strong> ${pro.oscarsNumber}</p>
          <p><strong>Profesión:</strong> ${pro.profession}</p>
        </div>
      `;
    });
  }
  
  document.getElementById("movieForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newMovie = new Movie(
      formData.get("title"),
      parseInt(formData.get("releaseYear")),
      formData.get("nationality"),
      formData.get("genre"),
      formData.get("photo")
    );
    movies.push(newMovie);
    e.target.reset();
    renderMovies();
  });
  
  showSection("home");
  