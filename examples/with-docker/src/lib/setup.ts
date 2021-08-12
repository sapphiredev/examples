// Unless explicitly defined, set NODE_ENV as development:
process.env.NODE_ENV ??= 'development';

import 'reflect-metadata';
import '@sapphire/plugin-logger/register';
import '@sapphire/plugin-api/register';
import '@skyra/editable-commands';
import { options as coloretteOptions } from 'colorette';
import { inspect } from 'util';

// Set default inspection depth
inspect.defaultOptions.depth = 1;

// Enable colorette
coloretteOptions.enabled = true;
