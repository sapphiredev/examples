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
