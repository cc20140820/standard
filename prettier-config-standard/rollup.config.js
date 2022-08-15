import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default async () => {
  return {
    input: './src/index.ts',
    output: {
      file: './lib/index.js',
      format: 'cjs',
      exports: 'auto'
    },
    plugins: [commonjs(), typescript()]
  }
}
