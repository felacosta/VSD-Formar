import express from "express";
import User from "./models/User";
import { sequelize } from "./config/database";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});


main()

async function main() {
  if (require.main === module) {
    await sequelize.sync({ force: true}).then(() => {
      console.log("Database is synced");
      app.listen(port, () =>
      console.log('Listening at http://localhost:${port}'),
    );
    });
  
  // Criar usuário
  const user = await User.create({ name: 'Alice', email: 'alice@email.com'});
  console.log("Usuário criado:", user.toJSON());
}
}
