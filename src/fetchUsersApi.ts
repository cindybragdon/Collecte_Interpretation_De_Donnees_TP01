import * as fs from "fs";
import * as path from "path";

export async function fetchUsersFromAPi() {

    // Fetch API qui renvoie les utilisateurs au format JSON
    const usersFromApi = await fetch(
        "https://fakestoreapi.com/users"
        ).then((response) => response.json());


    //Populer le JSON avec productsData
    //const productsData = JSON.stringify(products, null, 2);
    const usersData = JSON.stringify(usersFromApi, null, 2);
    const filePath = path.join(__dirname, "../../data/usersData.json");
    //Si le répertoire n'existe pas, crée le
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, { recursive: true });
    }
    try {

      fs.writeFileSync(filePath, usersData);
      console.log(
        "SERVICE : Le fichier productsData.json est populé par API FakeStore/products"
      );
    } catch (err) {
      console.error(
        "SERVICE : Erreur lors de lécriture de productsData dans productsData.json"
      );
    }

  

}
