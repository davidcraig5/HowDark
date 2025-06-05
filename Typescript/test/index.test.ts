import { execSync } from 'child_process';
import assert from 'assert';
import path from 'path';

const projectRoot = path.resolve(__dirname, '..');

const output = execSync('npx ts-node src/index.ts', { cwd: projectRoot }).toString();
assert.ok(/Goblin HP:/m.test(output), 'output should contain Goblin HP line');
console.log(output.trim());
