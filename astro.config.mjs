import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    // 'always' | 'never' | 'ignore'
    // 'always' - 末尾にスラッシュを含むURLにのみマッチする (例: “/foo/“)
    // 'never' - 末尾にスラッシュを含むURLにはマッチしない (ex: “/foo”)
    // 'ignore' - URL の末尾に ”/” があるかどうかに関係なく一致する
    trailingSlash: 'ignore',
});
