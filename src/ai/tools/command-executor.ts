import { DynamicTool } from 'langchain/tools';
import { exec } from 'child_process';

export const CommandExecutorTool = new DynamicTool({
  name: 'COMMAND_EXECUTOR_TOOL',
  description:
    'use this to execute commands in the current environment. the input should be the command to be executed',
  func: (input) => {
    return new Promise((resolve, reject) => {
      exec(input, (error, stdout, stderr) => {
        if (error) {
          console.log(`command error: ${error.message}`);
          return reject(error);
        }
        if (stderr) {
          console.log(`command stderr: ${stderr}`);
          return reject(stderr);
        }

        return resolve(stdout);
      });
    });
  },
});
