import {
  ProjectManager,
  UpdateProjectParams,
  ProjectResponse
} from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const starkKey: string = config.stark_key;
  const env = config.environment;

  const projectManager: ProjectManager = new ProjectManager(env);
  const projectId: number = config.project_id;

  const params: UpdateProjectParams = {
    id: projectId,
    name: "PROJECT_NAME",
    companyName: "COMPANY_NAME",
    contactEmail: "COMPANY_EMAIL",
    starkKey: starkKey,
  };

  console.log("Updating the project...");
  const updatedProjectResponse: ProjectResponse = await projectManager.updateProject(params);

  console.log("Updated project response:");
  console.log(JSON.stringify(updatedProjectResponse, null, 2));
})();
