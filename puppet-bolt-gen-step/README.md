# puppet-bolt-gen-step
Puppet Bolt yaml generator for plan steps.


## Method: Message step

**Description:**

Use a message step to print a message. This will print a message to standard out (stdout) when using the human output format, and print to standard error (stderr) when using the json output format.

Further information can be found on [Puppet's documentation](https://puppet.com/docs/bolt/latest/writing_yaml_plans.html#message-step)

**Parameters:**

* Plan - The name of the plan to add the step to.
* Name (Optional) - The name of the step.
* Description (Optional)
* Message - The message to print

## Method: Command step

**Description:**

Use a command step to run a single command on a list of targets and save the results, containing stdout, stderr, and exit code.

The step fails if the exit code of any command is non-zero.

Further information can be found on [Puppet's documentation](https://puppet.com/docs/bolt/latest/writing_yaml_plans.html#command-step)

**Parameters:**

* Plan - The name of the plan to add the step to.
* Name (Optional) - The name of the step.
* Description (Optional)
* Command - The command to run.
* Targets - A target or list of targets to run the command on (one per line).


## Method: Script step

**Description:**

Use a script step to run a script on a list of targets and save the results.

The script must be in the files/ directory of a module. The name of the script must be specified as <modulename>/path/to/script, omitting the files directory from the path.

Further information can be found on [Puppet's documentation](https://puppet.com/docs/bolt/latest/writing_yaml_plans.html#script-step)

**Parameters:**

* Plan - The name of the plan to add the step to.
* Name (Optional) - The name of the step.
* Description (Optional)
* Script Path - The script to run
* Arguments - (Optional) An array of command-line arguments to pass to the script
* Targets - A target or list of targets to run the command on (one per line).


## Method: Download File step

**Description:**

Use a file download step to download a file or directory from a list of targets to a destination directory on the local host.

Files and directories are downloaded to the destination directory within a subdirectory matching the target's URL-encoded safe name. If the destination directory is a relative path, it will expand relative to the project's downloads directory, <PROJECT DIRECTORY>/downloads.

Further information can be found on [Puppet's documentation](https://puppet.com/docs/bolt/latest/writing_yaml_plans.html#file-download-step)

**Parameters:**

* Plan - The name of the plan to add the step to.
* Name (Optional) - The name of the step.
* Description (Optional)
* File path - The location of the remote file to download
* Destination - The destination directory to download the file to
* Targets - A target or list of targets to run the command on (one per line).


## Method: Upload File step

**Description:**

Use a file upload step to upload a file to a specific location on a list of targets.

The file to upload must be in the files/ directory of a Puppet module. The source for the file must be specified as <modulename>/path/to/file, omitting the files directory from the path.

Further information can be found on [Puppet's documentation](https://puppet.com/docs/bolt/latest/writing_yaml_plans.html#file-upload-step)

**Parameters:**

* Plan - The name of the plan to add the step to.
* Name (Optional) - The name of the step.
* Description (Optional)
* File path - The location of the local file to be uploaded.
* Destination - The remote location to upload the file to.
* Targets - A target or list of targets to run the command on (one per line).


## Method: Plan step

**Description:**

Use a plan step to run another plan and save its result.

Further information can be found on [Puppet's documentation](https://puppet.com/docs/bolt/latest/writing_yaml_plans.html#plan-step)

**Parameters:**

* Plan - The name of the plan to add the step to.
* Name (Optional) - The name of the step.
* Description (Optional)
* Plan to run - The name of the plan to run
* Parameters - (Optional) An object of parameter values to pass to the plan


## Method: Eval step

**Description:**

The eval step evaluates an expression and saves the result in a variable. This is useful to compute a variable to use multiple times later.

Further information can be found on [Puppet's documentation](https://puppet.com/docs/bolt/latest/writing_yaml_plans.html#eval-step)

**Parameters:**

* Plan - The name of the plan to add the step to.
* Name (Optional) - The name of the step.
* Description (Optional)
* Eval - The eval express