# Simple Calculator

[![CI/CD Pipeline](https://github.com/your-username/simple-calculator/actions/workflows/ci.yml/badge.svg)](https://github.com/your-username/simple-calculator/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/your-username/simple-calculator/branch/main/graph/badge.svg)](https://codecov.io/gh/your-username/simple-calculator)
[![npm version](https://badge.fury.io/js/simple-calculator.svg)](https://badge.fury.io/js/simple-calculator)

TypeScriptで作成したシンプルな四則演算ライブラリです。GitHub ActionsによるCI/CDパイプラインとJestによる包括的なテストを含んでいます。

## 特徴

- ✅ TypeScriptによる型安全な実装
- ✅ Jestによる包括的なテストカバレッジ（80%以上）
- ✅ ESLintによるコード品質チェック
- ✅ GitHub Actionsによる自動CI/CD
- ✅ 複数Node.jsバージョンでのテスト（18.x, 20.x）
- ✅ セキュリティ監査
- ✅ 自動npm公開

## インストール

```bash
npm install simple-calculator
```

## 使用方法

```typescript
import { Calculator } from 'simple-calculator';

const calc = new Calculator();

// 基本的な四則演算
console.log(calc.add(2, 3));      // 5
console.log(calc.subtract(5, 3)); // 2
console.log(calc.multiply(4, 3)); // 12
console.log(calc.divide(10, 2));  // 5

// 配列の計算
console.log(calc.sum([1, 2, 3, 4, 5]));     // 15
console.log(calc.average([2, 4, 6]));        // 4
```

## API リファレンス

### `Calculator`

#### `add(a: number, b: number): number`
2つの数値の加算を行います。

#### `subtract(a: number, b: number): number`
2つの数値の減算を行います。

#### `multiply(a: number, b: number): number`
2つの数値の乗算を行います。

#### `divide(a: number, b: number): number`
2つの数値の除算を行います。0で割る場合はエラーを投げます。

#### `sum(numbers: number[]): number`
数値配列の合計を計算します。

#### `average(numbers: number[]): number`
数値配列の平均を計算します。空配列の場合はエラーを投げます。

## 開発

### 前提条件

- Node.js 18.x または 20.x
- npm

### セットアップ

```bash
# リポジトリのクローン
git clone https://github.com/your-username/simple-calculator.git
cd simple-calculator

# 依存関係のインストール
npm install
```

### 開発用コマンド

```bash
# テストの実行
npm test

# テストのウォッチモード
npm run test:watch

# カバレッジ付きテスト
npm run test:coverage

# コードのビルド
npm run build

# リンター実行
npm run lint

# リンター自動修正
npm run lint:fix

# ビルド成果物のクリーンアップ
npm run clean
```

### テストカバレッジ

このプロジェクトは以下のカバレッジ閾値を維持しています：

- Branches: 80%
- Functions: 80%
- Lines: 80%
- Statements: 80%

### CI/CD パイプライン

GitHub Actionsによる自動化された品質チェックとデプロイメントが設定されています：

**プルリクエスト・プッシュ時：**
- 複数Node.jsバージョンでのテスト
- ESLintによるコード品質チェック
- Jestによるテスト実行とカバレッジ測定
- TypeScriptビルド
- セキュリティ監査

**mainブランチへのプッシュ時：**
- 上記すべて + npm自動公開（バージョンが更新された場合）

## コントリビューション

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

### プルリクエストガイドライン

- 新機能には適切なテストを追加してください
- テストカバレッジを維持してください（80%以上）
- ESLintルールに従ってください
- コミットメッセージは明確で説明的にしてください

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルを参照してください。

## バッジの説明

- **CI/CD Pipeline**: GitHub Actionsでのビルド状況
- **codecov**: テストカバレッジの割合
- **npm version**: 公開されているパッケージのバージョン

## トラブルシューティング

### よくある問題

**Q: テストが失敗する**
A: `npm ci`で依存関係を再インストールしてから`npm test`を実行してください。

**Q: ESLintエラーが出る**
A: `npm run lint:fix`で自動修正を試すか、エラーメッセージに従って手動で修正してください。

**Q: ビルドが失敗する**
A: TypeScriptの型エラーを確認し、`tsc --noEmit`でエラー詳細を確認してください。

## 作成者

あなたの名前 - [@your-twitter](https://twitter.com/your-twitter) - your.email@example.com

プロジェクトリンク: [https://github.com/kazuma0606/ts-ci-cd-test](https://github.com/kazuma0606/ts-ci-cd-test)