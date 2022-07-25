import { Modules } from "myria-core-sdk";
import { ProjectResponse } from "myria-core-sdk/dist/types/src/types/ProjectTypes";
import config from "../config";

const name: string = "Secret Game";
const companyName: string = "Secret Studio";
const contactEmail: string = "secret@google.com";

(async (): Promise<void> => {
  const projectModule: Modules.ProjectModule = new Modules.ProjectModule();

  let newProjectResult: ProjectResponse | undefined;
  try {
    console.log("Creating the project...");
    newProjectResult = await projectModule.createProject({
      name: name,
      companyName: companyName,
      contactEmail: contactEmail,
      starkKey: config.stark_key
    });
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Created the project:");
  console.log(JSON.stringify(newProjectResult, null, 2));
})();