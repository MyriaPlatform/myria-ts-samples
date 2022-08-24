import { ProjectManager, ProjectResponse } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const projectManager: ProjectManager = new ProjectManager(env);

  let projectListResponse: ProjectResponse | undefined;
  try {
    console.log("Retrieving the project list...");
    projectListResponse = await projectManager.getProjectList();
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }
  console.log("Project list response:");
  console.log(JSON.stringify(projectListResponse, null, 2));
})();
