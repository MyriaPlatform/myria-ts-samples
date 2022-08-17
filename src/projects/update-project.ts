import { 
  ProjectManager, 
  UpdateProjectParams,
  ProjectResponse 
} from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const projectManager: ProjectManager = new ProjectManager();
  const projectId: number = config.project_id;

  let updatedProjectResponse: ProjectResponse | undefined;
  const params: UpdateProjectParams = {
    id: projectId,
    name: "PROJECT_NAME",
    companyName: "COMPANY_NAME",
    contactEmail: "COMPANY_EMAIL",
  };
  
  try {
    console.log("Updating the project...");
    updatedProjectResponse = await projectManager.updateProject(params);
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Updated project response:");
  console.log(JSON.stringify(updatedProjectResponse, null, 2));
})();
