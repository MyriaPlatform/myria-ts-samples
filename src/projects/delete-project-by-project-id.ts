import {
    ProjectManager,
    DeleteProjectByProjectId
  } from "myria-core-sdk";
  import config from "../config";
import { APIResponseType } from "myria-core-sdk/dist/types/src/types/APIResponseType";
  
  (async (): Promise<void> => {
    const env = config.environment;
    const projectManager: ProjectManager = new ProjectManager(env);
  
    const params: DeleteProjectByProjectId = {
        projectId: 2289,
        myriaUserID: "fdce47a5-ba1b-4702-ae4c-1f477dbebc23",
        apiKey: "7a4ce1e412f4616420d0732e537923fc7c2f2b7c97a49c86929b31138b380e79"
    };
  
    console.log("Deleting the project...");
    const deletedProjectResponse: APIResponseType<boolean> = await projectManager.deleteProjectById(params);
  
    console.log("Deleted project response:");
    console.log(JSON.stringify(deletedProjectResponse, null, 2));
  })();
  