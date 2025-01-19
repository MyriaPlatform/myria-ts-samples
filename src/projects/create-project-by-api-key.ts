import {
  ProjectManager,
  CreateProjectParams,
  ProjectResponse,
  CreateProjectParamsByAPIKey
} from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const projectManager: ProjectManager = new ProjectManager(env);

  const params: CreateProjectParamsByAPIKey = {
      name: "PROJECT_NAME",
      companyName: "COMPANY_NAME",
      contactEmail: "COMPANY_EMAIL",
      apiKey: "Developer Api key",
      myriaUserID: "Retrieve via developer portal"
  };

  console.log("Creating the project...");
  const newProjectResponse: ProjectResponse = await projectManager.createProjectByApiKey(params)

  console.log("Created project response:");
  console.log(JSON.stringify(newProjectResponse, null, 2));
})();
