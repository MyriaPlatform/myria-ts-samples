import {
  ProjectManager,
  CreateProjectParams,
  ProjectResponse
} from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const projectManager: ProjectManager = new ProjectManager();
  const starkKey: string = config.stark_key;

  let newProjectResponse: ProjectResponse | undefined;
  const params: CreateProjectParams = {
    name: "PROJECT_NAME",
    companyName: "COMPANY_NAME",
    contactEmail: "COMPANY_EMAIL",
    starkKey: starkKey,
  };

  try {
    console.log("Creating the project...");
    newProjectResponse = await projectManager.createProject(params);
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Created project response:");
  console.log(JSON.stringify(newProjectResponse, null, 2));
})();
