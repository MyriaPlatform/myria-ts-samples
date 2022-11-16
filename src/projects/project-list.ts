import { ProjectManager, ProjectResponse } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const projectManager: ProjectManager = new ProjectManager(env);

  console.log("Retrieving the project list...");
  const projectListResponse: ProjectResponse = await projectManager.getProjectList();

  console.log("Project list response:");
  console.log(JSON.stringify(projectListResponse, null, 2));
})();
