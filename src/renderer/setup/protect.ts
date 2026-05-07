// 处理前端代码被剽窃的情况 — 已清除 fork 版本不需要的反剽窃代码

import { CHATBOX_BUILD_TARGET } from '../variables'

switch (CHATBOX_BUILD_TARGET) {
  case 'mobile_app':
    break
  case 'unknown':
    break
}
