import { ProjectManager, ProjectResponse } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const projectManager: ProjectManager = new ProjectManager(env);
  const projectId: string = "2";

  console.log(`Retrieving details of the ${projectId} project...`);
  const projectDetailResponse: ProjectResponse = await projectManager.getProjectDetail(projectId);

  console.log("Requested project response:");
  console.log(JSON.stringify(projectDetailResponse, null, 2));
})();
