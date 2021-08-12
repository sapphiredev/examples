// Unless explicitly defined, set NODE_ENV as development:
process.env.NODE_ENV ??= 'development';

require('reflect-metadata');
require('@sapphire/plugin-logger/register');
require('@sapphire/plugin-api/register');
require('@skyra/editable-commands');
const { options: coloretteOptions } = require('colorette');
const { config } = require('dotenv-cra');
const { join } = require('path');
const { inspect } = require('util');
const { srcDir } = require('./constants');

// Read env var
config({ path: join(srcDir, '.env') });

// Set default inspection depth
inspect.defaultOptions.depth = 1;

// Enable colorette
coloretteOptions.enabled = true;
