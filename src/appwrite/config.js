import { Client, Databases } from "appwrite";

const client = new Client();

const vite_endpoint = import.meta.env.VITE_ENDPOINT;
const vite_project_id = import.meta.env.VITE_PROJECT_ID;

client.setEndpoint(vite_endpoint).setProject(vite_project_id);

const databases = new Databases(client);

export { client, databases };
