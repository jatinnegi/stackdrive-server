import app from "@/utils/server";

const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}...`);
});
