import {
  ProjectManager,
  CreateProjectParams,
  ProjectResponse
} from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const projectManager: ProjectManager = new ProjectManager(env);
  const starkKey: string = config.stark_key;

  const params: CreateProjectParams = {
    name: "PROJECT_NAME",
    companyName: "COMPANY_NAME",
    contactEmail: "COMPANY_EMAIL",
    starkKey: starkKey,
  };

  console.log("Creating the project...");
  const newProjectResponse: ProjectResponse = await projectManager.createProject(params);

  console.log("Created project response:");
  console.log(JSON.stringify(newProjectResponse, null, 2));
})();
