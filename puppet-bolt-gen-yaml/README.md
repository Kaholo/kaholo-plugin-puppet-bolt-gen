# puppet-bolt-gen-yaml
Puppet Bolt yaml file generator


## Method: Create Yml

**Description:**

Generates the yml files. The plugin automatically creates a `plans` directory on the output path and creates the files acceroding to the plan's names. 

**Parameters:**

* Results (array) - Array of all the previous Puppet Actions generator plugins results
* Output Path (optional) - output directory to ccreate plans direcoty in.