import path from 'path'
import fse from 'fs-extra'

import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default async () => {
  const pkg = fse.readJSONSync(path.resolve(__dirname, 'package.json'))

  return {
    input: './src/index.ts',
    output: {
      file: './lib/index.js',
      format: 'cjs',
      exports: 'auto'
    },
    plugins: [commonjs(), typescript(), nodeResolve({ preferBuiltins: true })],
    external: [...Object.keys(pkg.dependencies)]
  }
}
