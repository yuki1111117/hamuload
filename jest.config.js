module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    // CSS モックをモックする設定
    '\\.(css|scss)$': 'identity-obj-proxy',
    // pages と components ディレクトリのエイリアスを設定（必要であれば他のディレクトリも追加）
    '^(pages|components)/(.+)': '<rootDir>/src/$1/$2',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react',
      },
    },
  },
  // DMX と SVG の変換処理を追加
  transform: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.jsx?$': 'ts-jest',
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
  },
}
